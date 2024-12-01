

module.exports={
    aispace : (req, res)=>{
        var title = 'AI 공학관';

        var context = {title: title}
        res.render('parking', context, (err, html)=>{
            if(err) {console.log(err)}
            res.end(html)
        })
    },

    centerfrontyard : (req, res)=>{
        var title = '학생회관 정문';

        var context = {title: title}
        res.render('parking', context, (err, html)=>{
            if(err) {console.log(err)}
            res.end(html)
        })
    },

    centerbackyard : (req, res)=>{
        var title = '학생회관 후문';

        var context = {title: title}
        res.render('parking', context, (err, html)=>{
            if(err) {console.log(err)}
            res.end(html)
        })
    }
}