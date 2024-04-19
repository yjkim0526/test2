// const http = require("http");
// const app = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html;Charset=utf-8" });
//     res.end(" http 루트  \n");
//   } else if (req.url === "/login") {
//     res.writeHead(200, { "Content-Type": "text/html;Charset=utf-8" });
//     res.end(" http 로그인 \n");
//   }
// });
// app.listen(3000, () => {
//   console.log("http app listening on port 3000!");
// });

// 모듈
const express = require("express");
const app = express();
const PORT = 3000;

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;
