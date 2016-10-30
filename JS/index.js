//<!--！！！！头部开始！！！！-->
$(function () {
    //左边鼠标进入，显示下拉菜单
    $(".fuhao").mouseenter(function () {
        $(".kechengbiao").stop().slideDown();
    });
    //左边鼠标离开菜单隐藏
    $(".fuhao").mouseleave(function () {
        $(".kechengbiao").stop().slideUp();
        $(".kechengbiao li").css("backgroundColor", "white");
        $(".kechengbiao li").children().css("color", "black");
    });
    //左边下拉菜单高亮事件
    $(".kechengbiao li").mouseenter(function () {
        $(this).css("backgroundColor", "#15C288").siblings().css("backgroundColor", "white");
        $(this).children().css("color", "white").parent().siblings().children().css("color", "black");
    });
    // 鼠标进去，右边课程下拉菜单显示
    $(".mLogoli").mouseenter(function () {
        $(".mLogoli .mlogoul").stop().slideDown();
    });
    //鼠标离开，隐藏
    $(".mLogoli").mouseleave(function () {
        $(".mLogoli .mlogoul").stop().slideUp();
        $(".mlogoul li").css("backgroundColor", "white");
        $(".mlogoul li").children().css("color", "black");
    });
    //右边下拉菜单高亮事件
    $(".mlogoul li").mouseenter(function () {
        $(this).css("backgroundColor", "#F7F7F7").siblings().css("backgroundColor", "white");
        $(this).children().css("color", "#15C288").parent().siblings().children().css("color", "black");
    });


});


//banner部分轮播图
$(function () {
    var imgWidth = $(".banner").width()
    var timer = null;

    //鼠标经过的时候，让图片上的小圆圈跟着一起改变
    $(".banner ol li").mouseenter(function () {

        var idx = $(this).index()

        var target = -idx * imgWidth;
        $(this).addClass("round").siblings().removeClass("round")

        $(".banner  ul").stop().animate({"left": target + "px"}, 1000)

        pic = square = idx
    })


    //鼠标经过的时候，左右焦点显示
    $(".banner").mouseenter(function () {
        $(".banner  .arrow").show()
        clearInterval(timer)

    })

    //鼠标离开的时候，左右焦点隐藏
    $(".banner").mouseleave(function () {
        $(".banner .arrow").hide()

        timer = setInterval(function () {
            $(".banner .arrow .right-arrow").click()
        }, 2000)
    })


    //复制第一张图片，并添加到ul的最后去
    var $ulLi = $(".banner  .pic-one").clone()
    $(".banner .big-pic ul").append($ulLi)


    var pic = 0  //设置一个变量来控制ul的位置
    var square = 0 //用来控制小圆圈下标


    //点击右边焦点让图片移动
    $(".banner .arrow .right-arrow").click(function () {

        if (pic == $(".banner .big-pic  li").length - 1) {

            pic = 0;
            $(".banner  ul").css("left", "0px")
        }
        pic++;

        var target = -pic * imgWidth
        $(".banner ul").stop().animate({"left": target + "px"}, 1000)

        //判断小圆圈的下标让它跟着图片一起动
        if (square == $(".banner ol li").length - 1) {
            square = 0
        } else {
            square++
        }

        $(".banner  ol li").eq(square).addClass("round").siblings().removeClass("round")


    })

    //点击左焦点的时候，让图片一起移动
    $(".banner .arrow .left-arrow").click(function () {
        if (pic == 0) {

            pic = $(".banner .big-pic li").length - 1
            $(".banner  ul").css("left", -pic * imgWidth + "px")

        }
        pic--;
        var target = -pic * imgWidth
        $(".banner  ul").stop().animate({"left": target + "px"}, 1000)

        //判断小圆圈的下标让它跟着图片一起动
        if (square == 0) {
            square = $(".banner ol li").length - 1
        } else {
            square--
        }

        $(".banner ol li").eq(square).addClass("round").siblings().removeClass("round")
    })

    timer = setInterval(function () {
        $(".banner .arrow .right-arrow").click()
    }, 2000)


//右边people部分上下两个分别以动画进入
    $(".people .nnt").stop().animate({"right": "95px"}, 1000, function () {
        $(".people .study").slideDown()
        $(".people .study").mouseenter(function () {
            $(".people .study").stop().animate({"fontSize": "22px"}, 500)
        })
        $(".people .study").mouseleave(function () {
            $(".people .study").stop().animate({"fontSize": "18px"}, 500)
        })
    })

})


