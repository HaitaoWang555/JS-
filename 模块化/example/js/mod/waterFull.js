
$(function(){
  waterFull();
})

function waterFull() {
  var colLength = parseInt($(".picture_wrap").width() / $(".picture_wrap > li").width());
  var itemArr = [];
  var maxHeighr
  for (var i = 0; i < colLength; i++) {
    itemArr[i] = 0;
  }
  $(".picture_wrap > li").each(function() {
    var minValue = Math.min.apply(null, itemArr);
    var minIndex = itemArr.indexOf(minValue);
    $(this).css({
      top: itemArr[minIndex],
      left: $(this).outerWidth(true) * minIndex
    });
    itemArr[minIndex] += $(this).outerHeight(true);
  });

  var maxHeight = Math.max.apply(null, itemArr);
  $(".picture_wrap").height(maxHeight)
}




$(window).resize(function() {
  waterFull();
});