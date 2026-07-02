# 📧 Premium Node.js Email Sender

A sleek, modern, and production-ready web application built with **Node.js**, **Express**, and **Nodemailer**. This application features an interactive, glassmorphic user interface powered by **EJS** and custom **Vanilla CSS** to compose and send emails with file attachments seamlessly.

---

## ✨ Features

- **Modern Glassmorphic UI**: Beautiful, interactive front-end designed with custom vanilla CSS, vibrant gradient backdrops, smooth transitions, and premium typography (Outfit).
- **Nodemailer Integration**: Robust email dispatch engine supporting custom SMTP configurations (Gmail, Outlook, Mailtrap, etc.).
- **Automatic Attachments**: Dynamically attaches pre-configured files (e.g., `data.pdf`) from the server to outgoing emails.
- **Environment Driven**: Keeps credentials and server settings secure using `.env` configurations.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile viewing.

---

## 🛠️ Tech Stack

- **Backend**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Email Service**: [Nodemailer](https://nodemailer.com/)
- **Template Engine**: [EJS](https://ejs.co/) (Embedded JavaScript)
- **Styling**: Custom CSS (Vanilla) with glowing backdrops and CSS variables
- **Development Utility**: [Nodemon](https://nodemon.io/)

---

## 📂 Project Structure

```text
├── files/
│   └── data.pdf             # Sample attachment file
├── public/
│   └── style.css            # Custom CSS for styling the UI
├── views/
│   └── mailpage.ejs         # EJS template for the email client interface
├── .env                     # Local environment configurations (ignored by git)
├── .gitignore               # Excludes node_modules and env files
├── index.js                 # Application entry point & main backend logic
├── package.json             # App manifest and dependencies list
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v16.x or higher recommended).

### 1. Clone the Repository

```bash
git clone https://github.com/Nikhilsaini223/Email-Sender-NodeJS.git
cd Email-Sender-NodeJS
```

### 2. Install Dependencies

Install all the required npm packages:

```bash
npm install
```

### 3. Setup Environment Variables

Create a file named `.env` in the root of the project:

```env
PORT=3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

> [!NOTE]
> If you are using Gmail, you cannot use your standard account password. You must generate a 16-character **App Password** from your Google Account settings (Security > 2-Step Verification > App passwords).

### 4. Run the Server

Start the application:

```bash
npm start
```

Or for development with auto-reloading (using nodemon if installed globally, or run via npx):

```bash
npx nodemon index.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

---

## 🔌 API Endpoints

### 1. Render Mail Composer (UI)
- **URL**: `/`
- **Method**: `GET`
- **Description**: Renders the frontend email composer dashboard.

### 2. Send Email
- **URL**: `/send-email`
- **Method**: `POST`
- **Content-Type**: `application/x-www-form-urlencoded` or `application/json`
- **Request Body**:
  ```json
  {
    "to": "recipient@example.com",
    "subject": "Hello from Node.js",
    "text": "This is a test email sent from the Node.js mailer."
  }
  ```
- **Response (Success)**:
  ```json
  {
    "message": "Email Send Successfully",
    "info": { ... }
  }
  ```

---

## 🔒 Security Practices

- **Never Commit Credentials**: The `.env` file is excluded from version control via `.gitignore`. Ensure your actual passwords or app passwords are never committed to GitHub.
- **Environment-Specific Port Configuration**: Uses `process.env.PORT` to allow deployment to cloud providers (like Render, Heroku, or Vercel).

---

## 📄 License

This project is licensed under the **ISC License**. Feel free to use and adapt it for your own requirements.
