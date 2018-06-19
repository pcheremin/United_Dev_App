module.exports = function() {
  return body.replace(env.source_host, env.host);
};
