require("dotenv").config();

const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const transporter = nodemailer.createTransport({
  // SMTP configuration
  host: process.env.SMTP_HOST, // SMTP server host
  port: Number(process.env.SMTP_PORT), // SMTP server port
  secure: false, // Use TLS
  auth: {
    // Authentication credentials
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { to, subject, text } = req.body;

  // const template = fs.readFile('./views/email-template.ejs')
  // const html = ejs.render(template, {name: 'John'})

  try {
    const info = await transporter.sendMail({
      from: `"Nikhil Saini" <${process.env.SMTP_USER}>`,
      to: to,
      subject: subject,
      text: text,
      // html: '<b>Hello Message</b>',
      // html: html,
      attachments: [
        {
          filename: "data.pdf",
          path: path.join(__dirname, "files", "data.pdf"),
        },
      ],
    });

    res.json({ message: "Email Send Successfully", info });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
});

app.get("/", (req, res) => {
  res.render("mailpage");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
