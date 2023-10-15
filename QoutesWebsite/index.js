const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/api/quote', async (req, res) => {
    try {
        const response = await axios.get('http://api.quotable.io/random'); // Replace with your desired API endpoint.
        const quote = response.data;
        res.json({ text: quote });
    } catch (error) {
        console.error('Error fetching quote:', error);
        res.status(500).json({ error: 'Failed to fetch a quote.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
