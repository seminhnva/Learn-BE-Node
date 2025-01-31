require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST;

const confgigViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

confgigViewEngine(app);
app.use("/test", webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
