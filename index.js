const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;
const corsOption = require("./config/corsOptions");
app.use(cors(corsOption));
app.use("/api/users", require("./routes/userroute"));
app.use(express.json());

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
