var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/me", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/me.html"));
  });

  app.get("/scholar", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/scholar.html"));
  });

  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/portfolio.html"));
  });

};

