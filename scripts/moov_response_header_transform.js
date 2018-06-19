module.exports = function() {
  headers.removeAllHeaders('strict-transport-security');
};

// // Clear strict-transport-security - we don't want it for investors.com and
// // some of the rewritten responses are returning it in the headers.
// headers.removeAllHeaders('strict-transport-security');