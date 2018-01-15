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
    });

/* 单选框 */
    $(".main .main_down div.dp input").click(function(){
        var list=$("input:radio[name='one']:checked").val();
        if(list==1){
            $(".main .main_down div.yes").show();
            $(".main .main_down div.dp i.redxz").hide();
            return;
        }else if(list==0){
            $(".main .main_down div.yes").hide();
            $(".main .main_down div.dp i.redxz").hide();
            return;
        }
        return;
    });

/* 三证合一 */
    $(".main .main_downOne div.dp input").click(function(){
        var list1=$("input:radio[name='two']:checked").val();
        if(list1=="two2"){//选择否
            $(".main .main_downOne div.dp:nth-child(3) label:nth-child(1) input").hide();
            $(".main .main_downOne div.dp:nth-child(3) label span:nth-child(3)").hide();
            $(".main .main_downOne div.dp:nth-child(3) label:nth-child(2) input").attr("checked","checked");
            $(".main .main_downOne .enterName").show();
            $(".main .main_downOne div.dp:nth-child(2) label").css({
                border: 'none'
            });
            $(".main .main_downOne div:nth-child(9)").show();
            return;
        }else{//选择是
            $(".main .main_downOne div.dp:nth-child(3) label:nth-child(1) input").show();
            $(".main .main_downOne div.dp:nth-child(3) label span:nth-child(3)").show();
            $(".main .main_downOne .enterName").hide();
            $(".main .main_downOne div.dp:nth-child(2) label").css({
                border: 'none'
            });
            $(".main .main_downOne div:nth-child(9)").hide();
            return;
        }
    });

    $(".main .main_downOne div.dp input").click(function(){
        var list2=$("input:radio[name='three']:checked").val();
        if(list2=="three1"){//选择是
            $(".main .main_downOne div.hidden").hide();
            $(".main .main_downOne div.dp:nth-child(3) label").css({
                border: 'none'
            });
            return;
        }else{//选择否
            $(".main .main_downOne div.dp:nth-child(3) label").css({
                border: 'none'
            });
            $(".main .main_downOne div.hidden").show();
            return;
        }
    });

