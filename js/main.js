/**
 * Created by gautam on 12/4/15.
 */
jQuery(function () {

    var scrollController = new ScrollMagic.Controller();
    var headerDonateButton = $("#header-donate");
    new ScrollMagic.Scene({
        triggerElement: "#one",
        duration: 100,
        offset: 200
    }).on("enter", function () {
            headerDonateButton
                .removeClass("display-none")
                .addClass("animated fadeInUpBig");
        }).addTo(scrollController);

});