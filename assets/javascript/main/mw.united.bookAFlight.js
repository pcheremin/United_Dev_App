mw.united.bookAFlight = function() {

  function initialize() {
    console.log('bookAFlight');
    $('.selector.fixedWidth span').DOMNodeAppear(function() {
      var $span= $(this), $select= $span.next();
      //
      $span.addClass('mw-down-arrow');
      $span.parent().addClass('mw-location-select-wrapper');
      if(!$select.hasClass('mw-location-select')) {
        $select.addClass('mw-location-select');
      }
    });
  }

  return {
    init: initialize,
    name: "mw-book-a-flight"
  };
}();
