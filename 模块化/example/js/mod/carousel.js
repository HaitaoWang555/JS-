
//模块化
var Carousel = (function(){

  var pageIndex = 0
  var $imgCt,$imgs,$bullet,$bullets,$imgCount,imgWidth
  var initJqVar = function(){
    $imgCt = $('#carousel')
    $imgs = $('#carousel > li')
    $bullet = $('#bullet')
    $bullets = $('#bullet li')
    $imgCount = $imgs.length
    imgWidth = $imgs.width()
  }

  var initImgs = function(){
    $imgCt.append($imgs.first().clone())
    $imgCt.prepend($imgs.last().clone())
    $imgCt.css({marginLeft: -imgWidth})
  }

  var goNext = function(){
    $imgCt.css({marginLeft: -imgWidth*(pageIndex+1)})
    setBullet(pageIndex)
    pageIndex += 1
    if(pageIndex > $imgCount){
      pageIndex = 1
      $imgCt.css({marginLeft: -imgWidth})
      setBullet(0)
    }
  }

  var setBullet = function(pageIndex){
    $bullets.removeClass('active').eq(pageIndex).addClass("active")
  }

  var autoPlay = function(){
    clock = setInterval(function () {
      goNext()
    }, 2000)
  }

  var listenBulletClick = function(){
    $bullets.on("click",function(){
      clearInterval(clock)
      pageIndex = $(this).index()
      goNext()
      autoPlay()
    })
  }

  return {
    initCarousel: function(){
      initJqVar();
      initImgs();
      autoPlay();
      listenBulletClick();
    }
  }

})()

$(function(){
  Carousel.initCarousel()
})

