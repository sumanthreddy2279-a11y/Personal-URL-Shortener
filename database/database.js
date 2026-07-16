// SQLite database connection and URL table initialization
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(
    path.join(__dirname, "../urls.db"),
    (err) => {

        if (err) {
            console.error("Database connection failed:", err.message);
        } else {

            console.log("✅ SQLite Database Connected");

            db.run(`
                CREATE TABLE IF NOT EXISTS urls (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    long_url TEXT NOT NULL,
                    short_code TEXT UNIQUE NOT NULL,
                    visits INTEGER DEFAULT 0,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    expires_at DATETIME
                )
            `);

        }

    }
);

module.exports = db;