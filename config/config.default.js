'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1502776898497_177';

  // add your config here
  config.mongoose = {
    url: 'mongodb://127.0.0.1/test1',
    options: {}
  };

  return config;
};

// exports.mongoose = {
//   url: 'mongodb://127.0.0.1/demo1',
//   options: {}
// };