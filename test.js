var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })
nightmare
   .goto('http://localhost:5000')
   .click('#book1')
   .wait(1000)
   .evaluate(function () {
     return document.querySelector('#sum').innerHTML
   })
   .end()
   .then(function (result) {
     console.log(result)
   })
