jQuery("document").ready(function($){

    var menuBtn = $(".menu-icon"),
        menu = $(".header-top-right");

    menuBtn.click(function() {

        if( menu.hasClass("show")){

            menu.removeClass("show");
        } else{

            menu.addClass("show");
        }
    });
    menu.click(function() {

        if( menu.hasClass("show")){

            menu.removeClass("show");
        } else{

            menu.addClass("show");
        }
    });

});