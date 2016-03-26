/* global describe, before, beforeEach, afterEach,it */
require('mocha-generators').install()

var Nightmare = require('..')
var chai = require('chai')
var server = require('./server')
var should = chai.should()
var test = function () {
  test()
  if (should) {
  }
}
describe('TEST Buy Harry Potter Book', function () {
  before(function (done) {
    server.listen(7500, done)
  })
  describe('Test buy Harry Potter Book', function () {
    var nightmare
    beforeEach(function () {
      nightmare = Nightmare()
    })

    afterEach(function * () {
      yield nightmare.end()
    })
    it('ซื้อเล่ม 1 จำนวน 2 เล่ม ส่วนลดต้องเท่ากับ 0', function * () {
      var case1 = yield nightmare
        .goto('http://localhost:5000')
        .wait(2000)
        .click('.book1')
        // .click('.book1')
        .evaluate(function () {
          this.price = document.querySelector('.total2').innerHTML
          return this.price.substr(1, this.price.length - 1)
        })
      case1.should.equal('0.00')
    })
  })
})
// var Nightmare = require('nightmare');
// var nightmare = Nightmare({ show: true })
//
// nightmare
//   .goto('http://yahoo.com')
//   .type('input[title="Search"]', 'github nightmare')
//   .click('#uh-search-button')
//   .wait('#main')
//   .evaluate(function () {
//     return document.querySelector('#main .searchCenterMiddle li a').href
//   })
//   .end()
//   .then(function (result) {
//     console.log(result)
//   })
