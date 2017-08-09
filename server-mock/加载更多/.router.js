function setRouter(app){ 
 var router = app; 

//  router.js


app.get('/load-more', function(req, res) {

  var curIdx = req.query.index
  var len = req.query.length
  var data = []

  for(var i = 0; i < len; i++) {
    data.push('新闻' + (parseInt(curIdx) + i))
  }
  setTimeout(function(){
    res.send(data);
   },5000)  // 模仿网速慢
});}
 module.exports.setRouter = setRouter