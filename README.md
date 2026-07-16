# 🚀 Personal URL Shortener API

A REST API based URL shortening service similar to Bitly.  
The application converts long URLs into short unique links, redirects users, tracks visits, stores creation dates, and handles invalid URLs.

---

# 📌 Project Overview

The Personal URL Shortener API is developed using Node.js and Express.js.

Users can submit a long URL and receive a unique short URL. When the short URL is accessed, the system redirects the user to the original URL and updates the visit count.

This project demonstrates backend fundamentals including REST APIs, database design, authentication, validation, error handling, Git workflow, and documentation.

---

# 🎯 Objectives

- Create a URL shortening REST API
- Generate unique short codes
- Redirect short URLs
- Track URL visits
- Store URL creation dates
- Validate user input
- Implement authentication
- Maintain proper Git commits

---

# ✨ Features

## Core Features

✅ Long URL shortening  
✅ Unique short code generation  
✅ URL redirection  
✅ Visit tracking  
✅ Creation date storage  
✅ Invalid URL handling  


## Bonus Features

✅ JWT Authentication  
✅ Docker Support  
✅ Swagger API Documentation  
✅ Error Handling Middleware  

---

# 🛠️ Tech Stack

## Backend

- Node.js
- Express.js

## Database

- SQLite

## Libraries

- nanoid
- validator
- dotenv
- bcrypt
- jsonwebtoken

## Tools

- Git
- GitHub
- Docker
- Postman
- VS Code

---

# 📂 Folder Structure

```
Personal-URL-Shortener

├── controllers
│   ├── authController.js
│   └── urlController.js
│
├── database
│   └── database.js
│
├── docs
│   └── swagger.js
│
├── middleware
│   ├── auth.js
│   └── errorHandler.js
│
├── models
│   └── urlModel.js
│
├── routes
│   ├── authRoutes.js
│   └── urlRoutes.js
│
├── utils
│   └── generateCode.js
│
├── app.js
├── Dockerfile
├── package.json
└── README.md
```

---

# ⚙️ Installation Steps

Clone repository:

```bash
git clone https://github.com/sumanthreddy2279-a11y/Personal-URL-Shortener.git
```

Move into project:

```bash
cd Personal-URL-Shortener
```

Install packages:

```bash
npm install
```

---

# 🔐 Environment Variables

Create `.env`

```
PORT=5000
JWT_SECRET=mysecretkey
```

---

# ▶️ Run Locally

Start server:

```bash
npm start
```

Development:

```bash
npm run dev
```

Application:

```
http://localhost:5000
```

---

# 🔗 API Endpoints

## Create Short URL

POST

```
/api/url/shorten
```

Request:

```json
{
"longUrl":"https://www.google.com"
}
```

Response:

```json
{
"success":true,
"shortCode":"UcRjGU",
"shortUrl":"http://localhost:5000/UcRjGU"
}
```

---

## Redirect URL

GET

```
/:shortCode
```

Example:

```
http://localhost:5000/UcRjGU
```

---

## URL Statistics

GET

```
/api/url/stats/:shortCode
```

Returns:

- Original URL
- Short code
- Visits
- Creation date

---

# 👤 Authentication APIs

Register:

```
POST /api/auth/register
```

Login:

```
POST /api/auth/login
```

Authentication uses JWT tokens.

---

# 🗄️ Database Design

## URLs Table

| Column | Description |
|-|-|
| id | Primary key |
| long_url | Original URL |
| short_code | Unique generated code |
| visits | Visit count |
| created_at | Creation date |

## Users Table

| Column | Description |
|-|-|
| id | Primary key |
| username | User name |
| email | User email |
| password | Encrypted password |

---

# 🔄 Working Flow

1. User submits long URL.
2. API validates URL.
3. Server generates short code.
4. Data is stored in SQLite.
5. Short URL is returned.
6. User opens short URL.
7. Server redirects to original URL.
8. Visit count increases.

---

# 📖 API Documentation

Swagger UI:

```
http://localhost:5000/api-docs
```

---

# 🐳 Docker Support

Build image:

```bash
docker build -t personal-url-shortener .
```

Run:

```bash
docker run -p 5000:5000 personal-url-shortener
```

---

# 🔀 Git Usage & Commits

Git was used for version control and maintaining development history.

Meaningful commits:

1. Initial commit: Personal URL Shortener API

2. Add SQLite database configuration

3. Add unique short code generation utility

4. Add URL validation and error handling

5. Add URL redirect and visit tracking

6. Add authentication documentation

7. Add Swagger API documentation

8. Add Docker configuration

9. Improve API documentation

10. Complete README documentation

---

# 💡 Assumptions Made

- SQLite is sufficient for this project size.
- Every short code must be unique.
- URLs are publicly accessible.
- Authentication is required for protected features.
- Short URLs are generated automatically.

---

---

# 🚧 Challenges Faced

- Designing API structure
- Database integration
- Authentication implementation
- Error handling
- Docker setup
- Git management

---

# 🚀 Future Improvements

- URL expiration
- QR code generation
- Rate limiting
- Analytics dashboard
- Cloud deployment
- Redis caching

---

# 👨‍💻 Author

** name :Arumulla Sumanth Reddy**

   course: Computer Science Undergraduate  
   Blockchain Technology
    college : jain university
---

# 📜 License

Created forInternship Technical Assignment.

# ❓ Additional Questions

## 1. What is HTTP?

HTTP is a protocol used for communication between clients and servers over the internet.

---

## 2. Difference between GET and POST?

GET retrieves data from server.

POST sends data to server for creating resources.

---

## 3. What is JSON?

JSON is a lightweight data format used for exchanging information between applications.

---

## 4. What is an API?

API allows different software applications to communicate with each other.

---

## 5. What is a database?

A database stores and manages data efficiently.

---

## 6. SQL vs NoSQL?

SQL databases use tables and fixed schemas.

NoSQL databases use flexible document-based structures.

---

## 7. What happens when you type google.com?

1. DNS converts domain into IP address.
2. Browser connects to server.
3. Request is sent.
4. Server returns response.
5. Browser displays webpage.

---

## 8. What is Git?

Git is a version control system used to track code changes and maintain project history.

---

## 9. Authentication vs Authorization?

Authentication verifies identity.

Authorization determines permissions.

---

## 10. What is REST API?

REST API is a method of communication between applications using HTTP methods like GET, POST, PUT, and DELETE.