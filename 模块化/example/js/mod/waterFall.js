


function waterFall() {
  var colLength = parseInt($(".picture_wrap").width() / $(".picture_wrap > li").outerWidth(true));
  var itemArr = [];
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
  var liftNum = $(window).width() - colLength * $(".picture_wrap > li").outerWidth(true)

  $(".picture_wrap").height(maxHeight);
  $(".picture_wrap").css({left:liftNum/2})
}




$(window).resize(function() {
  waterFall();
});