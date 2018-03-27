
//模块化
var Carousel = (function(){

  function Slider(slider) {
    this.init(slider)
    this.autoPlay()
    this.listenBulletClick();
  }


  Slider.prototype.initVar = function(slider){
    this.$imgCt = slider.find(".carousel")
    this.$imgs = slider.find('.carousel > li')
    this.$bullet = slider.find('.bullet')
    this.$bullets = slider.find('.bullet li')
    this.$imgCount = this.$imgs.length
    this.imgWidth = this.$imgCt.width()
    this.pageIndex = 0
  }

  Slider.prototype.initImgs = function(){
    this.$imgCt.append(this.$imgs.first().clone()).bind(this)
    this.$imgCt.prepend(this.$imgs.last().clone()).bind(this)
    this.$imgCt.css({marginLeft: - this.imgWidth}).bind(this)
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

  Slider.prototype.init = function(slider) {
    this.initVar(slider);
    this.initImgs();
  }

  return {
    initCarousel: function(slider){      
      new Slider(slider)     
    }
  }
})()  


