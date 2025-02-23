require('dotenv').config();
const express = require('express'); // Import express
const cors = require('cors');
const twilio = require('twilio');

const app = express(); // Create an express app instance
const PORT = process.env.PORT || 5500;

// Twilio configuration
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.use(cors());
app.use(express.json());

app.post('/send-sos', async (req, res) => {
  try {
    const { to, message } = req.body;

    const twilioMessage = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to
    });

    res.json({
      success: true,
      messageId: twilioMessage.sid
    });
  } catch (error) {
    console.error('Twilio Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(PORT, () => { // Start the server
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});