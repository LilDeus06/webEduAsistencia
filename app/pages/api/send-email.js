import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message } = req.body;

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "pochiitoo46@gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail password or app-specific password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: "Solicitud de Demo APP",
        text: `Email: ${email}\nMessage: ${message}`,
        html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}