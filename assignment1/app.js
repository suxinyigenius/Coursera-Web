(function(){
'use strict';
angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$jnject =['$scope'];
function LunchCheckController($scope){
    $scope.name = '';
    $scope.message ='Please enter data first';
    $scope.check = function(){
        
        if ($scope.name.length == 0) {
            $scope.message = 'Empty,please enter something';
            return;
          } 
        
        else{
        var items= $scope.name.split(',')
        console.log(items)
         if(items.length <=3){
        $scope.message = 'Enjoy!';
        }
        else{
            $scope.message = 'Too much!'
        }
    }
}}

})();