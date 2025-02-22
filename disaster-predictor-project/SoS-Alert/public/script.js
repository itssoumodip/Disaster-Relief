document.getElementById('sosButton').addEventListener('click', async () => {
    const phone = document.getElementById('phone').value;
    const message = 'SOS! I need immediate assistance!';

    if (!phone) {
        alert('Please enter a phone number');
        return;
    }

    try {
        const response = await fetch('/send-sos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, message })
        });

        const data = await response.json();
        document.getElementById('status').textContent = data.success || data.error;
    } catch (error) {
        document.getElementById('status').textContent = 'Failed to send SOS';
    }
});
