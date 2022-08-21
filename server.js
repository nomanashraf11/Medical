const express = require("express");
const connectDb = require("./mongodb");
const app = express();
const port = process.env.port || 4000;

connectDb();
app.listen(port, () => {
  console.log(`the API is listening on port ${port}`);
});