/* 点击查看图片 */
    $(".main .main_down div.logo li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

/* 质检报告 */
    $(".upload input").click(function(){
        geshu();
    });

/* 质检报告方法 */
    function geshu(){
        var size=$(".upload_warp_img span").size();
        if(size>=12){
            $(".upload").hide();
            $(".upload_warp_left").hide();
        }else{
            $(".upload").show();
            $(".upload_warp_left").show();
        }
    }

/* 添加商标 */
    var j=20;
    $(".yaoqing button").click(function(){
        var a=1;
        var b=1;
        j++;
        a+=j;
        b+=a;
        console.log(a);
        $(".main_downthree").append('<div class="group-item"><div><label><span><i>*</i>商标注册号:</span><input type="text" placeholder="商标注册号" /></label></div><i class="del">删除</i><div><label><span><i>*</i>商标注册证明:</span><img id="photo'+b+'" src="images/shangchuanBg.png" width="109px" height="109px" style="display: block;" /><input type="file" name="imgOne'+b+'" class="imgOne" id="imgOne'+b+'" onchange="preImg(this.id,photo'+b+');" /></label></div><div><label><span><i>*</i>品牌授权证明:</span><img id="photo'+a+'" src="images/shangchuanBg.png" width="109px" height="109px" style="display: block;" /><input type="file" name="imgOne'+a+'" class="imgOne" id="imgOne'+a+'" onchange="preImg(this.id,photo'+a+');" /></label></div><div class="data"><label><span><i>*</i>品牌授权有效期:</span><input type="date" /><small>至</small><input type="date" /></label></div></div>');
        $(".main .main_downthree div i.del").show();
        $(".main .main_downthree div i.del").click(function(){
            var size=$(".group-item").size();
            $(this).parent("div").remove();
            if(size==1){
                $(".main .main_downthree div i.del").hide();
            }
        });
    });


/* 示例 */
    function shili(i){
        $(".shili p").empty();
        $(".zhedang").show();
        $(".shili").show();
        $(".shili p").append('<img src="images/shili'+i+'.jpg" alt="" />')
    }

    $(".shili1 .endGb").click(function(){
        $(".zhedang").hide();
        $(".shili1").hide();
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

/* main_downOne遮挡提示 */
    function main_downOne(china,i){
        $(".zhedang").show();
        $(".shouji").show();
        $(".shouji div").show();
        $(".shouji div p").empty();
        $(".shouji div p").append(china);
        $(".shouji span input").hide();
        $(".shouji span input:nth-child(2)").show();
        $(".main_downOne div:nth-child("+i+") input").css({
            border: '1px solid #f00'
        });
    }

/* select */
    function select1(china,i,j){
        $(".zhedang").show();
        $(".shouji").show();
        $(".shouji div").show();
        $(".shouji div p").empty();
        $(".shouji div p").append(china);
        $(".shouji span input").hide();
        $(".shouji span input:nth-child(2)").show();
        $(".main_downOne div:nth-child("+i+") select").css({
            border: '1px solid #f00'
        });
    }

/* 身份证图片 */
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
        var chang2=$(".main_down div:nth-child(6) label input").val();/* 身份证号 */
        var chang5=$(".main_down div:nth-child(7) label input").val();/* 紧急联系人名称 */
        var chang3=$(".main_down div:nth-child(8) label input").val().length;/* 紧急联系人手机号 */
        var chang4=$(".main_down div:nth-child(9) label input").val().length;/* 确认紧急联系人手机号 */
        var list=$("input:radio[name='one']:checked").val();/* 单选按钮 */
        var select=$(".main .main_down div.yes option").val();/* 下拉菜单 */

        var photo=$(".main .main_down .main_downTwo img").attr("src");
        var photo1=$(".main .main_down .main_downTwo div:nth-child(3) img").attr("src");
        var riqi=$(".main .main_down .main_downTwo div:nth-child(4) input").val();
        var riqi1=$(".main .main_down .main_downTwo div:nth-child(4) input:nth-child(4)").val();
        var photo2=$(".main .main_down .main_downTwo div:nth-child(5) img:nth-child(2)").attr("src");
        var photo3=$(".main .main_down .main_downTwo div:nth-child(6) img:nth-child(2)").attr("src");

        var list1=$("input:radio[name='two']:checked").val();/* 单选按钮 */
        var list2=$("input:radio[name='three']:checked").val();/* 单选按钮 */
        var nameDisplay =$('.main .main_down .main_downOne div:nth-child(4)').css('display');/* 法人姓名是否隐藏 */
        var nameFr=$(".main .main_down .main_downOne div:nth-child(4) input").val();/* 法人姓名 */
        var email=$(".main .main_down .main_downOne div:nth-child(5) input").val();/* 法人邮箱 */
        var tel=$(".main .main_down .main_downOne div:nth-child(6) input").val().length;/* 法人手机号 */
        var tel1=$(".main .main_down .main_downOne div:nth-child(7) input").val().length;/* 确认法人手机号 */
        var idcard=$(".main .main_down .main_downOne div:nth-child(8) input").val().length;/* 法人身份证 */
        var corDisplay=$(".main .main_down .main_downOne div:nth-child(9)").css('display')/* 公司名称 */
        var corporate=$(".main .main_down .main_downOne div:nth-child(9) input").val();/* 公司名称 */
        var addSelect1=$(".main .main_down .main_downOne div:nth-child(10) select:nth-child(1)").val();/* 公司地址 */
        var addSelect2=$(".main .main_down .main_downOne div:nth-child(10) select:nth-child(2)").val();/* 公司地址 */
        var addSelect3=$(".main .main_down .main_downOne div:nth-child(10) select:nth-child(3)").val();/* 公司地址 */
        var address=$(".main .main_down .main_downOne div:nth-child(10) input").val();/* 公司地址 */
        var licDisplay=$(".main .main_down .main_downOne div:nth-child(11)").css('display')/* 营业执照注册号 */
        var license=$(".main .main_down .main_downOne div:nth-child(11) input").val();/* 营业执照注册号 */
        var orgDisplay=$(".main .main_down .main_downOne div:nth-child(12)").css('display');/* 组织机构代码 */
        var organization=$(".main .main_down .main_downOne div:nth-child(12) input").val();/* 组织机构代码 */
        var taxpayDisplay=$(".main .main_down .main_downOne div:nth-child(13)").css('display');/* 纳税人识别码 */
        var taxpayer=$(".main .main_down .main_downOne div:nth-child(13) input").val();/* 纳税人识别码 */
        var taxiology=$(".main .main_down .main_downOne div:last-child input").val().length;/* 统一社会信用代码 */

        var picture=$(".main .main_downTwo1 img").attr("src");
        var picture1=$(".main .main_downTwo1 div:nth-child(3) img").attr("src");
        var data=$(".main .main_downTwo1 div:nth-child(4) input").val();
        var data1=$(".main .main_downTwo1 div:nth-child(4) input:nth-child(4)").val();
        var picture2=$(".main .main_downTwo1 div:nth-child(5) img:nth-child(2)").attr("src");
        var picture3=$(".main .main_downTwo1 div:nth-child(6) img:nth-child(2)").attr("src");
        var picture4=$(".main .main_downTwo1 .upload_warp_img").css('display');

        var trademark=$(".main .main_downthree .group-item div:nth-child(1) input").val();/* 商标注册号 */
        var pic1=$(".main .main_downthree .group-item div:nth-child(3) img").attr("src");/* 商标注册证明 */
        var pic2=$(".main .main_downthree .group-item div:nth-child(4) img").attr("src");/* 品牌授权证明 */
        var sel1=$(".main .main_downthree .group-item div.data input:nth-child(2)").val();
        var sel2=$(".main .main_downthree .group-item div.data input:nth-child(4)").val();

        var name=/^[\u4E00-\u9FA5]{1,6}$/;/* 姓名 */
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;/* 手机号 */
        var reg=/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;/* 邮箱 */
        var isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; /* 15~18位的身份验证 */

        var Sociology=/[A-Z0-9]{18}/g;/* 统一社会信用代码 */

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
        }else{
            $(".main_down div:nth-child(5) input").css({
                border: '1px solid #E5E5E5'
            });
        }

    /* 验证身份证 */
        if(chang2==18){
            var str=$(".main_down div:nth-child(6) label input").val();
            var idCard=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; /* 15~18位的身份验证 */
            if(idCard.test(str)){
                
            }else{
                xianshi("身份证号码输入错误" , 6);
                return;
            }
        }else if(chang2<=17 && chang2>=1 && chang2>=19){
            xianshi("身份证号输入有误" , 6);
            return;
        }else if(chang2<=0){
            xianshi("身份证号不能为空" ,6);
            return;
        }else{
            $(".main_down div:nth-child(6) label input").css({
                border: '1px solid #E5E5E5'
            });
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
                    xianshi("紧急号码与管理人手机号重复请更改手机号码",8);
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
        if(photo=="images/shangchuanBg.png"){
            xianshi1("身份证正面图片不能为空");
            return;
        }

        if(photo1=="images/shangchuanBg.png"){
            xianshi1("身份证反面图片不能为空");
            return;
        }

    /* 日期 */
        if(riqi==""){
            xianshi1("身份证有效期不能为空");
            return;
        }else if(riqi1==""){
            xianshi1("身份证有效期不能为空");
            return;
        }

    /* 照片 */
        if(photo2=="images/shangchuanBg.png"){
            xianshi1("手持身份证头部照片不能为空");
            return;
        }

        if(photo3=="images/shangchuanBg.png"){
            xianshi1("半身照片不能为空");
            return;
        }

    /* 第三方平台店铺 */
        /*if(list==null){
            $(".zhedang").show();
            $(".shouji").show();
            $(".shouji div").show();
            $(".shouji div p").empty();
            $(".shouji div p").append("第三方平台店铺没有选择");
            $(".shouji span input").hide();
            $(".shouji span input:nth-child(2)").show();
            $(".main .main_down div.dp i.redxz").show();
            return;
        }*/

/******************************* 法人 *************************************/
    /* 三证合一 */
        if(list1==null){
            $(".zhedang").show();
            $(".shouji").show();
            $(".shouji div").show();
            $(".shouji div p").empty();
            $(".shouji div p").append("是否国内企业证件照没有选择");
            $(".shouji span input").hide();
            $(".shouji span input:nth-child(2)").show();
            $(".main .main_downOne  div.dp:nth-child(2) label").css({
                border: '1px solid #f00'
            });
            return;
        }
        if(list2==null){
            $(".zhedang").show();
            $(".shouji").show();
            $(".shouji div").show();
            $(".shouji div p").empty();
            $(".shouji div p").append("是否三证合一没有选择");
            $(".shouji span input").hide();
            $(".shouji span input:nth-child(2)").show();
            $(".main .main_downOne  div.dp:nth-child(3) label").css({
                border: '1px solid #f00'
            });
            return;
        }

    /* 判断姓名是否隐藏,执行条件 */
        if(nameDisplay=='block'){
            if(nameFr!=""){
                var name=$(".main_downOne div:nth-child(4) label input").val();
                var name1=/^[\u4E00-\u9FA5]{1,6}$/;/* 姓名 */
                if(name1.test(name)){
                    $(".main_downOne div:nth-child(4) label input").css({
                        border: '1px solid #E5E5E5'
                    });
                }else{
                    main_downOne("企业法人姓名输入错误",4);
                    return;
                }
            }else{
                main_downOne("企业法人姓名不能为空",4);
                return;
            }
        }

    /* 邮箱 */
        if(email!=""){
            var str=$(".main .main_down .main_downOne div:nth-child(5) label input").val();
            var reg=/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;/* 邮箱 */
            if(reg.test(str)){
                $(".main .main_down .main_downOne div:nth-child(5) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }else{
                main_downOne("企业法人邮箱输入错误",5);
                return;
            }
        }else{
            main_downOne("企业法人邮箱不能为空",5);
            return;
        }

    /* 手机号 */
        if(tel==11){
            var str=$(".main_downOne div:nth-child(6) input").val();
            var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
            if(ret.test(str)){
                $(".main_downOne div:nth-child(6) input").css({
                    border: '1px solid #E5E5E5'
                });
                $(".main_downOne div:nth-child(6) input").css({
                    border: '1px solid #E5E5E5'
                });
            }else{
                main_downOne("法人手机号码输入错误",6);
                return;
            }
        }else if(tel<=10 && tel>=1 || tel>=12){
            main_downOne("法人手机号输入有误",6);
            return;
        }else if(tel<=0){
            main_downOne("法人手机号不能为空",6);
            return;
        }
        if(tel!=tel1){
            main_downOne("手机号两次输入不同",7);
            $(".shouji span input:nth-child(2)").show();
            return;
        }else{
            $(".main_downOne div:nth-child(7) input").css({
                border: '1px solid #E5E5E5'
            });
        }

    /* 验证身份证 */
        if(idcard==18){
            var str1=$(".main_downOne div:nth-child(8) label input").val();
            var isIDCard1=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; /* 15~18位的身份验证 */
            if(isIDCard1.test(str1)){
                $(".main_downOne div:nth-child(8) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }else{
                main_downOne("身份证号码输入错误",8);
                return;
            }
        }else if(idcard<=17 && idcard>=1 || idcard>=19){
            main_downOne("身份证号输入有误",8);
            return;
         }else if(idcard<=0){
            main_downOne("身份证号不能为空",8);
            return;
        }

/* 公司名称 */
    /* 判断公司名称是否隐藏,执行条件 */
        if(corDisplay=='block'){
            if(corporate==""){
                main_downOne("公司名称不能为空",9);
                return;
            }else{
                $(".main_downOne div:nth-child(9) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }
        }

    /* 公司经营地址 */
        if(addSelect1=="请选择"){
            select1("公司经营地址不能为空",10);
            return;
        }else if(addSelect2=="请选择"){
            select1("公司经营地址不能为空",10);
            return;
        }else if(addSelect3=="请选择"){
            select1("公司经营地址不能为空",10);
            return;
        }else{
            $(".main_downOne div:nth-child(10) select").css({
                border: '1px solid #E5E5E5'
            });
        }

        if(address==""){
            main_downOne("公司经营地址不能为空",10);
            return;
        }else{
            $(".main_downOne div:nth-child(10) label input").css({
                border: '1px solid #E5E5E5'
            });
        }

    /* 营业执照注册号 */
        if(licDisplay=='block'){
            if(license==15){
                console.log("yes");
            }
            if(license==""){
                main_downOne("营业执照注册号不能为空",11);
                return;
            }else if(license<=14 && license>=1 && license>=16){
                main_downOne("营业执照注册号输入错误",11);
                return;
            }else{
                $(".main_downOne div:nth-child(11) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }
        }
    
    /* 组织机构代码 */
        if(orgDisplay=='block'){
            if(organization==""){
                main_downOne("组织机构代码不能为空",12);
                return;
            }else{
                $(".main_downOne div:nth-child(12) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }
        }
    
    /* 纳税人识别码 */
        if(taxpayDisplay=='block'){
            if(taxpayer==""){
                main_downOne("纳税人识别码不能为空",13);
                return;
            }else{
                $(".main_downOne div:nth-child(13) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }
        }


    /* 统一社会信用代码 */
        if(taxiology==18){
            var taxiology=$(".main .main_down .main_downOne div:last-child input").val();/* 统一社会信用代码 */
            var Sociology=/[A-Z0-9]{18}/g;/* 统一社会信用代码 */
            if(Sociology.test(taxiology)){
                $(".main_downOne div:nth-child(14) label input").css({
                    border: '1px solid #E5E5E5'
                });
            }else{
                main_downOne("统一社会信用代码输入错误",14);
                return;
            }
        }else if(taxiology<=17 && taxiology>=1 || taxiology>=19){
            main_downOne("统一社会信用代码输入有误",14);
            return;
         }else if(taxiology<=0){
            main_downOne("统一社会信用代码不能为空",14);
            return;
        }




    /* 照片 */
        if(picture=="images/shangchuanBg.png"){
            xianshi1("法定代表人身份证正面图片不能为空");
            return;
        }

        if(picture1=="images/shangchuanBg.png"){
            xianshi1("法定代表人身份证反面图片不能为空");
            return;
        }

    /* 日期 */
        if(data==""){
            xianshi1("法定代表人身份证有效期不能为空");
            return;
        }else if(data1==""){
            xianshi1("法定代表人身份证有效期不能为空");
            return;
        }

    /* 照片 */
        if(picture2=="images/shangchuanBg.png"){
            xianshi1("营业执照图片不能为空");
            return;
        }

        if(picture3=="images/shangchuanBg.png"){
            xianshi1("开户许可证图片不能为空");
            return;
        }

        if(picture4=="none"){
            xianshi1("质检报告图片不能为空");
            return;
        }

    /* 商标注册号 */
        if(trademark==""){
            xianshi1("商标注册号不能为空");
            return;
        }

    /* 商标注册证明 */
        if(pic1=="images/shangchuanBg.png"){
            xianshi1("商标注册证明图片不能为空");
            return;
        }

    /* 品牌授权证明 */
        if(pic2=="images/shangchuanBg.png"){
            xianshi1("品牌授权证明图片不能为空");
            return;
        }

    /* 品牌授权有效期 */
        if(sel1==""){
            xianshi1("品牌授权有效期不能为空");
            return;
        }else if(sel2==""){
            xianshi1("品牌授权有效期不能为空");
            return;
        }


    /* 正确弹出 */
        // $(".zhedang").show();
        // $(".shouji").show();
        // $(".shouji div").show();
        // $(".shouji div p").empty();
        // $(".shouji div p").append("入驻人姓名将会绑定店铺提现账户名，并且不能更改，后期提现将只能提到该入驻人的银行卡内。确认您的入驻人姓名是正确的吗？");
        // $(".shouji span input").show();
        // $(".shouji span input:nth-child(2)").hide();

    /* 点选框 */
        var append='<label><span><i></i></span><select><option value="0">请选择</option><option value="1">淘宝</option><option value="2">京东</option><option value="3">天猫</option><option value="4">唯品会</option><option value="5">折800</option><option value="6">贝贝</option><option value="7">卷皮</option><option value="8">蘑菇街</option><option value="9">聚美优品</option><option value="10">美丽说</option></select><input type="text" placeholder="请输入第三方链接" /> <button class="jian">-</button></label>';
        $(".main .main_down div.yes button.jia").click(function(){
            $(".main .main_down div.yes").append(append);
            $(this).hide();
            $(".main .main_down div.yes button.jian").show();
        });
            window.location.href="administration.html";
    });

// /* 点击取消 */
//     $(".shouji input:last-child").click(function(){
//         $(".shouji div").hide();
//         $(".zhedang").hide();
//         $(".shouji").hide();
//     });
// /* 点击确定 */
//     $(".shouji input:first-child").click(function(){
//         window.location.href="index.html";
//     });

/* 关注我们 */
    $("footer .top span.gzwm").mouseenter(function(){
        $("footer p.zhong").stop(true , true).show(400);
    }).mouseleave(function(){
        $("footer p.zhong").stop(true , true).hide(400);
    });

});