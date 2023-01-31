import capture from './capture.js';

var monitor = {
  init: function init(_ref) {
    var server = _ref.server;
    capture({
      server: server
    });
  }
};

export { monitor as default };
