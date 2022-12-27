const express = require("express");
const app = express();

require('dotenv').config();
console.log(process.env.PORT) // remove this after you've confirmed it is working



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
