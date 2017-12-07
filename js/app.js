$(function(){
    $('#fullpage').fullpage({
        navigation: true
    });

    $(document).foundation();

    // Animation for intro-w
    $('.intro-g .show-btn').click(function() {
       $('.intro-w').addClass('whole-page');
       $('.show-btn').hide();
       $('.intro-w .back-btn')
           .show()
           .animate({
               transition: 'all 0.5s ease-in-out',
               left: '120px',
               top: '120px'
            });
    });

    // Animation for intro-g
    $('.intro-w .show-btn').click(function() {
        $('.intro-g').addClass('whole-page');
        $('.show-btn').hide();
        $('.intro-g .back-btn')
            .show()
            .animate({
                transition: 'all 0.5s ease-in-out',
                left: '120px',
                top: '120px'
            });
    });

    $('.intro').delegate('.whole-page', 'click', function() {
        $(this).removeClass('whole-page');
        $(this).find('.back-btn').hide();
        $('.show-btn').show();
    });
});

