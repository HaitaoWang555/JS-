
var ScrollGet = (function($wrap){
  function ScrollGetList($wrap){
    this.$wrap = $wrap;
    this.windowHeight = $(window).height();
    this.advancedPx = 100;
    this.wait = 500;
    this.clock = null; 
    this.windowOnscroll();
  }
  ScrollGetList.prototype.throttle = function (func, wait) { // 节流
    let prev, timer;
    return function fn() {
      let curr = Date.now();
      let diff = curr - prev;
      if (!prev || diff >= wait) {
        func();
        prev = curr;
      } else if (diff < wait) {
        clearTimeout(timer);
        timer = setTimeout(fn, wait - diff);
      }
    };
  }

  ScrollGetList.prototype.windowOnscroll = function(){
    var _this = this
    let onscroll = this.throttle(function () {
      if (_this.$wrap.offset().top +_this.$wrap.height() - $(window).height()-100 <= window.scrollY) {
        getImgLists();
      }
    },this.wait)

    window.addEventListener("scroll", onscroll);
    window.dispatchEvent(new Event("scroll"));
  }
  return {
    initScrollGet:function($wrap){
      new ScrollGetList($wrap)
    }
  }
})()

