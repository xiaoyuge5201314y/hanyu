$(function () {
    getAbout("../module/jj.html")

    const $jj = $('#jj');
    const $culture = $('#culture');
    const $zl = $('#zl');

    $jj.on('click', function () {
        $jj.addClass('now').siblings().removeClass('now');;
        getAbout('../module/jj.html');
    });
    $culture.on('click', function () {
        $culture.addClass('now').siblings().removeClass('now');;
        getAbout('../module/culture.html');
    });
    $zl.on('click', function () {
        $zl.addClass('now').siblings().removeClass('now');;
        getAbout("../module/zl.html")
    });

});