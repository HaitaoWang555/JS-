var Gotop = (function(){

  function Goup($ct){
		this.$ct = $ct
		this.$target = $('<a href="" id="gotop">回到顶部</a>')
		this.bindEvent()
	}
  Goup.prototype = {
		bindEvent:function(){
			var self = this
			this.createNode()
			this.$target.hide()
			$(window).on('scroll',function(){
				if($(window).scrollTop()>200){
					self.$target.fadeIn(500)
				}else{
					self.$target.fadeOut(500)
				}
			})

			this.$target.on('click',function(){
				self.$ct.animate({
					scrollTop:0
				},300)
			})
    },
    createNode:function(){
			this.$ct.append(this.$target)
		}
  }


  return {
    init:function($ct){
      new Goup($ct)
    }
  }
})()
