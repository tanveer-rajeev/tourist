import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/posts", postRoutes);

mongoose
  .connect("mongodb://localhost/memories")
  .then((res) => console.log("Connection successfully"))
  .catch((err) => console.log(err));
// const CONNECTION_URL =
//   "mongodb+srv://rajeeb:rajeeb123@cluster0.imzgboa.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
//   )
//   .catch((err) => console.log(err.message));
// mongoose.set("useFindAndModify", false);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
