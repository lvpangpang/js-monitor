function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

export { _objectDestructuringEmpty as objectDestructuringEmpty };
