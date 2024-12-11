const express = require('express');
const app = express();
const title = require('./lib/title');
var favicon = require('serve-favicon');
const path = require('path')
// const cloudinary = require('./indexGPT');

// view setting
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');

// 정적 파일 사용
app.use(express.static(path.join(__dirname, 'public')));    
//favicon 설정

const faviconPath = path.join(__dirname, 'public', 'images', 'favicon.ico');
app.use(favicon(faviconPath));

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

app.listen(port, ()=>{
    console.log(`connected to port : ${port}`);
})

module.exports= app;