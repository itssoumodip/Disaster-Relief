require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());  // Allow requests from frontend
app.use(bodyParser.json());  // Parse JSON data

// Function to send SMS
const sendSMS = async (messageBody) => {
    let msg = {
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.MY_PHONE_NUMBER,
        body: messageBody
    };
    
    try {
        const message = await client.messages.create(msg);
        console.log("Message Sent:", message.sid);
    } catch (err) {
        console.error("Error Sending SMS:", err.message);
    }
};

// API to handle SOS request
app.post('/send-sos', async (req, res) => {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        return res.status(400).json({ message: "Invalid location data" });
    }

    const sosMessage = `🚨 SOS ALERT 🚨\nUser needs help!\nLocation: https://www.google.com/maps?q=${latitude},${longitude}`;

    await sendSMS(sosMessage);

    res.json({ message: "SOS Sent Successfully!" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
