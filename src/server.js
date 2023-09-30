const express = require('express');
const cors = require('cors')
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/getGamespotArticles', async (req, res) => {
  try {
    const response = await axios.get('http://www.gamespot.com/api/articles/?api_key=f40e9be9c9909eacb5a6de2e231cdf90cf17aa1e&limit=15&format=json&sort=publish_date:desc', {
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
