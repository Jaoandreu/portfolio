const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // You can use any port

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  // Configure your mail server. Here's an example using Gmail.
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'wise.mtv@gmail.com',
    clientId: '230664201023-mq92s121k9c55eape35k4ed7ldhfqson.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//04-kuj0bXiIhFCgYIARAAGAQSNwF-L9Ir-3vAml17wX0wKhWj4zPpZIKIp_BtlQQ8WlRUaqRiZmhv3jYeZTwkNliJO3WOMA6_0yk',
    accessToken: 'ya29.a0Ad52N396Uj2NChInvX_1c73RXQQgaklB3iVXUFGxdLpGQiZLQnqDNr_19yAQCBfSE1Z2v3E1UWwVp5rNiEHeqN94bbZm7GwMgZmBBJh_lE4CyyJX9_Pv803YsfrcOQx2z4xDL-fmv-qCETmPZPELJRJ4GbAuGq4aS3ZzaCgYKAXcSARESFQHGX2MikyWf3vRH_K9-JqTi_aRljA0171',
  },
});

app.post('/send', (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    from: email, // Sender address
    to: 'wise.mtv@gmail.com', // List of recipients
    subject: 'Contact Form Submission', // Subject line
    text: message, // Plain text body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log(info);
      res.status(200).json({ error: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});