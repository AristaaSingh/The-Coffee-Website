/* this script is responsible for elements fading in and out on the page */

$(document).ready(function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('show');
            } else {
                $(entry.target).removeClass('show');
            }
        });
    });

    $('.hidden').each(function() {
        observer.observe($(this)[0]);
    });
});

/* for the fade-scrolling effects I have taken help from a tutorial for which the reference is below:
Beyond Fireship. 2022. Subtle, yet Beautiful Scroll Animations. [Online]. [Accessed 24 April 2024]. Available from:
https://youtu.be/T33NN_pPeNI?si=77Ofd5hDE6AXpWHo */