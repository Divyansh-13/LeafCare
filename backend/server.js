import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 5001;


const EMAIL_USER = 'leafcare24@gmail.com';
const EMAIL_PASS = 'ctji aljv umxy ptbk';


app.use(bodyParser.json());
app.use(cors());


app.post('/send-mail', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  
  const receiverEmail = email;

  const mailOptions = {
    from: EMAIL_USER,
    to: receiverEmail, 
    subject: `New Query from ${name}`,
    text: `You have received a new query from the contact form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.', error });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
