//  router.js


app.post('/load-more', function(req, res) {

  var curIdx = req.body.index
  var len = req.body.length
  var data = []

  for(var i = 0; i < len; i++) {
    data.push('新闻' + (parseInt(curIdx) + i))
  }
  setTimeout(function(){
    res.send(data);
   },5000)  // 模仿网速慢
});