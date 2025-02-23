const sendSOS = async (backendUrl, latitude, longitude) => {
    try {
        const response = await fetch(`${backendUrl}/send-sos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ latitude, longitude })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('SOS Sent Successfully:', data.message);
    } catch (error) {
        if (error.name === 'TypeError') {
            console.error('Network error:', error.message);
        } else {
            console.error('Failed to send SOS:', error.message);
        }
    }
};
