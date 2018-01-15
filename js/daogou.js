
$(function(){
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

/*文字无缝滚动*/
    var num = 0;
    function goLeft() {
        //750是根据你给的尺寸，可变的
        if (num == -750) {
            num = 0;
        }
        num -= 1;
        $(".scroll").css({
            left: num
        })
    }
    //设置滚动速度
    var timer = setInterval(goLeft, 20);
    //设置鼠标经过时滚动停止
    /*$(".box").hover(function() {
        clearInterval(timer);
    },
    function() {
        timer = setInterval(goLeft, 20);
    })*/

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