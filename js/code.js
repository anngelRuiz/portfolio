$(document).ready(function () {
    var scrollPos = $(document).scrollTop();
    detectScroll(scrollPos);

    $(document).on("scroll", onScroll);

    function onScroll(event) {
        scrollPos = $(document).scrollTop();
        detectScroll(scrollPos);
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

    $("#nav ul li a[href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        var scrollValue = hash != "#section-home" ? scrollValue = $(hash).offset().top : 0;

        $('html, body').stop().animate({ scrollTop: scrollValue }, 1200, function () {
            // window.location.hash = hash;
        });

        $('#nav ul li a').not(this).removeClass('active');
        $(this).addClass('active');
    });

    function detectScroll() {
        scrollPos > 80 ? $('.navbar').addClass('solid') : $('.navbar').removeClass('solid');
    }

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