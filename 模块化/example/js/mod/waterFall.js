

var Waterfall = (function($wrap){
  function WaterfallLayout($wrap,imgs){
    this.$wrap = $wrap;
    this.minValue;
    this.minIndex;
    this.baseWidth = 300;
    this.boxSize = 10;
    this.outerWidth = this.baseWidth+this.boxSize*2;
    this.num =parseInt(this.$wrap.width()/(this.baseWidth+this.boxSize*2)) 
    this.itemArr = [];
    this.initItemArr();
    this.loadImg(imgs);
    this.resize();
  }
  WaterfallLayout.prototype.initItemArr = function(){
    for(var i=0;i<this.num;i++){
      this.itemArr[i] = 0
    }
  }
  WaterfallLayout.prototype.loadImg = function (imgs){ 
    var _this = this
    $.each(imgs,function(key,val){
      var img = new Image();   
      img.src = imgs[key].image;
      
      img.onload = function () {
        var imgTarget = $(img)
        _this.renderPicture(imgTarget)
      }
    })
  }
  WaterfallLayout.prototype.renderPicture = function (imgTarget) {
    var $liCt = $('<li></li>')
    var $img = $(imgTarget)
    $liCt.append($img);
    this.$wrap.append($liCt)
    this.$wrap.find('li').css({
      width:this.baseWidth,
      margin:this.boxSize
    })
    this.waterfall(imgTarget)
  }
  WaterfallLayout.prototype.waterfall = function (imgTarget){
    this.minValue = Math.min.apply(null, this.itemArr);
    this.minIndex = this.itemArr.indexOf(this.minValue);
    $(imgTarget).parents('li').css({
      top: this.itemArr[this.minIndex],
      left: this.outerWidth * this.minIndex
    });  
    this.itemArr[this.minIndex] += $(imgTarget).parents('li').outerHeight(true);
    this.layout()
  }  
  WaterfallLayout.prototype.layout = function layout(){
    var maxHeight = Math.max.apply(null, this.itemArr);
    var liftNum = $(window).width() - this.num * this.outerWidth
    
    $(".picture_wrap").css({
      left:liftNum/2,
      height:maxHeight
    })
  }
  WaterfallLayout.prototype.resize = function(){
    $(window).resize(function(){
      this.layout()
    }.bind(this))
  }
  return{
    initWaterfall:function($wrap,imgs){
      new WaterfallLayout($wrap,imgs)
    }
  }
})()


