var expect = require('chai').expect;
var fancy = require('fancy-test').fancy;
var chapter = require('chapter').resolved;

describe(`[${chapter.toUpperCase()}] Check points`, ()=> {
  it('The `()` operator', () => {
    expect(() => require('../1.js')).not.be.throw();
  });
});