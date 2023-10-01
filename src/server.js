const express = require('express');
const cors = require('cors')
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/getGamespotArticles', async (req, res) => {
  try {
    const response = await axios.get('http://www.gamespot.com/api/articles/?api_key=api_key&limit=15&format=json&sort=publish_date:desc', {
      params: req.query,
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Damned, ça ne marche pas.....' });
  }
});

app.listen(port, () => {
  console.log(`Le poto serveur Proxy envoie nos requêtes sur le port: ${port}`);
});
