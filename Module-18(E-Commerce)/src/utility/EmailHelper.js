const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const EmailSend = async (EmailTo, EmailText, EmailSubject) => {
  let transport = nodemailer.createTransport({
    host: `${process.env.MailHost}`,
    port: 25,
    secure: false,
    auth: { user: `${process.env.AuthUser}`, pass: `${process.env.AuthPass}` },
    tls: { rejectUnauthorized: false },
  });

  let mailOption = {
    from: `Work Manager <${process.env.AuthUser}>`,
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transport.sendMail(mailOption);
};

module.exports = EmailSend;
