var path = require('path');

const parkingData = {
    'AI' : {lastUpdated :'주차 가능 여부를 보려면 새로고침 하세요', imageUrl : null},
    'center' : {lastUpdated :'주차 가능 여부를 보려면 새로고침 하세요', imageUrl : null}   
}

module.exports={
    aispace : (req, res)=>{
        var title = 'AI 공학관';
        var status = 'AI';
        
        const aiData = parkingData.AI;
        
        var context = {
            title: title, 
            data : aiData,
            status : status
        }

        res.render('parking', context, (err, html)=>{
            if(err) {console.log(err)}
            res.end(html)
        })
    }, 

    AI_receiver : (req, res)=>{
        const { image_url } = req.body;

        console.log(image_url);
        console.log(parkingData.AI.imageUrl);

        if (!image_url) {
            return res.status(400).send("image_url is required");
        } else{
            if(image_url === "ejs"){
                if(!parkingData.AI.imageUrl){
                    parkingData.AI.lastUpdated = "서버와 연결이 불안정합니다" 
                }
            }else{
                const now = new Date();
                const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

                parkingData.AI.imageUrl = image_url;
                parkingData.AI.lastUpdated = formattedDate;
            }

            if (req.headers['user-agent'] && req.headers['user-agent'].includes("Python")) {
                // Python 요청 처리
                return res.status(204).send(); // No Content 응답
            } else {
                // 브라우저 요청 처리
                return res.redirect("/parking/aispace");
            }
        }
    },

    center : (req, res)=>{
        var title = '학생회관';
        var status = 'center';
        
        const centerData = parkingData.center;
        
        var context = {
            title: title, 
            data : centerData,
            status : status
        }

        res.render('parking', context, (err, html)=>{
            if(err) {console.log(err)}
            res.end(html)
        })
    },

    center_receiver : (req, res)=>{
        const { image_url } = req.body;

        console.log(image_url);
        console.log(parkingData.center.imageUrl);

        if (!image_url) {
            return res.status(400).send("image_url is required");
        } else{
            if(image_url === "ejs"){
                if(!parkingData.center.imageUrl){
                    parkingData.center.lastUpdated = "서버와 연결이 불안정합니다" 
                }
            }else{
                const now = new Date();
                const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

                parkingData.center.imageUrl = image_url;
                parkingData.center.lastUpdated = formattedDate;
            }

            if (req.headers['user-agent'] && req.headers['user-agent'].includes("Python")) {
                // Python 요청 처리
                return res.status(204).send(); // No Content 응답
            } else {
                // 브라우저 요청 처리
                return res.redirect("/parking/center");
            }
        }
    },

}