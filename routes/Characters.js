const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  let { apiKey, limit, skip, title } = req.query;

  if (!limit) {
    limit = "";
  }
  if (!skip) {
    skip = "";
  }
  if (!title) {
    title = "";
  }

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.YOUR_API_KEY}&limit=${limit}&skip=${skip}&title=${title}`
    );
    console.log(response);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
