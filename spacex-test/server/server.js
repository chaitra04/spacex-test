import React from "react";
import express from "express";
import fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router'
import App from "../src/App";
const app = express();
const PORT = 3006;
app.use("^/$", (req, res, next) => {
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err,data)=>{
        if(err) {
        console.log(err);
        return res(500).send("some err happened");
    }
    const context = {};
    const html = ReactDOMServer.renderToString(
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App/>
        </StaticRouter>
      )
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
              )
        )
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")))

app.listen(PORT, ()=>{
    console.log(`App launched on ${PORT}`);
})