//<!--！！！！openClass开始！！！！-->
$(function () {
    //点击右键
    var imgwidth = $("#box").width()
    var pic = 0;
    //点击右箭头
    $("#right").click(function () {
        if (pic == $("#imgs li").length - 5) {
            pic = 0;
            $("#imgs").css("left", "0px")
        }

        pic++;
        var imgwidth = $("#box").width()
        var target = -pic * imgwidth
        $("#imgs").stop().animate({
            "left": target + "px"
        }, 300)
    })
    //点击左箭头
    $("#left").click(function () {

        if (pic == 0) {
            pic = $("#imgs li").length - 5
            $("#imgs").css("left", -pic * imgwidth)
        }
        pic--;

        var target = -pic * imgwidth
        $("#imgs").stop().animate({
            "left": target + "px"
        }, 300)

    })

//点击左键
    $("#box-1").mouseenter(function () {
        $("#box-1 .layer").fadeIn()
    })
    $("#box-1").mouseleave(function () {
        $("#box-1 .layer").fadeOut()
    })

    //鼠标经过和离开事件
    $("#box-2").mouseenter(function () {
        $("#box-2 .layer").fadeIn()
    })
    $("#box-2").mouseleave(function () {
        $("#box-2 .layer").fadeOut()
    })


    $("#box-3").mouseenter(function () {
        $("#box-3 .layer").fadeIn()
    })
    $("#box-3").mouseleave(function () {
        $("#box-3 .layer").fadeOut()
    })


    $("#box-4").mouseenter(function () {
        $("#box-4 .layer").fadeIn()
    })
    $("#box-4").mouseleave(function () {
        $("#box-4 .layer").fadeOut()
    })

    $("#box-5").mouseenter(function () {
        $("#box-5 .layer").fadeIn()
    })
    $("#box-5").mouseleave(function () {
        $("#box-5 .layer").fadeOut()
    })

    $("#box-6").mouseenter(function () {
        $("#box-6 .layer").fadeIn()
    })
    $("#box-6").mouseleave(function () {
        $("#box-6 .layer").fadeOut()
    })

    $("#box-10").mouseenter(function () {
        $("#box-10 .layer").fadeIn()
    })
    $("#box-10").mouseleave(function () {
        $("#box-10 .layer").fadeOut()
    })

    $("#box-11").mouseenter(function () {
        $("#box-11 .layer").fadeIn()
    })
    $("#box-11").mouseleave(function () {
        $("#box-11 .layer").fadeOut()
    })
})


//精品课程部分jQuery特效开始
$(function () {
    //1. 插入图片
    for (i = 0; i < $(".excellent .pic img").length; i++) {
        $(".excellent .pic img").eq(i).attr("src", "images/excellent_" + i + ".jpg");
    }
    //2. 给nav里的li注册click事件
    $(".excellent .nav li").click(function () {
        $(".excellent .nav a").removeClass("current");
        $(this).children().addClass("current");
        var idx = $(this).index();
        //3. 对应的li高亮，对应的div显示
        $(".excellent .contents .content").eq(idx).stop().fadeIn().siblings().stop().fadeOut();
    });
    //4. 给pic注册mouseenter事件，图片变大
    $(".excellent .pic").mouseenter(function () {
        $(this).find("img").stop().animate({"width": "290px"}, 500);
    });
    //5. 给pic注册mouseleave事件，图片恢复原状
    $(".excellent .pic").mouseleave(function () {
        $(".excellent .pic").find("img").stop().animate({
            "width": "270px",
        }, 500);
    });

});



//<!--！！！！班级推荐开始！！！！-->

$(function () {
    //下面自动播放的轮播图
    var xianshi=document.getElementById("xianshi");
    var timer=null;
    var xs_hight=xianshi.offsetHeight;
    var pic=0;
    timer=setInterval(function () {
        if(pic<$("#xianshi>ul>li").length-1){
            pic++;
            var target=-xs_hight*pic;
            $("#xianshi ul").animate({"top":target+"px"},1000)
        }else{
            pic=0;
            $("#xianshi ul").css("top","0");
        }
    },2000)
    xianshi.onmouseover= function () {
        clearInterval(timer)
    }
    xianshi.onmouseout= function () {
        timer=setInterval(function () {
            if(pic<$("#xianshi>ul>li").length-1){
                pic++;
                var target=-xs_hight*pic;
                $("#xianshi ul").animate({"top":target+"px"},1000)
            }else{
                pic=0;
                $("#xianshi ul").css("top","0");
            }
        },2000)
    }
    //上面隐藏显示的部分
    $(".li1").mouseenter(function () {
        $(this).find(".yinchang").css("display","block");
    })
    $(".li1").mouseleave(function () {
        $(this).find(".yinchang").css("display","none");
    })
})


