import 'appScss';
import $ from 'jquery';
import Waterfall  from 'waterFall';
import Gotop  from 'goTop';
import Carousel  from 'carousel';

var initHtml = '<div class="example_wrap"><div class="carousel_full"></div><ul class="picture_wrap"></ul></div>'
  $('body').prepend(initHtml)
  getImgsBanner();
  Waterfall.initWaterfall($('.picture_wrap'))
  Gotop.init($('html'))


function getImgsBanner() {
  $.get(
    "https://www.easy-mock.com/mock/5a70237883366960492d2bfb/get-images/banner"
  )
    .then(function(data) {
      var C1 = $(".carousel_full");
      Carousel.initCarousel(C1,data.imgLinks);
    })
}




