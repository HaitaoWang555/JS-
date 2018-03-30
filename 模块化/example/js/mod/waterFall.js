var minValue, minIndex;
var baseWidth = 300;
boxSize = 10;
$wrap = $(".picture_wrap");
outerWidth = baseWidth + boxSize * 2;
var num = parseInt($wrap.width() / (baseWidth + boxSize * 2));
var itemArr = [];
for (var i = 0; i < num; i++) {
  itemArr[i] = 0;
}

function loadImg(imgs) {
  $.each(imgs, function(key, val) {
    var img = new Image();
    img.src = imgs[key].image;

    img.onload = function() {
      var imgTarget = $(img);
      renderPicture(imgTarget);
    };
  });
}
function renderPicture(imgTarget) {
  var $liCt = $("<li></li>");
  var $img = $(imgTarget);
  $liCt.append($img);
  $wrap.append($liCt);
  $wrap.find('li').css({
    width:this.baseWidth,
    margin:this.boxSize
  })
  waterfall(imgTarget);
}

function waterfall(imgTarget) {
  minValue = Math.min.apply(null, itemArr);
  minIndex = itemArr.indexOf(minValue);
  $(imgTarget)
    .parents("li")
    .css({
      top: itemArr[minIndex],
      left: outerWidth * minIndex
    });
  itemArr[minIndex] += $(imgTarget)
    .parents("li")
    .outerHeight(true);
  layout();
}
function layout() {
  var maxHeight = Math.max.apply(null, itemArr);
  var liftNum = $(window).width() - num * outerWidth;

  $(".picture_wrap").css({
    left: liftNum / 2,
    height: maxHeight
  });
}

$(window).resize(function() {
  this.layout();
});
