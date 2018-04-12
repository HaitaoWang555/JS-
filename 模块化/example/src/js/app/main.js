import './../../scss/app.scss';
import $ from 'jquery';
import Waterfall  from './../mod/waterFall.js';
import Gotop  from './../mod/goTop.js';
import Carousel  from './../mod/carousel.js';

var initHtml = '<div class="example_wrap"><div class="carousel_full"></div><ul class="picture_wrap"></ul></div>'
  $('body').append(initHtml)
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




