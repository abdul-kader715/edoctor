$(document).ready(function () {
    $(".notification").click(function(){
        $(".notification-item").toggleClass("notification-active");
    });

    $(".menu-btn,.close-sidebar").click(function(){
        $(".left-sidebar").toggleClass("left-sidebar-active");
    });
    $(".filter").click(function(){
        $(".select-area").slideToggle("slow");
      });

});
