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
  _isPathsArrayValid(paths);
  // check if paths has enough elements
  // check if each element in the path is a proper file path

};

const _isPathsArrayValid = (paths) => {
  _isPathsAnArray(paths);
  _isPathsLengthValid(paths);

};

const _isPathsAnArray = (paths) => {
  if (!Array.isArray(paths)) {
    throw new TypeError('Type Error: reader() paths parameter must be of type Array');
  }
};

const _isPathsLengthValid = (paths) => {
  if (!(paths.length === 3)) {
    throw new TypeError('Type Error: reader() paths parameter must be an array of exactly three file paths');
  }
};