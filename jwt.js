function decode(token) {
  const p = token.split('.')[1];
  return JSON.parse(Buffer.from(p, 'base64').toString('utf8'));
}
module.exports = { decode };
