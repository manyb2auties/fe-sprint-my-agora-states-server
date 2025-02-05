const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.use(cors())
// TODO: cors를 적용합니다.
app.use(express.json()) 
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.

const port = 3001;
const discussionsRouter = require('./router/discussions');

app.use('/discussions', discussionsRouter)
// TODO: /discussions 경로로 라우팅합니다. 

app.get('/', (req, res) => {
  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
  res.status(200).send('<h1>Welcome, You are in the homepage!</h1>');
  throw '';
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
