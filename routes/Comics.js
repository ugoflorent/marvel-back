const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.YOUR_API_KEY}`
  );
  console.log(response);

  res.status(200).json(response.data);
});

module.exports = router;
