const nodemailer = require("nodemailer");

const trasporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "devanshiballar1611@gmail.com",
    pass: "hlzh hytt ejvd qnsm",
  },
});

console.log(trasporter);
async function sendData(to, subject, html) {
  const mailFormat = {
    from: "devanshiballar1611@gmail.com",
    to: to,
    subject: subject,
    html: html,
  };
  await trasporter.sendMail(mailFormat, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent mail");
    }
  });
}
module.exports = sendData;
