class NewsController {
  // GET /news
  index(req, res) {
    res.render("news");
  }

  // GET /:slug
  show(req, res) {
    res.send("DETAIL NEWS!!!");
  }
}

module.exports = new NewsController();
