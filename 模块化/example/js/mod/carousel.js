
var $imgCt = $('#carousel')
var $imgs = $('#carousel > li')
var $bullet = $('#bullet')
var $bullets = $('#bullet li')

var $imgCount = $imgs.length
var imgWidth = $imgs.width()

var index
var pageIndex = 0
console.log(pageIndex)
$imgCt.append($imgs.first().clone())
$imgCt.prepend($imgs.last().clone())
$imgCt.css({marginLeft: -imgWidth})

function goNext(){
  $imgCt.css({marginLeft: -imgWidth*(pageIndex+1)})
  setBullet(pageIndex)
  pageIndex += 1
  if(pageIndex > $imgCount){
    pageIndex = 1
    $imgCt.css({marginLeft: -imgWidth})
    setBullet(0)
  }
}

function setBullet(pageIndex){
  $bullets.removeClass('active').eq(pageIndex).addClass("active")
}

function autoPlay() {
  clock = setInterval(function () {
    goNext()
  }, 2000)
}

autoPlay()
$bullets.on("click",function(){
  clearInterval(clock)
  pageIndex = $(this).index()
  goNext()
  autoPlay()
})