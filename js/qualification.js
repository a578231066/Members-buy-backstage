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

    
/* 关注我们 */
    $("footer .top span.gzwm").mouseenter(function(){
        $("footer p.zhong").stop(true , true).show(400);
    }).mouseleave(function(){
        $("footer p.zhong").stop(true , true).hide(400);
    });
});