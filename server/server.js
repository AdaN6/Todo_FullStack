const express = require("express");
const app = express();

const port = env.process.PORT || 8080


app.listen(8080, () => console.log(`App running at ${port}`));
