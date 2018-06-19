module.exports = function() {
  let routes = {
    pageType: {},
    mappings: []
  };

  // Add page type objects to mappings using .push() arguments. Properties:
  // 1. Required. `name` [pageType name, string]
  // 2. Required. `url` [path, regex] OR `element` [CSS selector, string]
  // 3. Required. `imports` [filename paths, array] OR `passthrough` [string of
  //    extra data for conditional passthrough, such as "perfectProxy"]

  routes.mappings.push(
    {
      name: "home",
      url: /^\/ual\/((en|ja)\/(us|jp))\/?($|\?)/,
      imports: ["/pages/home.js"]
    },
    {
      name: "book_a_flight",
      url: /\/flight-search\/book-a-flight\/?($|\?)/,
      imports: ["/pages/book_a_flight.js"]
    }
  );

  return routes;
};
