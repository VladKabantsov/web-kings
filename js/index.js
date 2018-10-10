$(window).on('load', function () {
    // Animate loader off screen

    setTimeout(function () {

        $('#Layer_1').show();

        var tl = new TimelineMax();

        tl.from('#legs', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
            .from('#body', 0.8, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
            .from('#eye', 0.5, {scaleX: 0, transformOrigin: "center", ease: Power2.easeOut})
            .from('#ear', 0.5, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut})
            // .from('#yellowBox', 0.5, {scale: 0})
            .staggerFrom('#Layer_1 > g:nth-child(1) > g path', 0.2, {scaleX: 0}, -0.1);
    }, 100);

    setTimeout(function () {

        $("#Layer_1").fadeOut(150);

        $('#main-container').fadeIn(1000);
    }, 3100);
});

$( document ).ready(function() {

    var bar = new ProgressBar.Circle(projects_circle, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    bar.animate(1.0);
});







