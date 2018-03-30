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
      var originHeight = img.height;
      var originWidth = img.width;
      var imgInfo = {
        target: $(img),
        height:originHeight,
        width:originWidth
      }
      renderPicture(imgInfo)
    }
  })
}
function renderPicture(imgInfo) {
  console.log(imgInfo)
  var $liCt = $('<li></li>')
  var $img = $(imgInfo.target)
  $liCt.append($img);
  $(".picture_wrap").append($liCt)
  waterfall(imgInfo)
}

function waterfall(imgInfo){
  minValue = Math.min.apply(null, itemArr);
  minIndex = itemArr.indexOf(minValue);
  $(imgInfo.target).parents('li').css({
    top: itemArr[minIndex],
    left: 320 * minIndex
  });  
  itemArr[minIndex] += $(imgInfo.target).parents('li').outerHeight(true);
  var maxHeight = Math.max.apply(null, itemArr);
  var liftNum = $(window).width() - 4 * $(".picture_wrap > li").outerWidth(true)
  $(".picture_wrap").height(maxHeight);
  $(".picture_wrap").css({left:liftNum/2})
}
