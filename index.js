let express = require("express");
let fileSystem = require("fs");

let server = express();

server.get("/user/:id", (req, res) => {
  fileSystem.readFile("./" + req.params.id + ".json", (err, data) => {
    if (err) {
      res.status(404).json({
        error: err.message,
      });
    } else {
      res.json(JSON.parse(data.toString()));
    }
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
