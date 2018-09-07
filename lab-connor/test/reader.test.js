'use strict';

const reader = require('../lib/reader');

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
    let typeErrorMessage = 'Type Error: reader() was called with invalid args';
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

});