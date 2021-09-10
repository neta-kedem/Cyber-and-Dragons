import dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, "../../client/build")));
app.get("/api/*", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
