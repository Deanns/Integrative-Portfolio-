const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(bodyParser.json());

let testimonials = [];

app.get("/api/testimonials", (req, res) => {
  res.json(testimonials);
});

app.post("/api/testimonials", (req, res) => {
  const { name, email, message, rating } = req.body;

  if (!name || !email || !message || !rating) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const date = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const testimonial = { name, email, message, rating, date };
  testimonials.push(testimonial);

  res.status(201).json(testimonial);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
