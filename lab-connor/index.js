'use strict';

const reader = require('./lib/reader');

const file1 = `${__dirname}/data/file1.txt`, file2 = `${__dirname}/data/file2.txt`, file3 = `${__dirname}/data/file3.txt`;
let paths = [file1, file2, file3];

let resolveFiles = (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data.toString());
  }
};

reader(paths, resolveFiles);