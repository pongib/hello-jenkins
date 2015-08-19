var request = require('supertest');
var superagent = require('superagent');
var app = require('../app.js');
var expect = require('chai').expect;

describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello jenkins', done);
  });
});

describe('superagent', function() {
  it('should send hello jenkins', function(done) {
    superagent
      .get('http://localhost:5000')
      .end(function (err, res) {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('hello jenkins');
        done();
      });
  });
});
