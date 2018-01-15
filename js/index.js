/*
    项目负责人：赵强
    项目创建日期:2017.9.11
    最新更新:2017.9.11
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间:
*/
/* banner轮播 */
(function($) {
  $.fn.Slider = function(options) {
    "use strict";
    var settings = $.extend({
      isAuto: true,
      transTime: 3000,
      animateSpeed: 1000,  
      sliderMode: 'slide',
      pointerControl: true,
      pointerEvent: 'click',
      arrowControl: true,
    }, options);
    var interval;
    var isAnimating = false;
    var $slider     = $(this);
    var $sliderWrap = $slider.find('.slider-inner');
    var sliderCount = $sliderWrap.find('> .item').length;
    var sliderWidth = $slider.width();
    var currentIndex = 0;
    var sliderFun = {
      controlInit: function() {
        if (settings.pointerControl) {
          var html = '';
          html += '<ol class="slider-pointer">';
          for (var i = 0; i < sliderCount; i++) {
            if (i == 0) {
              html += '<li class="active"></li>'
            }else{
              html += '<li></li>'
            }
          }
          html += '</ol>'
          $slider.append(html);
          var $pointer = $slider.find('.slider-pointer');
          $pointer.css({
            left: '50%',
            marginLeft: - $pointer.width()/2
          });
        }
        if (settings.arrowControl) {
          var html = "";
          html += '<span class="slider-control prev"></span>';
          html += '<span class="slider-control next"></span>'
          $slider.append(html);
        }
        $slider.on('click', '.slider-control.prev', function(event) {
          sliderFun.toggleSlide('prev');
        });
        $slider.on('click', '.slider-control.next', function(event) {
          sliderFun.toggleSlide('next');
        });
      },
      sliderInit: function() {
        sliderFun.controlInit();
        if (settings.sliderMode == 'slide') {
          $sliderWrap.width(sliderWidth * sliderCount);
          $sliderWrap.children().width(sliderWidth);
        }else{
          $sliderWrap.children().css({
            'position': 'absolute',
            'left': 0,
            'top': 0
          });
          $sliderWrap.children().first().siblings().hide();
        }
        if (settings.pointerEvent == 'hover') {
          $slider.find('.slider-pointer > li').mouseenter(function(event) {
            sliderFun.sliderPlay($(this).index());
          });
        }else{
          $slider.find('.slider-pointer > li').click(function(event) {
            sliderFun.sliderPlay($(this).index());
          });
        }
        sliderFun.autoPlay();
      },
      sliderPlay: function(index) {
        sliderFun.stop();
        isAnimating = true;
        $sliderWrap.children().first().stop();
        $sliderWrap.children().stop();
        $slider.find('.slider-pointer').children()
          .eq(index).addClass('active')
          .siblings().removeClass('active');
        if (settings.sliderMode == "slide") {
          if (index > currentIndex) {
            $sliderWrap.animate({
              left: '-=' + Math.abs(index - currentIndex) * sliderWidth + 'px'
            }, settings.animateSpeed, function() {
              isAnimating = false;
              sliderFun.autoPlay();
            });
          } else if (index < currentIndex) {
            $sliderWrap.animate({
              left: '+=' + Math.abs(index - currentIndex) * sliderWidth + 'px'
            }, settings.animateSpeed, function() {
              isAnimating = false;
              sliderFun.autoPlay();
            });
          } else {
            return;
          }
        }else{
          if ($sliderWrap.children(':visible').index() == index) return;
          $sliderWrap.children().fadeOut(settings.animateSpeed)
            .eq(index).fadeIn(settings.animateSpeed, function() {
              isAnimating = false;
              sliderFun.autoPlay();
            });
        }
        currentIndex = index;
      },
      toggleSlide: function(arrow) {
        if (isAnimating) {
          return;
        }
        var index;
        if (arrow == 'prev') {
          index = (currentIndex == 0) ? sliderCount - 1 : currentIndex - 1;
          sliderFun.sliderPlay(index);
        }else if(arrow =='next'){
          index = (currentIndex == sliderCount - 1) ? 0 : currentIndex + 1;
          sliderFun.sliderPlay(index);
        }
      },
      autoPlay: function() {
        if (settings.isAuto) {
          interval = setInterval(function () {
            var index = currentIndex;
            (currentIndex == sliderCount - 1) ? index = 0: index = currentIndex + 1;
            sliderFun.sliderPlay(index);
          }, settings.transTime);
        }else{
          return;
        }
      },
      stop: function() {
        clearInterval(interval);
      },
    };
    sliderFun.sliderInit();
  }
})(jQuery);
jQuery(document).ready(function($) {
  $('#slider1').Slider();
});

/* 文字滚动效果 */
function startmarquee(lh,speed,delay) {//其中lh指每次向上走多少px; speed: 速度; delay:每次停顿多长时间;
    var p=false;
    var t;
    var o=document.getElementById("marqueebox");
    o.innerHTML+=o.innerHTML;
    o.style.marginTop=0;
    o.onmouseover=function(){p=true;}
    o.onmouseout=function(){p=false;}
    function start(){
        t=setInterval(scrolling,speed);
        if(!p) o.style.marginTop=parseInt(o.style.marginTop)-1+"px";
    }
    function scrolling(){
        if(parseInt(o.style.marginTop)%lh!=0){
        o.style.marginTop=parseInt(o.style.marginTop)-1+"px";
            if(Math.abs(parseInt(o.style.marginTop))>=o.scrollHeight/2) o.style.marginTop=0;
            }else{
            clearInterval(t);
            setTimeout(start,delay);}
        }
    setTimeout(start,delay);
}
startmarquee(20,10,3000);

$(function(){
  var t=null;
  t=setTimeout(function(){
    $(".tanchu").show();
  },10000);

  /* 弹出层 */
  $(".tanchu .top p.gb").click(function(){
    $(".tanchu").hide();
  });

  /* tab追加 */
    $(".main .shop .shop_down .page li").click(function(){
      $(this).addClass('active').siblings().removeClass("active");
    });

  /* 鼠标经过样式 */
    $(".main .shop .shop_down .swipe li .moren").mouseover(function(){
      $(this).addClass('on').siblings().removeClass('on');
    });

  /* 关注我们 */
    $("footer .top span.gzwm").mouseenter(function(){
        $("footer p.zhong").stop(true , true).show(400);
    }).mouseleave(function(){
        $("footer p.zhong").stop(true , true).hide(400);
    });

/* 返回顶部 */
    var y=$(document).scrollTop();// 滑块移动距离
    $(document).scroll(function(){
        var y=$(document).scrollTop();// 滑块移动距离
    //1.返回顶部 按钮何时出现|隐藏
        if(y>200){
            $("#go").show();
        }else{
            $("#go").hide();
        }
    });

    //2.返回顶部
    $("#go").click(function(){
        var timer=null;
        var y=$(document).scrollTop();// 滑块移动距离
        timer=setInterval(function(){
            y=y-y*0.1;
            if(y<4){
                y=0;
                clearInterval(timer);
            }
            $(document).scrollTop(y);
        },40);
    });
});