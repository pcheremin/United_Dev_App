module.exports = function() {
  let $mwHeader = $(tag("header", {class: "mw-header"}));

  let createHeader = function() {
    let $logo = $body.find(".logo").addClass("mw-logo");
    let logoImage = "images/Logo.png";
    $logo.name("div");
    $body.prepend($mwHeader);
    $mwHeader.append(tag("div", {class: "mw-icon-menu"}));
    $mwHeader.append($logo);
    $logo.find("img").remove();
    $logo.append(tag("img", {class: "mw-logo-asset", src: fns.asset(logoImage), "data-skip-lazy": "true"}));
  };

  let createProfileIcon = function() {
    let $origSignInWrapper = $("#tile-signin");
    if ($origSignInWrapper.length > 0) {
      let $mwProfileIcon = $(tag("div", {class: "mw-profile-icon"}));
      let $mwProfileName = $(tag("div", {class: "mw-profile-name"}, "Mileageplus"));
      $origSignInWrapper.empty();
      $mwProfileName.prepend($mwProfileIcon);
      $mwHeader.append($mwProfileName);
    }
  };

  createHeader();
  createProfileIcon();

  return {
    createHeader: createHeader,
    createProfileIcon: createProfileIcon
  };
  
};
