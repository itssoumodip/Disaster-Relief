const sosService = {
  sendSOS: async () => {
    const phoneNumber = "+917980734036"; // Use environment variable in production
    const message = "🚨 SOS Alert! User needs help immediately. 🚨";

    try {
      const response = await fetch('http://localhost:5500/send-sos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: phoneNumber, message })
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send SOS');
      }

      return result;
    } catch (error) {
      console.error('SOS Error:', error);
      throw error;
    }
  }
};

export default sosService;