
define(function(require){
    var $ = require('jquery')
    var carousel = require('mod/carousel');
    var Gotop = require('mod/goTop');
    var waterFall = require('mod/waterFall');

    $(function(){
        getImgsBanner();
        waterFall.initWaterfall($('.picture_wrap'))
        Gotop.init($('html'))
      })
      
      function getImgsBanner() {
        $.get(
          "https://www.easy-mock.com/mock/5a70237883366960492d2bfb/get-images/banner"
        )
          .then(function(data) {
            var C1 = $(".carousel_full");
            carousel.initCarousel(C1,data.imgLinks);
          })
      }
})



