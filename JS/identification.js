//identification开始
$(function () {

    var i = 0;
    var timer = null;
    var firstimg = $('.demoBox .img li').first().clone(); //复制第一张图片
    $(".demoBox .img").append(firstimg).width($(".demoBox .img li").length * ($(".demoBox .img li").width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度

    // 下一个按钮
    $(".demoBox .next").click(function () {
        i++;
        if (i == $(".demoBox .img li").length) {
            i = 1; //这里不是i=0
            $(".demoBox .img").css({left: 0}); //保证无缝轮播，设置left值
        }
        ;

        $(".demoBox .img").stop().animate({left: -i * 1140}, 500);

    })
    // 上一个按钮
    $(".demoBox .prev").click(function () {
        i--;
        if (i == -1) {
            i = $(".demoBox .img li").length - 2;
            $('.demoBox .img').css({left: -($(".demoBox .img li").length - 1) * 1140});
        }
        $('.demoBox .img').stop().animate({left: -i * 1140}, 500);

    })
    //定时器自动播放
    timer = setInterval(function () {
        i++;
        if (i == $('.demoBox .img li').length) {
            i = 1;
            $('.demoBox .img').css({left: 0});
        }
        ;

        $('.demoBox .img').stop().animate({left: -i * 1140}, 500);

    }, 2000)

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.demoBox').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            i++;
            if (i == $('.demoBox .img li').length) {
                i = 1;
                $('.demoBox .img').css({left: 0});
            }
            ;
            $('.demoBox .img').stop().animate({left: -i * 1140}, 1000);

        }, 2000)
    })
    $(".demoBox .img1 img").mouseenter(function () {
        $(this).css({
            "width": 105,
            "height": 105,
            "border-radius": 52
    })
    })
    $(".demoBox .img1 img").mouseleave(function () {
        $(this).css({
            "width": 100,
            "height": 100
        })
    })

})
