const { uploadImage, generateOptimizedUrl, generateTransformedUrl } = require('../indexGPT');


const parkingData = {
    'AI' : {lastUpdated :'2022-03-19', imageUrl : 'https://i.namu.wiki/i/d0j0P0goZ0h8so_hZl9KFEyLas2h2pMIvzQEvBOgU9pj_GnfyfktphoWX5D_yd3khWqf60ErGjaOJ-p3M8rWg4Yh3BxKCqvNDJFydxGI7vO_C8uQqQyW-VQDiSbHhoEGQAHuZQrOiyanFKYmcLG_-Q.webp'},
    'center' : {lastUpdated : null, imageUrl : null}   
}

module.exports={

    aispace : (req, res)=>{
        var title = 'AI 공학관';
        var status = 'AI';
        const aiData = parkingData.AI;
        console.log(aiData)
        
        if (!aiData) {
            return res.status(404).json({error: 'Parking lot not found'});
        }

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

    aiUpdate : async (req, res)=>{
        try {
            const imagePath = 'https://fgblawfirm.com/wp-content/uploads/2024/07/Parking-Lot-Accidents-1024x538.jpg';
            // await processImage(imagePath);
            
            const uploadResult = await uploadImage(imagePath, 'AI_parking');
            const imageUrl = uploadResult.secure_url;

            parkingData.AI = {
                lastUpdated: new Date().toISOString(),
                imageUrl,
            }

            res.redirect('/parking/aispace');
        } catch(error) {
            res.status(500).json({ success: false, error:error.message});
        }

    },


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
    },

    centerUpdate : async (req, res)=>{
        try {
            const imagePath = '/images/example.png';
            // await processImage(imagePath);
            
            const uploadResult = await uploadImage(imagePath, 'Center_parking');
            const imageUrl = uploadResult.secure_url;

            parkingData.center = {
                lastUpdated: new Date().toISOString(),
                imageUrl,
            }

            res.redirect('/parking/aispace');
        } catch(error) {
            res.status(500).json({ success: false, error:error.message});
        }

    },

}