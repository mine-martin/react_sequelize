const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());

const Port = process.env.PORT || 8000;

//routes
app.use("/tutos", require("./routes/tuto"));

app.listen(Port, (req, res) => {
  console.log(`Server is running on Port ${Port}`);
});
