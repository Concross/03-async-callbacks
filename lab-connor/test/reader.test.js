'use strict';

jest.mock('fs');

const reader = require('../lib/reader');

const file1 = `${__dirname}/../data/file1.txt`, file2 = `${__dirname}/../data/file2.txt`, file3 = `${__dirname}/../data/file3.txt`;

const badFile = `${__dirname}/../data/bad.txt`;

describe('Testing reader(paths, callback) for valid arguments', () => {
  test('reader() should throw an Error when called without enough args', () => {
    let errorMessage = 'Error: reader() not called with proper number of arguments';

    expect(() => {
      reader();

    }).toThrowError(errorMessage);

    expect(() => {
      reader([]);
    }).toThrowError(errorMessage);
  });

  test('reader() should throw a TypeError when called with improper type for first param', () => {
    let typeErrorMessage = 'Type Error: reader() paths parameter must be of type Array';
    let cb = jest.fn();
    expect(() => {
      reader('badArg', cb);
    }).toThrowError(typeErrorMessage);

    expect(() => {
      reader(5, cb);
    }).toThrowError(typeErrorMessage);

    expect(() => {
      reader({}, cb);
    }).toThrowError(typeErrorMessage);

    expect(() => {
      reader(null, cb);
    }).toThrowError(typeErrorMessage);

    expect(() => {
      reader(undefined, cb);
    }).toThrowError(typeErrorMessage);

  });

  test('reader() should throw a TypeError when paths param is not an array of length 3', () => {
    let typeErrorMessage = 'Type Error: reader() paths parameter must be an array of exactly three file paths';
    let cb = jest.fn();
    expect(() => {
      reader([1, 2], cb);
    }).toThrowError(typeErrorMessage);

    expect(() => {
      reader([1, 2, 3, 4], cb);
    }).toThrowError(typeErrorMessage);

  });

  test('reader() should throw an error if any file path is bad', () => {

    let paths = [badFile, file2, file3];

    reader(paths, (err, result) => {
      expect(err).toBeDefined();
    });

  });

  test('reader() should return the result if file paths are good', () => {

    let paths = [file1, file2, file3];

    reader(paths, (err, result) => {
      expect(err).toBeDefined();
      expect(typeof result).toBe('string');
    });
  });

  test('reader() should throw an error if second arg is not a function', () => {
    let errorMessage = 'Type Error: Second argument must be a callback function';
    let paths = [file1, file2, file3];

    expect(() => {
      reader(paths, []);
    }).toThrowError(errorMessage);

  });

});