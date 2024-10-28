import express from "express"
import axios from "axios"

const app = express()

const port = 3001

app.get('/recipes', async (req, res) => {
    try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2/?app_id=2ad4c6d4&app_key=c0d2e9fa1b0e65bfcee50aefd21b0374&q=chicken&type=public`);
      res.json(response.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  app.listen(port, () => console.log(`Proxy server running on port ${port}`))