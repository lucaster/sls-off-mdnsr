console.log('debug info', {
  'process.version': process.version,
  LD_LIBRARY_PATH: process.env.LD_LIBRARY_PATH,
  LD_PRELOAD: process.env.LD_PRELOAD,
});

const canvas = require('canvas');

console.log('debug info', {
  canvas: !!canvas,
});

module.exports.hello = async () => Promise.resolve({
  status: 200,
  body: {
    message: 'Hello, World!',
    cairoVersion: cairoVersion(),
  },
});

module.exports.time = async () => Promise.resolve({
  status: 200,
  body: {
    time: new Date(),
    cairoVersion: cairoVersion(),
  },
});

function cairoVersion() {
  return canvas ? canvas.cairoVersion : 'no canvas';
}
