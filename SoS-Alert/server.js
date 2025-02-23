require('dotenv').config();
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
const port = 3000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.use(cors());
app.use(express.json());

// API to send SOS alert
app.post('/send-sos', async (req, res) => {
    const { to, message } = req.body;

    try {
        const response = await client.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.MY_PHONE_NUMBER,
            body: message
        });

        res.json({ success: true, message: 'SOS Sent!!!', sid: response.sid });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