//topic特效开始
$(document).ready(function () {
    var imgWidth=$(".photo").width()

    //克隆第一个ul挂在box上
    var clonePic=$(".box>ul:eq(0)").clone()
    $(".box").append(clonePic)
    //让箭头显示隐藏
    $(".photo").mouseenter(function () {
        $("#arr").show();
    })
    $(".photo").mouseleave(function () {
        $("#arr").hide()
    })


    //点击右箭头
    var pic=0;
    $("#rightarr").click(function () {

        if(pic==$(".image").length-1) {
            pic = 0;
            $(".box").css("left", "0px")
        }
        pic++
        var target=-pic*imgWidth;
        $(".box").stop().animate({"left":target+"px"},1000)

    })
    //点击左箭头

    $("#leftarr").click(function () {
        if(pic==0) {
            pic = $(".image").length - 1
            $(".box").css("left", -pic * imgWidth + "px")
        }
        pic--;
        var target=-pic*imgWidth;
        $(".box").stop().animate({"left":target+"px"},1000)

    })
//topic部分经过图片图片放大特效
    //鼠标经过img，图片的高度和高度变大
    $(".image li").mouseenter(function () {
        $(this).find("img").stop().animate({
            "width":"290px",
            "height":"290px",
        },500)
    })
    // 鼠标经过img，图片的高度和高度变为原来的
    $(".image li").mouseleave(function () {
        $(this).find("img").stop().animate({
            "width":"280px",
            "height":"280px",
        },500)
    })
})



//<!--！！！！热搜js开始！！！！-->
$(function () {
    //当鼠标经过图片的时候，图片的宽度和高度变大，
    $(".hotLi img").mouseenter(function () {
        $(this).stop().animate({
            "height": "90px",
            "width": "90px"
        }, 500)
    });
    // 鼠标离开的时候，恢复到原本的宽度和高度
    $(".hotLi img").mouseleave(function () {
        $(this).stop().animate({
            "height": "80px",
            "width": "80px"
        }, 500)
    });
});



//more部分
$(function(){

    $(".rowe").mouseenter(function () {

        $(".more li").slideDown(3000, function () {
        });
    });
})



//<!--！！！二维码，jQurey部分！！！-->
$(function () {
    //功能1、鼠标经过上面二维码的时候，大的二维码显示
    //1.1：鼠标经过的时候，显示er盒子
    $("#weixin").mouseenter(function () {
        $(".er").show();
    });
    //1.2：鼠标离开的时候，隐藏er盒子
    $("#weixin").mouseleave(function () {
        $(".er").hide();
    });
    //功能2、鼠标经过问号的时候，问号的背景颜色为蓝色，上面加上“问题反馈”
    //2.1鼠标经过的时候，变成蓝色
    $(".wenhao-big").mouseenter(function () {
        $(".wenhao-big").addClass("showZLL").html("问题反馈")
    });
    //2.2鼠标离开的时候，恢复成原来的颜色
    $(".wenhao-big").mouseleave(function () {
        $(".wenhao-big").removeClass("showZLL").html('<div class="wenhao">？</div>');
    });


    //功能3、鼠标经过置顶的时候，置顶的背景改为蓝色，内容设置为“回到顶部”
    //3.1鼠标经过的时候，变成蓝色
    $(".zhiding").mouseenter(function () {
        $(".zhiding").addClass("showZLL").html("返回顶部")
    });
    //3.2鼠标离开的时候，恢复成原来的颜色
    $(".zhiding").mouseleave(function () {
        $(".zhiding").removeClass("showZLL").html('<img src="images/置顶2.png" alt="">')
    });
    //功能4、当scrollTop到一定程度的时候，下面的回到顶部盒子隐藏、
    //4.1给document注册scroll事件
    $(window).on('scroll', function () {
        //4.2获取scrollTop
        //????????不会上升，
        console.log($(window).scrollTop());

        //4.3拿相应的高度和scrollTop相比较，当scrollTop比较大的时候，置顶的盒子显示;当相应的高度比较大的时候，置顶的盒子隐藏
        if ($(window).scrollTop() >= 500) {
            $(".zhiding").slideDown(300);
        } else {
            $(".zhiding").slideUp(300);
        }

    });
    //功能5、当点击“回到顶部”时候，回到顶部
    //5.1：给置顶盒子注册点击事件
    $(".zhiding").click(function () {
        //5.1.1：当点击盒子的时候给一个动画，(注册一个间歇定时器)让距离慢慢变短，当scrollTop的值为0的时候，清除间歇定时器
        $('body,html').animate({scrollTop: "0px"}, 500);
        console.log(("函数还在执行1"));
        return false;
    });


});
