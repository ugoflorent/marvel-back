require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI);

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/"
    );
    console.log(response.data);
    res.json({ message: "welcome to the signup project" });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

const charactersRoutes = require("./routes/characters");
app.use(charactersRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This routes doesn't exist" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Serveur has started on port ${process.env.PORT}`);
});
