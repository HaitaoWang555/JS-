
$(function(){
  getImgsBanner();
  ScrollGet.initScrollGet($('.picture_wrap'))
})

function getImgsBanner() {
  $.get(
    "https://www.easy-mock.com/mock/5a70237883366960492d2bfb/get-images/banner"
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
  $(".carousel_full").append('<ul class="carousel"></ul><ul class="bullet"></ul>')
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

function getImgLists(){
  $.get(
    "https://www.easy-mock.com/mock/5a70237883366960492d2bfb/get-images/imags"
  )
    .then(function(data){
      loadImg(data.imgLinks)
    })
}
function renderPictureWall(items) {
  var strs = "";
  for (var i = 0; i < items.length; i++) {
    strs = "<li>" + '<img src="' + items[i].image + '">' + "</li>";
    $(".picture_wrap").append(strs);
  }  
}

