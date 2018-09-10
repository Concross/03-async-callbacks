'use strict';

const fs = require('fs');

module.exports = exports = function (paths, callback) {
  _checkNumberOfArgs(arguments, exports);
  _checkValidFirstArg(paths);
  _checkValidSecondArg(callback);

  _readFiles(paths, 0, callback);
};

const _checkNumberOfArgs = (actual, expected) => {
  if (actual.length !== expected.length) {
    throw new Error('Error: reader() not called with proper number of arguments');
  }
};

const _checkValidFirstArg = (paths) => {
  _isPathsArrayValid(paths);

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

const _checkValidSecondArg = (callback) => {
  if (typeof callback !== 'function') {
    throw new TypeError('Type Error: Second argument must be a callback function');
  }
};

const _readFiles = (paths, idx, callback) => {
  if (idx >= paths.length) {
    return;
  }
  const currFile = paths[idx];
  return fs.readFile(currFile, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data.toString());
      _readFiles(paths, idx + 1, callback);
    }
  });
};