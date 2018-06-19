var mw = mw || {};

mw.united = {};

var iterator = mw.united;

jQuery(document).ready(function moovwebModuleLoad() {
  for (var moduleKey in iterator) {
    if (iterator.hasOwnProperty(moduleKey)) {
      var module = iterator[moduleKey];
      if (module.name && (jQuery("body").hasClass(module.name) || module.name === "mw-global") && typeof module.init !== 'undefined') {
        module.init();
      }
    }
  }
});


