import { asyncToGenerator as _asyncToGenerator, regeneratorRuntime as _regeneratorRuntime } from './_virtual/_rollupPluginBabelHelpers.js';

function a() {
  return _a.apply(this, arguments);
}
function _a() {
  _a = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;
        case 2:
          console.log("hello a");
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _a.apply(this, arguments);
}

export { a };
