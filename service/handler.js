function getValue() {
  return Math.floor((Math.random() * 100));
}

module.exports = {
  get: function get(_, __, callback) {
    return callback(null, [{
      name: 'Denim shirt S',
      value: getValue(),
    }, {
      name: 'Black sneakers (size 5)',
      value: getValue(),
    }, {
      name: 'Purple scarf with pattern',
      value: getValue(),
    }, {
      name: 'Grey tights',
      value: getValue(),
    }, {
      name: 'Red hat',
      value: getValue(),
    }]);
  }
}
