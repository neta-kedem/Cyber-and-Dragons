import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
const port = process.env.PORT || 3003
import path from "path"
const {env} = process

//
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api/*", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});