// const e = require('express');
const express = require("express");
const fs = require("fs");

const pfade = {
  file: "data/user.json",
};

const server = express();
server.use(
  express.static("public", {
    extensions: ["html"],
  })
);

server.use(express.json());

server.post("/login", (req, res) => {
  let user = req.body.user;
  let pass = req.body.pass;
  fs.readFile(pfade.file, (err, content) => {
    if (err) return;
    else {
      content = JSON.parse(content);
      let contentUser = content.find((cont) => cont.user == user);
      if (typeof contentUser == "undefined") {
        res.send("false");
      } else {
        if (pass != contentUser.pass) {
          res.send("false");
        } else {
          res.send("true");
        }
      }
    }
  });
});

server.listen(80, (err) => {
  if (err) console.log(err);
  else console.log("OK");
});
