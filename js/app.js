$(function(){
    $('#fullpage').fullpage({
        navigation: true
    });

    $(document).foundation();

    // Animation for intro-w
    $('.intro-g .button').click(function() {
       $('.intro-w').addClass('show-all');
        $('.intro-w .button').addClass('back');

        $('.back').click(function() {
            $('.intro-w').removeClass('show-all');
            $('.intro-g').removeClass('show-all');
            $(this).removeClass('back');
        });
    });

    // Animation for intro-g
    $('.intro-w .button').click(function() {
        $('.intro-g').addClass('show-all');
        $('.intro-g .button').addClass('back');

        $('.back').click(function() {
            $('.intro-w').removeClass('show-all');
            $('.intro-g').removeClass('show-all');
            $(this).removeClass('back');
        });
    });
});
