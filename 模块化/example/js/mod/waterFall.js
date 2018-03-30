var num = 4
var itemArr = []
for(var i=0;i<num;i++){
  itemArr[i] = 0
}
var minValue 
var minIndex 


function loadImg(imgs){ 
  $.each(imgs,function(key,val){
    var img = new Image();   
    img.src = imgs[key].image;
    
    img.onload = function () {
      var imgTarget = $(img)
      renderPicture(imgTarget)
    }
  })
}
function renderPicture(imgTarget) {
  var $liCt = $('<li></li>')
  var $img = $(imgTarget)
  $liCt.append($img);
  $(".picture_wrap").append($liCt)
  waterfall(imgTarget)
}

function waterfall(imgTarget){
  minValue = Math.min.apply(null, itemArr);
  minIndex = itemArr.indexOf(minValue);
  $(imgTarget).parents('li').css({
    top: itemArr[minIndex],
    left: 320 * minIndex
  });  
  itemArr[minIndex] += $(imgTarget).parents('li').outerHeight(true);
  layout()
}
function layout(){
  var maxHeight = Math.max.apply(null, itemArr);
  var liftNum = $(window).width() - 4 * $(".picture_wrap > li").outerWidth(true)
  
  $(".picture_wrap").css({
    left:liftNum/2,
    height:maxHeight
  })
}