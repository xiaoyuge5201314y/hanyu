$(function () {
    getAbout('../module/jt.html');

    const $jt = $('#jt');
    const $hy = $('#hy');
    const $sp = $('#sp');

    $jt.on('click', function () {
        $jt.addClass('now').siblings().removeClass('now');;
        getAbout('../module/jt.html');
    });
    $hy.on('click', function () {
        $hy.addClass('now').siblings().removeClass('now');;
        getAbout('../module/hy.html');
    });
    $sp.on('click', function () {
        $sp.addClass('now').siblings().removeClass('now');;
        getAbout("../module/sp.html")
    });
   
});
