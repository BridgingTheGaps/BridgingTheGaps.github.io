/**
 * Created by gautam on 12/4/15.
 */
jQuery(function () {

    var scrollController = new ScrollMagic.Controller();
    var headerDonateButton = $("#header-donate");
    new ScrollMagic.Scene({
        triggerElement: "#one",
        duration: 100
    }).on("enter", function () {
            headerDonateButton
                .removeClass("zoomOut display-none")
                .addClass("zoomIn ");
        }).addTo(scrollController);

    new ScrollMagic.Scene({
        triggerElement: "#big-donate",
        duration: 100
    }).on("enter", function () {
            headerDonateButton
                .removeClass("zoomIn")
                .addClass("zoomOut");
        }).addTo(scrollController);

});