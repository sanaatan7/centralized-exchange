import app from "./src/app";
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Centralized exchange running at port ${PORT}`);
});
