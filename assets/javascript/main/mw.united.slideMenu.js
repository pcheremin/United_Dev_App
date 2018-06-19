mw.united.slideMenu = function() {

  function initialize() {
    $(".mw-icon-menu").on("click", function() {
      $(".mw-body-content").addClass("mw-slide-menu-active");
    });

    $(".mw-slide-menu .mw-icon-close-navigation").on("click", function() {
      $(".mw-body-content").removeClass("mw-slide-menu-active");
    });

  }

  return {
    init: initialize,
    name: "mw-global"
  };
}();
