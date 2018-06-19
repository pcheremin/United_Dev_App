require("/custom_functions.js");

global.routes = require("/routes.js")();

module.exports = function() {
  let contentType = env.content_type || "";
  
  // Moovweb styleguide
  // go to https://www.united.com/moovweb_styleguide to view
  if (env.path.indexOf("/moovweb_styleguide") > -1) {
    fns.init$(body);
    fns.constructPageType();
    fns.cleanMobileMetaTags();
    fns.addAssets();
    return { body: $.html(), htmlparsed: true };
  }

  // If running locally and the url includes ?moov_debug=true, break here.
  if (env.path.indexOf("moov_debug=true") >= 0) {
    breakpoint("Parameter 'moov_debug=true' detected in the URL.");
  }

  if (contentType.indexOf("html") > -1) {
    fns.init$(body);
    fns.constructPageType();
    if (fns.shouldPerfectProxy(env, routes)) {
      return { htmlparsed: false };
    } else {
      require("/html.js")();
      return { body: $.html(), htmlparsed: true };
    }

  } else if (contentType.indexOf("application/json") > -1) {
    return { body: require("/json.js")(), htmlparsed: false };

  } else if (fns.isRobots()) {
    // Prevents crawlers from accessing non-production urls
    return { body: fns.handleRobots(body), htmlparsed: true };

  } else if (contentType.indexOf("xml") > -1) {
    fns.init$(body, {xmlMode: true});
    return { body: $.xml(), htmlparsed: true };

  } else {
    // When we haven't matched any content-type that we plan on transforming
    console.log("Passing through " + contentType + " unmodified.");
    return { htmlparsed: false };

  }
};
