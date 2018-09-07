'use strict';

module.exports = exports = function (paths, callback) {
  _checkNumberOfArgs(arguments, exports);

};

const _checkNumberOfArgs = (actual, expected) => {
  if (actual.length !== expected.length) {
    throw new Error('Error: reader() not called with proper number of arguments');
  }
};