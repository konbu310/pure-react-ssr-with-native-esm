import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "./App.js";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

async function server() {
  app.get("/health_check", (req, res) => {
    return res.send("ok");
  });

  app.use(express.static("build"));

  app.get("/", (_, res) => {
    const jsx = ReactDOMServer.renderToString(<App />);
    const html = `
      <html lang="ja">
        <body>
          <div id="root">${jsx}</div>
          <script src="client.js"></script>
        </body>
      </html>`;
    res.send(html);
  });

  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
}

server().catch(console.error);
