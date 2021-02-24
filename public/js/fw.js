$(function () {
    getAbout('../module/zhaopin.html');

    const $zhaopin = $('#zhaopin');
    const $adress = $('#adress');

    $zhaopin.on('click', function () {
        $zhaopin.addClass('now').siblings().removeClass('now');;
        getAbout('../module/zhaopin.html');
    });
    $adress.on('click', function () {
        $adress.addClass('now').siblings().removeClass('now');;
        getAbout('../module/adress.html');
    });

});