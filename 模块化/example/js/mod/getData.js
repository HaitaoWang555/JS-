var item;
function getImgs() {
  $.get(
    "https://www.easy-mock.com/mock/5a70237883366960492d2bfb/get-banner/banner"
  )
    .then(function(data) {
      renderBanner(data.imgLinks);
    })
    .then(() => {
      var C1 = $(".carousel_full");
      Carousel.initCarousel(C1);
    });
}
function renderBanner(items) {
  console.log(items);
  var strs = "";
  for (var i = 0; i < items.length; i++) {
    strs = "<li>" + '<img src="' + items[i].imgUrl + '">' + "</li>";
    $(".carousel").append(strs);
    $(".bullet").append("<li></li>");
    if (i === 0) {
      $(".bullet > li").addClass("active");
    }
  }
}
getImgs()