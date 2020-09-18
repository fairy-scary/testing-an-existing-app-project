const { parse } = require('querystring');
const { Z_BEST_SPEED } = require('zlib');

function getValueFromBody(body, key) {
  const o = parse(body);
  return o[key] || '';
}

exports.getValueFromBody = getValueFromBody;

