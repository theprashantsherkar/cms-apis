# CMS-APIs 📰

A simple Content Management System (CMS) API built with Node.js, Express, and MySQL. Supports CRUD operations on articles, with AI-powered slug and summary generation.

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) articles
- AI-generated slugs and summaries using OpenAI (optional)
- RESTful architecture
- MySQL database support
- Docker-ready

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MySQL
- Prisma (optional)
- Docker (optional)
- OpenAI API (optional)

---

## 📦 Project Structure

cms-apis/
├── routes/
│ └── articles.js # Article API routes
├── utils/
│ └── aiHelper.js # AI slug & summary generator
├── config/
│ └── db.js # MySQL DB connection config
├── app.js # Express app setup
├── server.js # Entry point
├── Dockerfile # Docker container config
├── package.json
└── README.md

---

## 🔧 Setup Instructions

### 1. Clone the repository
bash
git clone https://github.com/your-username/cms-apis.git
cd cms-apis

### 2. Install dependencies
bash
Copy
Edit
npm install
### 3. Configure environment variables
Create a .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=cms
OPENAI_API_KEY=your_openai_key  # optional

### 4. Set up the MySQL database
Run the SQL script or manually create the table:

CREATE DATABASE cms;

USE cms;

CREATE TABLE articles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  slug VARCHAR(255),
  summary TEXT,
  content TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


### 5. Start the server

npm start
Server runs on http://localhost:5000.

## 🐳 Run with Docker (optional)
### 1. Build the image

docker build -t cms-api .

### 2. Run the container

docker run -p 5000:5000 --env-file .env cms-api


## API Endpoints
GET /articles
Fetch all articles

GET /articles/:id
Fetch a single article

POST /articles
Create a new article

Required: title, content

PUT /articles/:id
Update an article by ID

DELETE /articles/:id
Delete an article by ID

## 🧠 AI Features
Slug and summary are auto-generated using OpenAI based on the article content.

Configure your OPENAI_API_KEY in .env to use this feature.


-- Thank you!
