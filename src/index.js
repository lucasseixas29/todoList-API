const express = require("express");
const router = require("./routes/router");

const app = express();

app.use(express.json());


app.use(router);

const PORT = 3000;

app.listen(PORT, () => console.log(`listening in http://localhost:${PORT}`))