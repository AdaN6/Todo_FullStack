const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

const port = process.env.PORT || 8080

const middlewares = [
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cors(),
];
app.use(middlewares);

app.use("/", routes);


app.use((req, res, next) => res.status(404).send("Sorry can't find that!"));



app.listen(8080, () => console.log(`App running at ${port}`));
