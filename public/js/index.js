$(document).ready(function () {
    banner();

    function banner() {
        // <!-- 轮播图功能 -->
        $(".swiper-container").css({
            height: "809px"
        });
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

});

