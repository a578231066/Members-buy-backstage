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
    $(".mainZizhi").height(h-285+"px");
    console.log(h-140);

    $(".main_down label input").click(function(){
        $(".main_down p.tishi").hide();
    });
    $(".main_down label.name input").click(function(){
        $(".main_down p.tishi").show();
    });

/* 点击关闭按钮 */
    $(".shouji span input:nth-child(2)").click(function(){
        $(".zhedang").hide();
        $(".shouji").hide();
        $(".shouji div").hide();
    });

/* 点击外层阴影 */
    $(".main_down div label input").focus(function(){
        $(this).addClass('active').parent("label").parent("div").siblings().children('label').children('input').removeClass('active');
        $(".main .main_down div label input.dian").removeClass("active");
    });

    $(".main_down div label input").blur(function(){
        $(this).addClass('active').removeClass('active');
        $(".main_down p.tishi").hide();
    });

/* 单选框 */
    $(".main .main_down div.dp input").click(function(){
        var list=$("input:radio[name='one']:checked").val();
        if(list==1){
            $(".main .main_down div.yes").show();
            $(".main .main_down div.dp label").css({
                border: 'none'
            });
            return;
        }else if(list==0){
            $(".main .main_down div.yes").hide();
            $(".main .main_down div.dp label").css({
                border: 'none'
            });
        }
    });

