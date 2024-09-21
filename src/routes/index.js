const newsRouter = require("./news");
const siteRouter = require("./site");

function router(app) {
  app.use("/news", newsRouter);

  app.use("/", siteRouter);
}

module.exports = router;
