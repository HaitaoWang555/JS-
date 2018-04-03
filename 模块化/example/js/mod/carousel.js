
//模块化
define(function(){
  var Carousel = (function(){

    function Slider(slider,data) {
      this.init(slider,data)
      this.autoPlay()
      this.listenBulletClick();
    }
  
  
    Slider.prototype.initVar = function(slider){
      slider.append('<ul class="carousel"></ul><ul class="bullet"></ul>');
      this.$imgCt = slider.find(".carousel") 
      this.$bullet = slider.find('.bullet')
    }
  
    Slider.prototype.initLayout = function(slider,data) {  
      var strs = "";
      for (var i = 0; i < data.length; i++) {
        strs = "<li>" + '<img src="' + data[i].imgUrl + '">' + "</li>";
        this.$imgCt.append(strs);
        this.$bullet.append("<li></li>");
        if (i === 0) {
          $(".bullet > li").addClass("active");
        }
      }
      this.$imgs = slider.find('.carousel > li')
      this.$bullets = slider.find('.bullet li')
      this.$imgCount = this.$imgs.length
      this.imgWidth = this.$imgCt.width()
      this.pageIndex = 0
    }
  
    Slider.prototype.initImgs = function(){
      this.$imgCt.append(this.$imgs.first().clone())
      this.$imgCt.prepend(this.$imgs.last().clone())
      this.$imgCt.css({marginLeft: - this.imgWidth})
    }
  
    Slider.prototype.goNext = function(){
      this.$imgCt.css({marginLeft: - this.imgWidth*(this.pageIndex+1)})
      this.setBullet(this.pageIndex)    
      this.pageIndex += 1
      if(this.pageIndex > this.$imgCount){
        this.pageIndex = 0
        this.setBullet(0)
        this.pageIndex = 1
        this.$imgCt.css({marginLeft: - this.imgWidth})     
      }
    }
  
    Slider.prototype.setBullet = function(){
      this.$bullets.removeClass('active').eq(this.pageIndex).addClass("active")
    }
  
    Slider.prototype.autoPlay = function(){
      this.clock = setInterval(function () {
        this.goNext()
      }.bind(this), 2000)
    }
  
    Slider.prototype.listenBulletClick = function(){
      _this = this
      this.$bullets.on("click",function(){
        clearInterval(_this.clock)
        _this.pageIndex = $(this).index()
        _this.goNext()
        _this.autoPlay()
      })
    }
  
    Slider.prototype.init = function(slider,data) {
      this.initVar(slider);
      this.initLayout(slider,data);
      this.initImgs();
    }
  
    return {
      initCarousel: function(slider,data){      
        new Slider(slider,data)     
      }
    }
  })()  
  return Carousel
})