/* 点击查看图片 */
    $(".main .main_down div.logo li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

/* 鼠标经过鼠标离开 */
    $(".main .main_down div p.tishi1 span.xiao").mouseenter(function(){
        $(this).siblings("span").css({
            display: 'block'
        });
    });

    $(".main .main_down div p.tishi1 span.xiao").mouseleave(function(){
        $(this).siblings("span").css({
            display: 'none'
        });
    });

/* 遮罩层显示 */
    function xianshi(china,i){
        $(".zhedang").show();
        $(".shouji").show();
        $(".shouji div").show();
        $(".shouji div p").empty();
        $(".shouji div p").append(china);
        $(".shouji span input").hide();
        $(".shouji span input:nth-child(2)").show();
        $(".main_down div:nth-child("+i+") label input").css({
            border: '1px solid #f00'
        });
    }

/* 图片 */
    function xianshi1(china){
        $(".zhedang").show();
        $(".shouji").show();
        $(".shouji div").show();
        $(".shouji div p").empty();
        $(".shouji div p").append(china);
        $(".shouji span input").hide();
        $(".shouji span input:nth-child(2)").show();
    }


/* 手机号码 */
    $(".queding").click(function(){
        var name=$(".main_down div:nth-child(2) label input").val();/* 姓名 */
        var mail=$(".main_down div:nth-child(3) label input").val();/* 邮件 */
        var chang=$(".main_down div:nth-child(4) label input").val().length;/* 手机号 */
        var chang1=$(".main_down div:nth-child(5) label input").val().length;/* 确认手机号 */
        var chang2=$(".main_down div:nth-child(6) label input").val().length;/* 身份证号 */
        var chang5=$(".main_down div:nth-child(7) label input").val();/* 紧急联系人名称 */
        var chang3=$(".main_down div:nth-child(8) label input").val().length;/* 紧急联系人手机号 */
        var chang4=$(".main_down div:nth-child(9) label input").val().length;/* 确认紧急联系人手机号 */
        var list=$("input:radio[name='one']:checked").val();/* 单选按钮 */
        var select=$(".main .main_down div.yes option").val();/* 下拉菜单 */
        var picture=$(".main .main_down .main_downTwo img").attr("src");
        var picture1=$(".main .main_down .main_downTwo div:nth-child(3) img").attr("src");
        var data=$(".main .main_down .main_downTwo div:nth-child(4) input").val();
        var data1=$(".main .main_down .main_downTwo div:nth-child(4) input:nth-child(4)").val();
        var picture2=$(".main .main_down .main_downTwo div:nth-child(5) img:nth-child(2)").attr("src");
        var picture3=$(".main .main_down .main_downTwo div:nth-child(6) img:nth-child(2)").attr("src");
        var name=/^[\u4E00-\u9FA5]{1,6}$/;/* 姓名 */
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;/* 手机号 */
        var reg=/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;/* 邮箱 */
        var isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; /* 15~18位的身份验证 */

    /* 姓名 */
        if(name!=""){
            var name=$(".main_down div:nth-child(2) label input").val();
            var name1=/^[\u4E00-\u9FA5]{1,6}$/;/* 姓名 */
            if(name1.test(name)){
                $(".main_down div:nth-child(2) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }else{
                xianshi("姓名输入错误",2)
                return;
            }
        }else{
            xianshi("姓名不能为空",2)
            return;
        }

    /* 邮件 */
        if(mail!=""){
            var str=$(".main_down div:nth-child(3) label input").val();
            var reg=/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;/* 邮箱 */
            if(reg.test(str)){
                $(".main_down div:nth-child(3) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }else{
                xianshi("邮箱输入错误",3);
                return;
            }
        }else{
            xianshi("邮箱不能为空",3);
            return;
        }

    /* 手机号码 */
        if(chang==11){
            var str=$(".main_down div:nth-child(4) label input").val();
            var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
            if(ret.test(str)){
                $(".main_down div:nth-child(4) label input").css({
                    border: '1px solid #E5E5E5'
                });
                $(".main_down div:nth-child(5) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }else{
                xianshi("入住人手机号码输入错误",4);
                return;
            }
        }else if(chang<=10 && chang>=1 || chang>=12){
            xianshi("入住人手机号输入有误",4);
            return;
        }else if(chang<=0){
            xianshi("入住人手机号不能为空",4);
            return;
        }
        if(chang!=chang1){
            xianshi("手机号两次输入不同",5);
            $(".shouji span input:nth-child(2)").show();
            return;
        }


    /* 验证身份证 */
        if(chang2==18){
            var str1=$(".main_down div:nth-child(6) label input").val();
            var isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; /* 15~18位的身份验证 */
            if(isIDCard1.test(str1)){
                $(".main_down div:nth-child(6) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }else{
                xianshi("身份证号码输入错误",6);
                return;
            }
        }else if(chang<=17 && chang>=1 || chang>=19){
            xianshi("身份证号输入有误",6);
            return;
         }else if(chang<=0){
            xianshi("身份证号不能为空",6);
            return;
        }

    /* 紧急联系人姓名 */
        if(chang5!=""){
            var chang5=$(".main_down div:nth-child(7) label input").val();
            var name2=/^[\u4E00-\u9FA5]{1,6}$/;/* 姓名 */
            if(name2.test(chang5)){
                $(".main_down div:nth-child(7) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }else{
                xianshi("紧急联系人姓名输入错误",7);
                return;
            }
        }else{
            xianshi("紧急联系人姓名不能为空",7);
            return;
        }

    /* 紧急联系人手机号 */
        if(chang3==11){
            var str=$(".main_down div:nth-child(4) label input").val();
            var str2=$(".main_down div:nth-child(8) label input").val();
            var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
            if(ret.test(str2)){
                if(str2!=str){
                    $(".main_down div:nth-child(8) label input").css({
                        border: '1px solid #E5E5E5'
                    });
                    $(".main_down div:nth-child(9) label input").css({
                        border: '1px solid #E5E5E5'
                    });
                }else{
                    xianshi("紧急号码与入驻人手机号重复请更改手机号码",8);
                    return;
                }
            }else{
                xianshi("紧急号码输入错误",8);
                return;
            }
        }else if(chang3<=10 && chang3>=1 || chang3>=12){
            xianshi("紧急号输入有误",8);
            return;
        }else if(chang3<=0){
            xianshi("紧急号码不能为空",8);
            return;
        }
        if(chang3!=chang4){
            xianshi("紧急号码两次输入不同",9);
            return;
        }

    /* 照片 */
        if(picture=="images/shangchuanBg.png"){
            xianshi1("身份证正面图片不能为空");
            return;
        }

        if(picture1=="images/shangchuanBg.png"){
            xianshi1("身份证反面图片不能为空");
            return;
        }

    /* 日期 */
        if(data==""){
            xianshi1("身份证有效期不能为空");
            return;
        }else if(data1==""){
            xianshi1("身份证有效期不能为空");
            return;
        }

    /* 照片 */
        if(picture2=="images/shangchuanBg.png"){
            xianshi1("手持身份证头部照片不能为空");
            return;
        }

        if(picture3=="images/shangchuanBg.png"){
            xianshi1("半身照片不能为空");
            return;
        }

    /* 正确弹出 */
        $(".zhedang").show();
        $(".shouji").show();
        $(".shouji div").show();
        $(".shouji div p").empty();
        $(".shouji div p").append("入驻人姓名将会绑定店铺提现账户名，并且不能更改，后期提现将只能提到该入驻人的银行卡内。确认您的入驻人姓名是正确的吗？");
        $(".shouji span input").show();
        $(".shouji span input:nth-child(2)").hide();

    /* 点选框 */        
        var append='<label><span><i></i></span><select><option value="0">请选择</option><option value="1">淘宝</option><option value="2">京东</option><option value="3">天猫</option><option value="4">唯品会</option><option value="5">折800</option><option value="6">贝贝</option><option value="7">卷皮</option><option value="8">蘑菇街</option><option value="9">聚美优品</option><option value="10">美丽说</option></select><input type="text" placeholder="请输入第三方链接" /> <button class="jian">-</button></label>';
        $(".main .main_down div.yes button.jia").click(function(){
            $(".main .main_down div.yes").append(append);
            $(this).hide();
            $(".main .main_down div.yes button.jian").show();
        });
    });

/* 点击取消 */
    $(".shouji input:last-child").click(function(){
        $(".shouji div").hide();
        $(".zhedang").hide();
        $(".shouji").hide();
    });
/* 点击确定 */
    $(".shouji input:first-child").click(function(){
        window.location.href="index.html";
    });

/* 关注我们 */
    $("footer .top span.gzwm").mouseenter(function(){
        $("footer p.zhong").stop(true , true).show(400);
    }).mouseleave(function(){
        $("footer p.zhong").stop(true , true).hide(400);
    });

});