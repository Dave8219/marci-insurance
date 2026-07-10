const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

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
