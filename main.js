const express = require('express');
const app = express();
const title = require('./lib/title');

// view setting
app.set('views','./views')
app.set('view engine', 'ejs');

// 정적 파일 사용
app.use(express.static('public'));

//라우터 지정
var parkingRouter = require('./router/parkingRouter');
//mapping
app.use('/parking', parkingRouter);

app.get('/', (req, res)=>{
    title.home(req, res)
})


//favicon.ico setting


//listen
var port = 3000;
// var PORT = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`connected to port : ${port}`);
})