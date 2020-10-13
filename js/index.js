$(document).ready(function () {
    console.log($(window).width())

    var ant_left = 0;
    var ant_top = 230;
    var add_number_left = 1;
    var add_number_top = 1;
    setInterval(function () {

        var window_width = $(window).width();
        var window_height = $(window).height();
        var ant_position_left = $(".ant").offset().left;
        var ant_position_top = $(".ant").offset().top;

        if (ant_position_left > window_width - 40) {
            add_number_left = -add_number_left;
        }
        if (ant_position_left < 0) {
            add_number_left = -add_number_left;
        }

        if (ant_position_top > window_height - 40) {
            add_number_top = -add_number_top;
        }
        if (ant_position_top < 0) {
            add_number_top = -add_number_left;
        }

        ant_left = ant_left + add_number_left
        ant_top = ant_top + add_number_top
        $(".ant").css("left", ant_left)
        $(".ant").css("top", ant_top)
        // console.log($(".ant").offset().left);

    }, 80)



})

$(document).ready(function () {
    console.log($(window).width())

    var ant2_left = 700;
    var ant2_top = 400;
    var add_number_left = 2;
    var add_number_top = 2;
    setInterval(function () {

        var window_width = $(window).width();
        var window_height = $(window).height();
        var ant2_position_left = $(".ant2").offset().left;
        var ant2_position_top = $(".ant2").offset().top;

        if (ant2_position_left > window_width - 40) {
            add_number_left = -add_number_left;
        }
        if (ant2_position_left < 0) {
            add_number_left = -add_number_left;
        }

        if (ant2_position_top > window_height - 40) {
            add_number_top = -add_number_top;
        }
        if (ant2_position_top < 0) {
            add_number_top = -add_number_left;
        }

        ant2_left = ant2_left + add_number_left
        ant2_top = ant2_top + add_number_top
        $(".ant2").css("left", ant2_left)
        $(".ant2").css("top", ant2_top)
        // console.log($(".ant").offset().left);

    }, 80)



})


$(document).ready(function () {
    console.log($(window).width())

    var ant3_left = 200;
    var ant3_top = 300;
    var add_number_left = 1;
    var add_number_top = 1;
    setInterval(function () {

        var window_width = $(window).width();
        var window_height = $(window).height();
        var ant3_position_left = $(".ant3").offset().left;
        var ant3_position_top = $(".ant3").offset().top;

        if (ant3_position_left > window_width - 40) {
            add_number_left = -add_number_left;
        }
        if (ant3_position_left < 0) {
            add_number_left = -add_number_left;
        }

        if (ant3_position_top > window_height - 40) {
            add_number_top = -add_number_top;
        }
        if (ant3_position_top < 0) {
            add_number_top = -add_number_left;
        }

        ant3_left = ant3_left + add_number_left
        ant3_top = ant3_top + add_number_top
        $(".ant3").css("left", ant3_left)
        $(".ant3").css("top", ant3_top)
        // console.log($(".ant").offset().left);

    }, 80)



})

$(document).ready(function () {
    console.log($(window).width())

    var ant4_left = 500;
    var ant4_top = 600;
    var add_number_left = 1.5;
    var add_number_top = 1.5;
    setInterval(function () {

        var window_width = $(window).width();
        var window_height = $(window).height();
        var ant4_position_left = $(".ant4").offset().left;
        var ant4_position_top = $(".ant4").offset().top;

        if (ant4_position_left > window_width - 40) {
            add_number_left = -add_number_left;
        }
        if (ant4_position_left < 0) {
            add_number_left = -add_number_left;
        }

        if (ant4_position_top > window_height - 40) {
            add_number_top = -add_number_top;
        }
        if (ant4_position_top < 0) {
            add_number_top = -add_number_left;
        }

        ant4_left = ant4_left + add_number_left
        ant4_top = ant4_top + add_number_top
        $(".ant4").css("left", ant4_left)
        $(".ant4").css("top", ant4_top)
        // console.log($(".ant").offset().left);

    }, 80)



})

$(document).ready(function () {
    console.log($(window).width())

    var ant5_left = 50;
    var ant5_top = 900;
    var add_number_left = 1.8;
    var add_number_top = 1.8;
    setInterval(function () {

        var window_width = $(window).width();
        var window_height = $(window).height();
        var ant5_position_left = $(".ant5").offset().left;
        var ant5_position_top = $(".ant5").offset().top;

        if (ant5_position_left > window_width - 40) {
            add_number_left = -add_number_left;
        }
        if (ant5_position_left < 0) {
            add_number_left = -add_number_left;
        }

        if (ant5_position_top > window_height - 40) {
            add_number_top = -add_number_top;
        }
        if (ant5_position_top < 0) {
            add_number_top = -add_number_left;
        }

        ant5_left = ant5_left + add_number_left
        ant5_top = ant5_top + add_number_top
        $(".ant5").css("left", ant5_left)
        $(".ant5").css("top", ant5_top)
        // console.log($(".ant").offset().left);

    }, 80)



})

$(document).ready(function () {
    console.log($(window).width())

    var ant6_left = 500;
    var ant6_top = 600;
    var add_number_left = 1.5;
    var add_number_top = 1.5;
    setInterval(function () {

        var window_width = $(window).width();
        var window_height = $(window).height();
        var ant6_position_left = $(".ant6").offset().left;
        var ant6_position_top = $(".ant6").offset().top;

        if (ant6_position_left > window_width - 40) {
            add_number_left = -add_number_left;
        }
        if (ant6_position_left < 0) {
            add_number_left = -add_number_left;
        }

        if (ant6_position_top > window_height - 40) {
            add_number_top = -add_number_top;
        }
        if (ant6_position_top < 0) {
            add_number_top = -add_number_left;
        }

        ant6_left = ant6_left + add_number_left
        ant6_top = ant6_top + add_number_top
        $(".ant6").css("left", ant6_left)
        $(".ant6").css("top", ant6_top)
        // console.log($(".ant").offset().left);

    }, 80)



})