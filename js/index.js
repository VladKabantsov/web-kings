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

        $("#Layer_1").fadeOut(200);

        $('#main-container').fadeIn(600);
    }, 3100);
});

