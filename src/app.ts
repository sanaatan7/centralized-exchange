import express from "express";

const app = express();
app.use(express.json()); //middleman

app.get("/", (req, res) => {
  console.log("Hello");
  res.status(200).json({message: "OK"})
});
export default app;
