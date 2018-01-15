/*
    项目负责人：赵强
    项目创建日期:2017.9.11
    最新更新:2017.9.11
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间:
*/
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