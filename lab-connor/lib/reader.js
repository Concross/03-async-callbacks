'use strict';

module.exports = exports = function (paths, callback) {
  _checkNumberOfArgs(arguments, exports);
  _checkValidFirstArg(paths);

};

const _checkNumberOfArgs = (actual, expected) => {
  if (actual.length !== expected.length) {
    throw new Error('Error: reader() not called with proper number of arguments');
  }
};

const _checkValidFirstArg = (paths) => {
  // check if paths is an array
  if (!(paths instanceof Array)) {
    throw new TypeError('Type Error: reader() was called with invalid args');
  }
  // check if paths has enough elements
  // check if each element in the path is a proper file path

};