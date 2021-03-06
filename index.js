const express = require("express");
const internalIp = require("internal-ip");
const serveIndex = require("serve-index");

const app = express();
const port = 3344;

const currentDir = __dirname + "/";
app.use(
  "/",
  express.static(currentDir),
  serveIndex(currentDir, { icons: true })
);

// app.get("/download", (req, res) =>
//   res.download(
//     "./filePath"
//   )
// );

app.listen(port, () => {
  console.log(
    `App listening at http://${internalIp.v4.sync()}:${port}`
  );
});
