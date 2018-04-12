

  var Waterfall = (function($wrap){
    function WaterfallLayout($wrap){
      this.$wrap = $wrap;
      this.minValue;
      this.minIndex;
      this.baseWidth = 300;
      this.boxSize = 10;
      this.outerWidth = this.baseWidth+this.boxSize*2;
      this.num =parseInt(this.$wrap.width()/(this.baseWidth+this.boxSize*2)) 
      this.itemArr = [];
      this.initItemArr();
      this.bindClick();
      this.getData();
      this.waterfallResize();
    }
    WaterfallLayout.prototype.initItemArr = function(){
      for(var i=0;i<this.num;i++){
        this.itemArr[i] = 0
      }
    }
    WaterfallLayout.prototype.bindClick = function(){
      this.$wrap.after('<div class="getMore">正在加载...</div>');
      $('.getMore').on('click',function(){
        $('.getMore').html('正在加载...')
        this.getData()
      }.bind(this))
    }
    WaterfallLayout.prototype.getData = function() {
      $.get(
        "https://www.easy-mock.com/mock/5a70237883366960492d2bfb/get-images/imags"
      )    
      .then(function(data){
        this.loadImg(data.imgLinks)
        $('.getMore').html('加载更多')
      }.bind(this))
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
    WaterfallLayout.prototype.waterfallResize = function(){
      $(window).resize(function(){
        this.layout()
      }.bind(this))
    }
    return{
      initWaterfall:function($wrap){
        new WaterfallLayout($wrap)
      }
    }
  })()


  module.exports =  Waterfall