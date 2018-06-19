module.exports = function() {
  let transformContent= function() {
    $body.find('#main-content').addClass('mw-main-container');
    let $booking_content= $body.find('.booking-content');
    $booking_content.find('#title-revenue').addClass('mw-page-title');
    //
    let $searchSummaryWrapper= $booking_content.find('#search-summary-wrapper');
    $searchSummaryWrapper.find('h2.legend').addClass('mw-mb-10');
    $searchSummaryWrapper.find('fieldset').addClass('mw-section').after('<div class="mw-separator-box mw-neg-mgn"></div>');
    // recent search
    let $rs_selector= $searchSummaryWrapper.find('#RS-selector').addClass('mw-select');
    $rs_selector.find('#recentSearch-text').addClass('mw-down-arrow');
    // location and dates
    // here there are 2 rows with 2 elements in each we are transforming them into 4 rows
    let $roundTripOption= $searchSummaryWrapper.find('#roundTripOption');
    let $fromSearchCityAirport= $roundTripOption.find('.form-row-autocomplete');
    let $toSearchCityAirport= $fromSearchCityAirport.clone();
    let $fromNearByAirports= $roundTripOption.find('#near-by-airports');
    let $toNearByAirports= $fromNearByAirports.clone();
    // removing the duplicate element from each row 
    $fromSearchCityAirport.find('.airport-autocomplete').eq(1).remove();
    $toSearchCityAirport.find('.airport-autocomplete').eq(0).remove();
    $fromNearByAirports.find('.form-group').eq(1).remove();
    $toNearByAirports.find('.form-group').eq(0).remove();
    //
    $fromNearByAirports.after($toNearByAirports);
    $fromNearByAirports.after($toSearchCityAirport);
    //
    $fromNearByAirports.find('select').addClass('mw-location-select');
    $toNearByAirports.find('select').addClass('mw-location-select');
    // dates
    let $divReturnDate= $roundTripOption.find('#div-returnDate');
    let $mwTime= $divReturnDate.parent().addClass('mw-dates').next().addClass('mw-time');
    $mwTime.next().addClass('mw-connections');
    // multi city options / multiple destintions
    let $multiCityOption= $searchSummaryWrapper.find('#multCityOption');
    $multiCityOption.find('.mw-separator-box').remove();
    $roundTripOption.find('.mw-separator-box').remove();
    //
    $roundTripOption.find('.form-row').addClass('mw-form-row');
    $multiCityOption.find('.form-row').addClass('mw-form-row');
  };

  let initialize= function() {
    $body.addClass("mw-book-a-flight");
    transformContent();
  };

  initialize();

  return {
    init: initialize
  };
};
