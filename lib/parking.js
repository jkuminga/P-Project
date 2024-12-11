const parkingData = {
    'AI' : {lastUpdated :'2022-03-19', imageUrl : 'https://i.namu.wiki/i/d0j0P0goZ0h8so_hZl9KFEyLas2h2pMIvzQEvBOgU9pj_GnfyfktphoWX5D_yd3khWqf60ErGjaOJ-p3M8rWg4Yh3BxKCqvNDJFydxGI7vO_C8uQqQyW-VQDiSbHhoEGQAHuZQrOiyanFKYmcLG_-Q.webp'},
    'center' : {lastUpdated : null, imageUrl : null}   
}

module.exports={
    aispace : (req, res)=>{
        
        const { image_url } = req.body; // 요청으로 받은 URL
        var title = 'AI 공학관';
        var status = 'AI';
        var status2 = '';

        if (!image_url) {
            status2 = '이미지 준비중입니다.';
        }

        parkingData.AI.imageUrl = image_url;
        parkingData.AI.lastUpdated = Date.now();

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

    // aispace : (req, res)=>{
    //     var title = 'AI 공학관';
    //     var status = 'AI';
    //     const aiData = parkingData.AI;
    //     console.log(aiData)
        
    //     if (!aiData) {
    //         return res.status(404).json({error: 'Parking lot not found'});
    //     }

    //     var context = {
    //         title: title, 
    //         data : aiData,
    //         status : status
    //     }

    //     res.render('parking', context, (err, html)=>{
    //         if(err) {console.log(err)}
    //         res.end(html)
    //     })
    // },

    center : (req, res)=>{
        var title = '학생회관';
        var status = 'center';
        const centerData = parkingData.center;
        console.log(centerData);
        
        if (!centerData) {
            return res.status(404).json({error: 'Parking lot not found'});
        }

        var context = {
            title: title, 
            data : centerData,
            status : status
        }

        res.render('parking', context, (err, html)=>{
            if(err) {console.log(err)}
            res.end(html)
        })
    }

}