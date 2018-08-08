$(document).ready(function(){
//nav
	$(".nav li").eq(0).addClass("active");	
	$(".nav li").mouseover(function(){
		$(this).addClass("active").parent().siblings("a").children("li").removeClass("active");
	});
//banner
	var num=$(".list a").length;
	for(var i=0;i<num;i++){
	var span=document.createElement("span");
	$(".banspan").append(span);
	}
	$(".banspan span").eq(0).addClass("current");	
	$(".banimg a").eq(0).show().siblings("a").hide();
	$(".banspan span").mouseover(function(){
		var num1=$(this).index();
		$(this).addClass("current").siblings("span").removeClass("current");
		$(".banimg a").eq(num1).fadeIn().siblings("a").fadeOut();
		});
	// setInterval()方法可按照指定的周期（以毫秒计）来调用函数
	var timer=setInterval(function(){
		var a=$(".banspan .current").index();
		var b=$(".banspan span:last").index();
		if(a==b){
			// trigger()方法触发被选元素的指定事件类型
			$(".banspan span").eq(0).trigger("mouseover");
			}
			$(".banspan span").eq(a+1).trigger("mouseover");
		},5000);
	//鼠标悬停停止轮播
	$(".list").mouseover(function(){
		clearInterval(timer);
		timer=1;
	})
	//鼠标离开继续轮播
	$(".list").mouseout(function(){
		if(timer===1){
			timer=setInterval(function(){
			var a=$(".banspan .current").index();
			var b=$(".banspan span:last").index();
			if(a==b){
				// trigger()方法触发被选元素的指定事件类型
				$(".banspan span").eq(0).trigger("mouseover");
				}
				$(".banspan span").eq(a+1).trigger("mouseover");
			},5000);
		}
	})
//product
	$(".ab-list li").eq(0).addClass("active1");
	$(".ab-list li").mouseover(function(){
		$(this).addClass("active1").parent().siblings("a").children("li").removeClass("active1");
	});
//img-container
	var widtha=$(".img-port dl").width()+10;
	var pagea=1;
	var ib=4;
	var numa=$(".img-port dl").length;
	var pagemaxa=Math.ceil(numa/ib);
	for(var i=0;i<pagemaxa;i++){
	var span=document.createElement("span");
	$(".banspan1").append(span);
	}
	$(".banspan1 span").eq(0).addClass("current");
	var numa2=0;
	var numa3=0;
	$(".banspan1 span").mouseover(function(){
		var numa1=$(this).index();
		if(!$(".img-port").is(":animated")){
			$(this).addClass("current").siblings("span").removeClass("current");
			if(numa2!=numa1){
				numa3=numa1-numa2;
				numa2=numa1;
			$(".img-port").animate({"left":"-="+numa3*widtha*ib+"px"},500);
			}
		}
	});
//our-img-container
	$(".our-img-port").mouseover(function(){
		$(this).children(".our-img-text").addClass("active2").parent().siblings(".our-img-port").children(".our-img-text").removeClass("active2");
	});


});
