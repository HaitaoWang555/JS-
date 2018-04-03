define(function(){
	var Gotop = (function(){
		function Goup($ct){
			this.$ct = $ct
			this.$target = $('<div id="gotop">回到顶部</div>')
			this.bindEvent()
		}
		Goup.prototype = {
			bindEvent:function(){
				var self = this
				this.createNode()
				this.$target.css({'opacity':0})
				$(window).on('scroll',function(){
					if($(window).scrollTop()>=200){
						self.$target.css({'opacity':0.7})
					}else{
						self.$target.css({'opacity':0})
					}
				})

				this.$target.on('click',function(){
					$('html,body').animate({ scrollTop: 0 }, 200);
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
	return Gotop
	}
);
	

