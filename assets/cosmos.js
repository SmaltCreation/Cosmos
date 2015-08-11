$(document).ready(function(){
    /* Transitions */
    $('#last-article-1, #about-left, #article').addClass("undisplayed").viewportChecker({
        classToAdd: 'displayed animated fadeInLeft',
        offset: 100
    });
    $('#last-article-2').addClass("undisplayed").viewportChecker({
        classToAdd: 'displayed animated zoomIn',
        offset: 100
    });
    $('#last-article-3, #about-right').addClass("undisplayed").viewportChecker({
        classToAdd: 'displayed animated fadeInRight',
        offset: 100
    });
    $('article.base-article, #comments').addClass("undisplayed").viewportChecker({
        classToAdd: 'displayed animated fadeInUp',
        offset: 100
    });
    $('#contact-form').addClass("undisplayed").viewportChecker({
        classToAdd: 'displayed animated pulse',
        offset: 100
    });

    /*Smooth anchor scrolling */
    function scrollNav() {
        $('.nav a').click(function(){
            //Toggle Class
            $(".active").removeClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.'+theClass).parent('li').addClass('active');
            //Animate
            $('html, body').stop().animate({
                scrollTop: $( $(this).attr('href') ).offset().top - 140
            }, 400);
            return false;
        });
        $('.scrollTop a').scrollTop();
    }
    scrollNav();
});
