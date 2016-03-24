/* global angular */
angular.module('app', [])
  .controller('AppBook', function ($scope) {
    // var scope = this
    // scope.name = 'Hi BookHarry'
    $scope.test = 'Harry Potter'
    $scope.sum = 0
    $scope.books = [
      {
        id: 1,
        name: 'แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์',
        price: 100,
        img: '1.jpg'
      },
      {
        id: 2,
        name: 'แฮร์รี่ พอตเตอร์ กับห้องแห่งความลับ',
        price: 100,
        img: '2.jpg'
      },
      {
        id: 3,
        name: 'แฮร์รี่ พอตเตอร์ กับนักโทษแห่งอัซคาบัน',
        price: 100,
        img: '3.jpg'
      },
      {
        id: 4,
        name: 'แฮร์รี่ พอตเตอร์ กับถ้วยอัคน',
        price: 100,
        img: '4.jpg'
      },
      {
        id: 5,
        name: 'แฮร์รี่ พอตเตอร์ กับภาคีนกฟีนิกซ์',
        price: 100,
        img: '5.jpg'
      },
      {
        id: 6,
        name: 'แฮร์รี่ พอตเตอร์ กับเจ้าชายเลือดผสม',
        price: 100,
        img: '6.jpg'
      },
      {
        id: 7,
        name: 'แฮร์รี่ พอตเตอร์ กับเครื่องรางยมทูต',
        price: 100,
        img: '7.jpg'
      }
    ]

    $scope.choose = []
    $scope.add = function (data) {
      $scope.choose.push(data)
      $scope.sum += 100
      console.log($scope.choose)
    }
    $scope.delete = function (index) {
      $scope.choose.splice(index, 1)
      $scope.sum -= 100
    }
  })
