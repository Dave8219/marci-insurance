const nodemailer = require("nodemailer");

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// console.log("EMAIL USER:", process.env.EMAIL_USER);
// console.log("EMAIL PASS LENGTH:", process.env.EMAIL_PASS?.length);
const sendLeadEmail = async (lead) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "New Lead Created",
    text: `
New Lead:
Name: ${lead.name},
Email: ${lead.email},
Phone: ${lead.phone},
Insurance: ${lead.insurance_type || "N/A"}
Message: ${lead.message || "No message provided"}
`,
  });
};

const sendEmail = async ({ to, subject, text, html }) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  });
};

module.exports = { sendLeadEmail, sendEmail };
