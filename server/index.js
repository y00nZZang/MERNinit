const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 5000);

app.get('/test', (req, res)=>{
  res.send("SUCCESSFULLY CONNECTED");
})

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트 서버 구동중');
})