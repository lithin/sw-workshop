const getValue = () => Math.random();

export function get(event, _, callback) {
  return callback(null, [{
    name: shirt,
    value: getValue(),
  }, {
    name: sneakers,
    value: getValue(),
  }, {
    name: scarf,
    value: getValue(),
  }, {
    name: tights,
    value: getValue(),
  }, {
    name: hat,
    value: getValue(),
  }]);
}
