$(function(){
	var $imgCt = $('.big_img_list')
	var $imgs 
	var $bullet 
	var pageIndex = 0
	var imgHeight 
	var imgCount 
	var width
	var clock


// 获取图片

  $.ajax({
    url: 'img_json.json',
    type: 'get',
    dataType: "json",
    success: function(res) {
      	renderSlider(res.data.slider)
      	$imgs = $('.big_img_list>li')
      	imgHeight = $imgs.height()
      	imgCount = $imgs.length
      	width = $imgs.width()
      	$imgs.eq(0).show()
      	$bullet = $('.bullet>li')
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert(errorThrown);
    }
  })
  function renderSlider(slider){
		for (var i = 0; i < slider.length; i++) {
			var strs= ''
			strs += '<li><img src="'+slider[i].picUrl+'"></li>'
			$('.big_img_list').append(strs)
			$('.bullet').append("<li></li>")
			if(i === 0){
				$('.bullet > li').addClass('active')
			}
		}
  }

// 轮播效果
	

	function playUp(){ 
	  pageIndex++
	  $imgs.fadeOut(500)
	  $imgs.eq(pageIndex)
	       .fadeIn(500) 
	  if(pageIndex === imgCount){
	  $imgs.eq(0).fadeIn(500)
	  pageIndex = 0
	  }  
	  setBullet()
	}

	function playDown (){ 
	  pageIndex--
	  $imgs.fadeOut(500)
	  $imgs.eq(pageIndex)
	       .fadeIn(500)  
	  if(pageIndex === -imgCount){
	  $imgs.eq(0).fadeIn(500)
	  pageIndex = 0
	  } 
	  setBullet()
	} 

	function setBullet(){
	  $bullet.removeClass('active')
			  .eq(pageIndex)
			  .addClass('active')
	}

	function autoPlay() {
	  clock = setInterval(function () {
	    playUp()
	  }, 3000)
	}

	//autoPlay()

	//滑动
	var big_img_list = $('.big_img_list').get(0)
	touchX = 0; //触控开始的手指最初落点
  var ready_moved = false;
  var newTouchX
  
	
	function touchStart(){
    ready_moved = true;
    var touch;
    if(event.touches){
        touch = event.touches[0];
    }else {
        touch = event;
    }
    touchX = touch.clientX;
	}

	function touchMove(){
		if(ready_moved){
			var touch;
	    if(event.touches){
	        touch = event.touches[0];
	    }else {
	        touch = event;
	    }
	    newTouchX = touch.clientX
		}
	}

	function touchEnd(){
		ready_moved = false;
		//clearInterval(clock);
    if(newTouchX - touchX > width/3){  
    	playDown()
    }else if(newTouchX - touchX < -width/3){    	
    	playUp()
    }	
    //autoPlay()
	}

	big_img_list.addEventListener("touchstart",function(){
    touchStart();
  },false)

  big_img_list.addEventListener("touchmove",function(e){
  	e.preventDefault();
    touchMove();
  },false)
  big_img_list.addEventListener("touchend",function(){
    touchEnd();
  },false)
})