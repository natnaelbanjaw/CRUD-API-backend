const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRoutes");

const app = express();

app.use(express.json());
app.use("/api/products", productRouter);

mongoose
  .connect(
    "mongodb+srv://n_admin:nat123@cluster0.g4b9x.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
