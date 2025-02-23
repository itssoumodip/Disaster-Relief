require('dotenv').config();
const express = require('express'); // Import express
const bodyParser = require('body-parser');
const cors = require('cors');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const app = express(); // Create an express app instance
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(bodyParser.json());

const sendSMS = async (body) => {
    let msg = {
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.MY_PHONE_NUMBER,
        body: body
    };

    try {
        const message = await client.messages.create(msg);
        console.log("Message Sent:", message.sid);
    } catch (err) {
        console.error("Error Sending SMS:", err.message); // Use console.error
        throw new Error("Failed to send SMS");
    }
};

app.post('/send-sos', async (req, res) => {
    const { latitude, longitude } = req.body;

    console.log('Received SOS request:', req.body);

    if (!latitude || !longitude) {
        console.log('Invalid location data:', req.body);
        return res.status(400).json({ message: "Invalid location data" });
    }

    const sosMessage = `🚨 SOS ALERT 🚨\nUser needs help!\nLocation: https://www.google.com/maps?q=${latitude},${longitude}`;

    console.log('Sending SMS with message:', sosMessage);
    try {
        await sendSMS(sosMessage);
        res.json({ message: "SOS Sent Successfully!" });
    } catch (err) {
        console.error('Failed to send SOS:', err.message);
        res.status(500).json({ message: "Failed to send SOS" });
    }
});

app.listen(PORT, () => { // Start the server
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});