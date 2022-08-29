const canvas = require('canvas');

console.log('canvas', !!canvas);

module.exports.hello = async () => Promise.resolve({
  status: 200,
  body: {
    message: 'Hello, World!',
    cairoVersion: canvas?.cairoVersion,
  },
});

module.exports.time = async () => Promise.resolve({
  status: 200,
  body: {
    time: new Date(),
    cairoVersion: canvas?.cairoVersion,
  },
});
