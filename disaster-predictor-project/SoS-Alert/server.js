require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSMS = async (body) => {  // Change "Body" to "body"
    let msg = {
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.MY_PHONE_NUMBER,
        body: body  // Correct reference to body
    };
    
    try {
       const message = await client.messages.create(msg);
       console.log("Message Sent:", message.sid);
    } catch (err) {
        console.log("Error Sending SMS:", err.message);
    }
};

// Call the function
sendSMS("Hello, i am under the water");
