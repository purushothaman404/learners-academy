const next = require("next");
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const jsonPlaceholderProxy = createProxyMiddleware({
  target: "http://localhost:8000",
  // pathRewrite: {
  //   '^/api/old-path': '/api/', // rewrite path
  //   '^/api/remove/path': '/path', // remove base path
  //   },
  changeOrigin: true,
});






app
  .prepare()
  .then(() => {
    const server = express();


    server.use("/api", jsonPlaceholderProxy);

    server.get("/", (req, res) => {
      app.render(req, res, "/", {});
    });

    server.get("/registration/:role", (req, res) => {
      const queryParams = { role: req.params.role, ...req.query };
      app.render(req, res, "/registration", { ...queryParams });
    });

    server.get("/aboutus", (req, res) => {
      app.render(req, res, "/about", {});
    });

    server.get("/terms", (req, res) => {
      app.render(req, res, "/termsandconditions", {});
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log(
        "---------------Server started on http://localhost:3000----------------"
      );
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
