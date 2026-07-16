const validator = require("validator");
const db = require("../database/database");
const generateCode = require("../utils/generateCode");
const QRCode = require("qrcode");

// Create Short URL
const shortenUrl = (req, res) => {

    const { longUrl, customCode, expiresAt } = req.body;

    if (!longUrl) {
        return res.status(400).json({
            success: false,
            message: "URL is required"
        });
    }

    if (!validator.isURL(longUrl)) {
        return res.status(400).json({
            success: false,
            message: "Invalid URL"
        });
    }

    const shortCode = customCode || generateCode();

    db.run(
        "INSERT INTO urls (long_url, short_code, expires_at) VALUES (?, ?, ?)",
        [longUrl, shortCode, expiresAt || null],
        function (err) {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            const shortUrl = `http://localhost:5000/${shortCode}`;

QRCode.toDataURL(shortUrl, (err, qrCode) => {

    if (err) {
        return res.status(500).json({
            success: false,
            message: "QR Code generation failed"
        });
    }

    res.status(201).json({
        success: true,
        longUrl,
        shortCode,
        expiresAt,
        shortUrl,
        qrCode
    });

});

        }
    );

};

// Redirect
const redirectUrl = (req, res) => {

    const shortCode = req.params.shortCode;

    db.get(
        "SELECT * FROM urls WHERE short_code = ?",
        [shortCode],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    message: "Short URL not found"
                });
            }

            // Check Expiration
            if (row.expires_at && new Date() > new Date(row.expires_at)) {
                return res.status(410).json({
                    message: "This URL has expired"
                });
            }

            db.run(
                "UPDATE urls SET visits = visits + 1 WHERE short_code = ?",
                [shortCode]
            );

            res.redirect(row.long_url);

        }
    );

};

// Statistics
const getStats = (req, res) => {

    const shortCode = req.params.shortCode;

    db.get(
        "SELECT * FROM urls WHERE short_code = ?",
        [shortCode],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    message: "Short URL not found"
                });
            }

            res.json({
                longUrl: row.long_url,
                shortCode: row.short_code,
                visits: row.visits,
                createdAt: row.created_at,
                expiresAt: row.expires_at
            });

        }
    );

};

module.exports = {
    shortenUrl,
    redirectUrl,
    getStats
};