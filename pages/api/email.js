import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { to, code } = req.body;

  if (!to) {
    return res.status(400).send("Email address is required");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "davidanyatonwu@gmail.com",
      pass: "yvgqhpskqubovuoq",
    },
  });

  const mailOptions = {
    from: "davidanyatonwu@gmail.com",
    to: to,
    subject: "Confirmation code from BoxPay",
    text:
      req.body.message +
      `- Please Visit https://paylock.vercel.app/code and enter ${req.body.code} to redeem your payment on ${req.body.network}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Email could not be sent");
  }
}
