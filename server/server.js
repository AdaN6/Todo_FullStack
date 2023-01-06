const express = require("express");
const app = express();
const cors = require("cors");


const port = process.env.PORT || 8080


app.listen(8080, () => console.log(`App running at ${port}`));
