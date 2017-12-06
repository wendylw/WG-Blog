$(function(){
    $('#fullpage').fullpage(
        {
            // sectionsColor: ['orange', 'blue', 'red'],
            navigation: true
        }
    );
    $(document).foundation();

    $('.intro-g button').click(function() {
       $('.intro-w').addClass('show-all');
    });
});