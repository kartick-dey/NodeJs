const express = require('express');
const router = require('./routes/index');
const apiErrorHanler = require('./error-handler/api-error-handler');

const app = express();

app.use(express.json());

app.use("/", router);
app.use(apiErrorHanler)

app.listen(3000, () => {
    console.log("Server is up and running at port 3000")
});