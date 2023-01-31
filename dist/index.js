var monitor = (function () {
  'use strict';

  function upload(_ref) {
    var server = _ref.server,
      message = _ref.message;
    var img = new Image();
    img.src = "".concat(server, "?message=").concat(encodeURIComponent(message));
  }

  function capture(_ref) {
    var server = _ref.server;
    window.addEventListener("error", function (error) {
      console.log(error.type);
      upload({
        server: server,
        message: error.message
      });
    }, false);
    window.addEventListener("unhandledrejection", function (e) {
      console.log(e.type);
    });
  }

  var monitor = {
    init: function init(_ref) {
      var server = _ref.server;
      capture({
        server: server
      });
    }
  };

  return monitor;

})();
