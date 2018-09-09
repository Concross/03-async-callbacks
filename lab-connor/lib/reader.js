'use strict';

const fs = require('fs');

module.exports = exports = function (paths, callback) {
  _checkNumberOfArgs(arguments, exports);
  _checkValidFirstArg(paths);

  let fileContents = paths.map(file => {

    fs.readFile(file, (err, data) => {
      if (err) {
        callback(err);

      } else {
        callback(null, data.toString());

      }

    });
  });

  console.log(fileContents);
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