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
    var h=$(document).height();
    $(".zhedang").height(h+"px");

/* 点击input弹出 */
    $(".main_down p label").click(function(){
        var check=$("input[type='checkbox']").is(':checked')
        if(check!=false){
            $(".zhedang").show();
            $(".wai").show();
        }else{
            $(".zhedang").hide();
            $(".wai").hide();
        }
    });

/* 点击X关闭 */
    $(".tanchu .top span").click(function(){
        $(".zhedang").hide();
        $(".wai").hide();
        $(".main_down p label").find("input").attr("checked", false);
    });

/* 点击图片 */
    $(".tanchu .down p img").click(function(){
        $(this).parent("i").parent("p").addClass('active').siblings().removeClass("active");
        $(this).parent("i").children("strong").show().parent("i").parent("p").siblings().children('i').children('strong').hide();
    });

/* 选择金额 */
    $(".tanchu .down li").click(function(){
        $(this).addClass('active1').siblings().removeClass('active1');
        $(this).children('strong').show().parent("li").siblings().children('strong').hide();
        var strongVal=$(this).children("strong").children("input").val();
    });


/* 阅读全文 */
    $(".clickStart").click(function(){
        $(".main .main_down div.zhong").css({
            height: '900px',
            transition: '2s'
        });
        $(".stop").show();
        $(this).hide();
    });

/* 点击收起 */
    $(".stop").click(function(){
        $(".main .main_down div.zhong").css({
            height: '400px',
            transition: '2s'
        });
        $(".clickStart").show();
        $(this).hide();
    });

/* 关注我们 */
    $("footer .top span.gzwm").mouseenter(function(){
        $("footer p.zhong").stop(true , true).show(400);
    }).mouseleave(function(){
        $("footer p.zhong").stop(true , true).hide(400);
    });   
});