var $window = $(window);
var $elem = $("#projects_circle");

var bar1 = new ProgressBar.Circle(projects_circle, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 2000,
    color: '#eea649',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});

var bar2 = new ProgressBar.Circle(years_circle, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 2000,
    color: '#eea649',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});

var bar3 = new ProgressBar.Circle(clients_circle, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 2000,
    color: '#eea649',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
});

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

function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).on("scroll", function () {

    if (isScrolledIntoView($elem, $window)) {

        bar1.animate(1.0);
        bar2.animate(1.0);
        bar3.animate(1.0);
    }
});




