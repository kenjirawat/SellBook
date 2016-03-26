/* global describe,it */
require('mocha-generators').install()
//
// var Nightmare = require('..')
// var chai = require('chai')
// var server = require('./server')
// var should = chai.should()
// var test = function () {
//   test()
//   if (should) {
//   }
// }
// describe('TEST Buy Harry Potter Book', function () {
//   before(function (done) {
//     server.listen(7500, done)
//   })
//   describe('Test buy Harry Potter Book', function () {
//     var nightmare
//     beforeEach(function () {
//       nightmare = Nightmare()
//     })
//     afterEach(function * () {
//       yield nightmare.end()
//     })
//     it('ซื้อเล่ม 1 จำนวน 2 เล่ม ส่วนลดต้องเท่ากับ 0 ราคา 200', function * () {
//       var case1 = yield nightmare
//       //   .goto('http://localhost:5000')
//       //   .wait(2000)
//       //   .click('#book1')
//       //   // .click('.book1')
//       //   .evaluate(function () {
//       //     this.price = document.querySelector('#sell').innerHTML
//       //     return this.price
//       //   })
//       // case1.should.equal('0.00')
//     })
//   })
// })
// var Nightmare = require('nightmare')
// var nightmare = Nightmare({show: true, paths: {userData: './public/index.html'}})
//
// nightmare
//   .goto('http://localhost:5000/')
//   // .type('input[title="Search"]', 'github nightmare')
//   .wait('#book1')
//   .click('#book1')
//   .click('#book1')
//   .wait(1000)
//   .click('#book2')
//   .wait(2000)
//   .evaluate(function () {
//     return document.querySelector('#sum').innerHTML
//   })
//   .end()
//   .then(function (result) {
//     if (result === '280') {
//       console.log(true)
//     } else console.log(false)
//     // console.log(result)
//   })
var expect = require('chai').expect // jshint ignore:line
var Nightmare = require('nightmare')

describe('test Buy book', function () {
  it('เลือกหนังสือเล่ม1 จำนวน 1 เล่ม ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .evaluate(function () {
        return document.querySelector('#sum').innerHTML
      })
    expect(link).to.equal('100')
  })
  it('เลือกหนังสือเล่ม1 จำนวน 2 เล่ม แล้วลบออก 1 เล่ม', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .click('#book1')
      .click('#del1')
      .evaluate(function () {
        return document.querySelector('#sum').innerHTML
      })
    expect(link).to.equal('100')
  })
  it('เลือกหนังสือเล่ม1 จำนวน 3เล่ม และเล่ม2 2เล่ม เล่ม3 1เล่ม หาส่วนลด', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .click('#book1')
      .click('#book1')
      .click('#book2')
      .click('#book2')
      .click('#book3')
      .evaluate(function () {
        return document.querySelector('#sell').innerHTML
      })
    expect(link).to.equal('80')
  })
  it('เลือกหนังสือเล่ม1 จำนวน 1เล่ม และกดเพิ่มไป 3เล่ม', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .click('#ad1')
      .click('#ad1')
      .click('#ad1')
      .evaluate(function () {
        return document.querySelector('#sum').innerHTML
      })
    expect(link).to.equal('400')
  })
  it('เลือก harry3 จำนวน 3เล่ม และharry4 3เล่ม', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book3')
      .click('#book3')
      .click('#book3')
      .click('#book4')
      .click('#book4')
      .click('#book4')
      .evaluate(function () {
        return document.querySelector('#sum').innerHTML
      })
    expect(link).to.equal('540')
  })
  it('เลือก harry7 10เล่ม', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book7')
      .click('#book7')
      .click('#book7')
      .click('#book7')
      .click('#book7')
      .click('#book7')
      .click('#book7')
      .click('#book7')
      .click('#book7')
      .click('#book7')
      .evaluate(function () {
        return document.querySelector('#sum').innerHTML
      })
    expect(link).to.equal('1000')
  })
  it('เลือก harry1 5เล่ม แล้วบวก 1เล่ม ลบ 1เล่ม', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .click('#book1')
      .click('#book1')
      .click('#book1')
      .click('#book1')
      .click('#ad1')
      .click('#del1')
      .evaluate(function () {
        return document.querySelector('#sum').innerHTML
      })
    expect(link).to.equal('500')
  })
  it('เลือก harry1 2เล่ม harry2 2เล่ม harry3 2เล่ม จะได้ส่วนลด', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .click('#book1')
      .click('#book1')
      .click('#book2')
      .click('#book2')
      .click('#book3')
      .click('#book3')
      .evaluate(function () {
        return document.querySelector('#sell').innerHTML
      })
    expect(link).to.equal('120')
  })
})
