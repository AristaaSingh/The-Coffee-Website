/* this script is responsible for managing the card effects on the gallery page when the user hovers
over any of the cards. */

$(document).ready(function() {
    $('.card').hover(
        function() {
            $(this).find('.image-box img').css('filter', 'grayscale(0.5) brightness(0.4)');
            $(this).find('.content').css({
                'transform': 'translateY(0)',
                'opacity': 1
            });
        },
        function() {
            $(this).find('.image-box img').css('filter', 'grayscale(0)');
            $(this).find('.content').css({
                'transform': 'translateY(100%)',
                'opacity': 0
            });
        }
    );
});

/* for the hover card effects I have taken help from a tutorial for which the link is given below: 
https://www.instagram.com/reel/C2CfOYkPsP2/?igsh=MTl5eXJ4anhpaTNjOQ== */