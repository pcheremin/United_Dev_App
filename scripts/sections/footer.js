module.exports = function() {
  let $mwFooter = $body.find("footer");

  let createFooter = function() {
    $mwFooter.addClass("mw-footer");
  };

  let createSocial = function() {
    let $mwSocial = $(tag("div", {class: "mw-section-social"}));
    $mwFooter.append($mwSocial);
  };

  let createLinks = function() {
  };

  let createCopyright = function() {
  };

  createFooter();
  createSocial();
  createLinks();
  createCopyright();

  // This injects a snippet of code used locally with gulp live-reloading
  // Note: assert statements are ignored in production.
  fns.assert(true, function() {
    if (fns.layer('live-reload')) {
      require("/sections/browsersync.js")();
    }
  });
};
