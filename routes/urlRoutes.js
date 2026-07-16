const express = require("express");
const router = express.Router();

const {
    shortenUrl,
    redirectUrl,
    getStats
} = require("../controllers/urlController");

const verifyToken = require("../middleware/auth");

/**
 * @swagger
 * /shorten:
 *   post:
 *     summary: Create a Short URL
 *     description: Create a new shortened URL (JWT required)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Short URL created successfully
 */
router.post("/shorten", verifyToken, shortenUrl);

/**
 * @swagger
 * /stats/{shortCode}:
 *   get:
 *     summary: Get URL Statistics
 *     parameters:
 *       - in: path
 *         name: shortCode
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: URL statistics
 */
router.get("/stats/:shortCode", getStats);

/**
 * @swagger
 * /{shortCode}:
 *   get:
 *     summary: Redirect to Original URL
 *     parameters:
 *       - in: path
 *         name: shortCode
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       302:
 *         description: Redirects to original URL
 */
router.get("/:shortCode", redirectUrl);

module.exports = router;