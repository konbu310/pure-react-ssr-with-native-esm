import React from "react";
import ReactDOMServer, { renderToPipeableStream } from "react-dom/server";
import { App } from "../share/App.js";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

async function main() {
  app.get("/health_check", (req, res) => {
    return res.send("ok");
  });

  app.use(express.static("build"));

  app.get("/", (req, res) => {
    const jsx = ReactDOMServer.renderToString(<App />);
    const html = `<html lang="ja">
  <body>
    <div id="root">${jsx}</div>
    <script src="client.js"></script>
  </body>
</html>`;
    res.send(html);
  });

  app.get("/stream", async (req, res) => {
    const { pipe } = renderToPipeableStream(<App />, {
      bootstrapScripts: ["client.js"],
      onShellReady() {
        res.setHeader("content-type", "text/html");
        pipe(res);
      },
    });
  });

  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
}

main().catch(console.error);
