$(document).ready(function () {

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 80) {
    //         $('.navbar').addClass('solid');
    //     } else {
    //         $('.navbar').removeClass('solid');
    //     }

    //     if ($(this).scrollTop() >= $('#section-work').position().top) {
    //         yourActionHere();
    //     }
    // });



    $(document).on("scroll", onScroll);

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();

        scrollPos > 80 ? $('.navbar').addClass('solid') : $('.navbar').removeClass('solid');

        $('#nav ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }

    // section - home
    // section - work
    // about - me
    // section - contact

    $("#nav ul li a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        var scrollValue = hash != "#section-home" ? scrollValue = $(hash).offset().top : 0;

        $('html, body').stop().animate({ scrollTop: scrollValue }, 700, function () {
            // window.location.hash = hash;
        });

        $('#nav ul li a').not(this).removeClass('active');
        $(this).addClass('active');
    });
});

console.log("&&                                                                      &");
console.log("/.&&                                                                  &#/&");
console.log("/..&&&                                                               &&#,/&");
console.log("(#/.&&&&                                                           &&&#,/&");
console.log("(#&*,,,,,&#                                                       &&&&#,/&");
console.log(" (#&*,,,,,,,&#                                                  &&&&&&#,/&"); //n
console.log("  ((#&*,,,,,,,,###                                             &,,,,,,,&&#");
console.log("   ((&*,,,,,,,,,,##                                          &,,,,,,,,,,&&");
console.log("       (*,,,,,,,,,,,,,##   #&&&&&&&&&&&&&&&&&&&#        &,,,,,,,,,,,,,,,&#");
console.log("        &&,,,,,,,,,,,,,&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,&&&,,,,,,,,,,,,,,,,##");
console.log("         &&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,&&##");
console.log("           &&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,###");
console.log("             &&,(,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/###");
console.log("             &&,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,####");
console.log("            &&,,,,,,,,(,,,,,,,,,,,,,,,,,,,,,,,,,,/*,,,,,,,,,,,,,##");
console.log("            #&,,,,,,& .&&,,,,,,,,,,,,,,,,,,,,,,,, &&,,,,,,,,,,,,,##");
console.log("            #&,,,,,,&&&&/,,,,,,,,,,,,,,,,,,,,,,,&&&&,,,,,,,,,,,,,&##");
console.log("            &,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,&##");
console.log("            #,,,,*,,,,,,,,,,,,,,,,*,,,,,,,,,,,,,,,,,,,,,*,,,,,,,,,&##");
console.log("           (#(((((,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,((((((,,,,,,&##");
console.log("           ##*((((,,,,,,,,,,,,,,,,,,&(***&,,,,,,,,,,,,((((((,,,,,,&##");
console.log("            #,,,,,,,,,,,,,,,,,,,,,,/******(,,,,,,,,,,,,(((/,,,,,,,,&##");
console.log("            #,,,,,,,,,,,,,,,,,,,,,,/******&,,,,,,,,,,,,,,,,,,,,,,,,,##");
console.log("             #,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,##");
console.log("              #,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,##");