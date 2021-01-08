import express from "express";

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("Hello from profile");

const middleware1 = (req, res, next) => {
  console.log("middleware1");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("middleware2");
  next();
};

app.use(middleware1);
app.use(middleware2);
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
