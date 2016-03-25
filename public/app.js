/* global angular */
angular.module('app', [])
  .controller('AppBook', function ($scope) {
    // var scope = this
    // scope.name = 'Hi BookHarry'
    // $scope.test = 'Harry Potter'
    // $scope.sum = 0
    // $scope.num= 0
    $scope.sell = 0
    $scope.books = [
      {
        id: 1,
        name: 'แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์',
        price: 100,
        img: '1.jpg',
        quantity: 1
      },
      {
        id: 2,
        name: 'แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ',
        price: 100,
        img: '2.jpg',
        quantity: 1
      },
      {
        id: 3,
        name: 'แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน',
        price: 100,
        img: '3.jpg',
        quantity: 1
      },
      {
        id: 4,
        name: 'แฮร์รี่ พอตเตอร์ กับถ้วยอัคน',
        price: 100,
        img: '4.jpg',
        quantity: 1
      },
      {
        id: 5,
        name: 'แฮร์รี่ พอตเตอร์ กับภาคีนกฟีนิกซ์',
        price: 100,
        img: '5.jpg',
        quantity: 1
      },
      {
        id: 6,
        name: 'แฮร์รี่ พอตเตอร์ กับเจ้าชายเลือดผสม',
        price: 100,
        img: '6.jpg',
        quantity: 1
      },
      {
        id: 7,
        name: 'แฮร์รี่พอตเตอร์ กับเครื่องรางยมทูต',
        price: 100,
        img: '7.jpg',
        quantity: 1
      }
    ]

    $scope.choose = []
    $scope.add = function (data, index) {
      if ($scope.checkadd(data.id)) {
        // var insertindex = $scope.checkindex(data.id)
        // $scope.choose.splice(insertindex, 1, {
        //   id: data.id,
        //   name: data.name,
        //   price: data.price,
        //   img: data.img,
        //   quantity: $scope.choose[insertindex].quantity += 1
        // })
        $scope.choose[$scope.checkindex(data.id)].quantity++
        // $scope.sum++
      }else {
        $scope.choose.push(data)
        // $scope.sum++
        $scope.booknum++
      }
      $scope.discount()
      // $scope.check = true
      // $scope.choose.sort(function (a, b) {
      //   if (a.quantity > b.quantity) return -1
      //   if (a.quantity < b.quantity) return 1
      //   return 0
      // })
      // var amount = []
      // for (var count = 0; count < $scope.choose.length ; count++) {
      //   amount.push($scope.choose[count].quantity)
      // }
      // console.log(amount)
      // var countlist = 0
      // var exit = 0
      // $scope.sell = 0
      // $scope.cal()
      // do {
      //   for (var i = 0 ; i < amount.length ; i++) {
      //     if (amount[i] !== 0) {
      //       countlist += 1
      //     }
      //     if (amount[i] === 0) {
      //       countlist += 0
      //       break
      //     }
      //   }
      //   if (countlist === 1) {
      //     console.log('1')
      //   }
      //   if (countlist === 2) {
      //     $scope.sell += ((countlist * 100) * 0.1)
      //     console.log('2')
      //   }else if (countlist === 3) {
      //     $scope.sell += ((countlist * 100) * 0.2)
      //     console.log('3')
      //   }else if (countlist === 4) {
      //     $scope.sell += ((countlist * 100) * 0.3)
      //     console.log('4')
      //   }else if (countlist === 5) {
      //     $scope.sell += ((countlist * 100) * 0.4)
      //     console.log('5')
      //   }else if (countlist === 6) {
      //     $scope.sell += ((countlist * 100) * 0.5)
      //     console.log('6')
      //   }else if (countlist === 7) {
      //     $scope.sell += ((countlist * 100) * 0.6)
      //     console.log('7')
      //   } else if (countlist === 0) {
      //     exit = 1
      //     console.log('exit')
      //   }
      //   console.log('count = ' + countlist)
      //   for (var d = 0 ; d < amount.length ; d++) {
      //     if (amount[d] > 0) {
      //       amount[d] -= 1
      //       countlist = 0
      //     }
      //   }
      // } while (exit !== 1) console.log($scope.sell)

      // $scope.sum += 100
      // console.log($scope.choose)
    }
    $scope.delete = function (index) {
      if ($scope.choose[index].quantity > 1) {
        $scope.choose[index].quantity -= 1
      } else {
        $scope.choose.splice(index, 1)
      }
      $scope.cal()
      $scope.discount()
      // $scope.sell = 0
      // $scope.sum = 0

      // $scope.choose[index].quantity -= 1
      // $scope.sum -= 1
      // $scope.sum -= 100
    }
    $scope.checkadd = function (id) {
      for (var i = 0; i < $scope.choose.length; i++) {
        if ($scope.choose[i].id === id) {
          return true
        }
      }
    }

    $scope.checkindex = function (id) {
      for (var ch_index = 0; ch_index < $scope.choose.length; ch_index++) {
        if ($scope.choose[ch_index].id === id) {
          return ch_index
        }
      }
    }
    $scope.cal = function () {
      $scope.priceSum = 0
      for (var i = 0 ; i < $scope.choose.length ; i++) {
        $scope.priceSum += $scope.choose[i].quantity * 100
      }
    }
    $scope.discount = function () {
      $scope.check = true
      $scope.choose.sort(function (a, b) {
        if (a.quantity > b.quantity) return -1
        if (a.quantity < b.quantity) return 1
        return 0
      })
      var amount = []
      for (var count = 0; count < $scope.choose.length ; count++) {
        amount.push($scope.choose[count].quantity)
      }
      console.log(amount)
      var countlist = 0
      var exit = 0
      $scope.sell = 0
      $scope.cal()
      do {
        for (var i = 0 ; i < amount.length ; i++) {
          if (amount[i] !== 0) {
            countlist += 1
          }
          if (amount[i] === 0) {
            countlist += 0
            break
          }
        }
        if (countlist === 1) {
          console.log('1')
        }
        if (countlist === 2) {
          $scope.sell += ((countlist * 100) * 0.1)
          console.log('2')
        }else if (countlist === 3) {
          $scope.sell += ((countlist * 100) * 0.2)
          console.log('3')
        }else if (countlist === 4) {
          $scope.sell += ((countlist * 100) * 0.3)
          console.log('4')
        }else if (countlist === 5) {
          $scope.sell += ((countlist * 100) * 0.4)
          console.log('5')
        }else if (countlist === 6) {
          $scope.sell += ((countlist * 100) * 0.5)
          console.log('6')
        }else if (countlist === 7) {
          $scope.sell += ((countlist * 100) * 0.6)
          console.log('7')
        } else if (countlist === 0) {
          exit = 1
          console.log('exit')
        }
        console.log('count = ' + countlist)
        for (var d = 0 ; d < amount.length ; d++) {
          if (amount[d] > 0) {
            amount[d] -= 1
            countlist = 0
          }
        }
      } while (exit !== 1) console.log($scope.sell)
    }
  })
