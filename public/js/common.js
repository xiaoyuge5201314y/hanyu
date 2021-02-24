$(function () {
    // 导航栏
    navbar();
    function navbar() {
        var $navbar = $('.navbar');
        var $content = $('.content');
        var $change = $content.find('.nav a');
        $navbar.hide();
        $change.click(function () {
            $navbar.show();
            $content.hide();
        });
    }
});

function getAbout(path) {
    $.ajax({
        type: 'get',
        url: path,
        success: function (data) {
            $('.main').html(data);
        }
    });
}
