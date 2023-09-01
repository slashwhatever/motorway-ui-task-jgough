const app = require("express")();
const images = require("./src/images.json");

const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

app.get("/images", ({ query }, res) => {
  const LIMIT = query.limit;
  const START = query.start || 0;
  const i = images.slice(START, parseInt(LIMIT));

  setTimeout(() => {
    return res.status(200).json(i);
  }, randomInterval(500, 1500));
});

app.listen(5005, () => {
  process.stdout.write("Server is available on http://localhost:5005/\n");
});
