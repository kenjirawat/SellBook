// /* global describe, before, beforeEach, afterEach,it */
// require('mocha-generators').install()
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
//     it('ซื้อเล่ม 1 จำนวน 2 เล่ม ส่วนลดต้องเท่ากับ 0', function * () {
//       var case1 = yield nightmare
//         .goto('http://localhost:5000')
//         .wait(2000)
//         .click('#book1')
//         // .click('.book1')
//         .evaluate(function () {
//           this.price = document.querySelector('#sell').innerHTML
//           return this.price
//         })
//       case1.should.equal('0.00')
//     })
//   })
// })
var Nightmare = require('nightmare')
var nightmare = Nightmare({show: true, paths: {userData: './public/index.html'}})

nightmare
  .goto('http://localhost:5000/')
  // .type('input[title="Search"]', 'github nightmare')
  .wait('#book1')
  .click('#book1')
  .click('#book1')
  .wait(1000)
  .click('#book2')
  .wait(2000)
  .evaluate(function () {
    return document.querySelector('#sum').innerHTML
  })
  .end()
  .then(function (result) {
    if (result === '280') {
      console.log(true)
    } else console.log(false)
    // console.log(result)
  })
