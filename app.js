angular.module('app', [])
  .controller('AppBook', function ($scope) {
    // var scope = this
    // scope.name = 'Hi BookHarry'
    $scope.test = "Harry Potter"
    $scope.books=[
      {
        name : "H1",
        price : 100,
        img : "1.jpg"
      },
      {
        name : "H2",
        price : 100,
        img : "2.jpg"
      },
      {
        name : "H3",
        price : 100,
        img : "3.jpg"
      },
      {
        name : "H4",
        price : 100,
        img : "4.jpg"
      },
      {
        name : "H5",
        price : 100,
        img : "5.jpg"
      },
      {
        name : "H6",
        price : 100,
        img : "6.jpg"
      },
      {
        name : "H7",
        price : 100,
        img : "7.jpg"
      }
    ]

    $scope.choose = [];
    $scope.add = function(data){
      $scope.choose.push(data)
      console.log($scope.choose)
    }
    $scope.delete = function(index){
      $scope.choose.splice(index,1)
    }
  })
