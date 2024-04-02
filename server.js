const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
//app.use("/api", );
app.use("/api", [require("./routes/allocationRoutes")]);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
