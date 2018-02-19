(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope)
{

    $scope.lunchlist = "";

    $scope.myclick = function() {
        
        //Empty item is considered
        var list = $scope.lunchlist.split(',');
        var len = list.length;
        for(var i=0; i<list.length;i++)
            if(list[i].length == "")
                len--;

        console.log(len);

        if ($scope.lunchlist == "")
        {

            $scope.myMessage = {"color" : "red"};
            $scope.myBorder = {"border-color" : "red"};
            $scope.message = "Please enter data first";

        }
        else if(len <= 3)
        {
            $scope.myMessage = {"color" : "green"};
            $scope.myBorder = {"border-color" : "green"};
            $scope.message = "Enjoy!";
        }
        else if(len > 3)
        {
            $scope.myMessage = {"color" : "green"};
            $scope.myBorder = {"border-color" : "green"};
            $scope.message = "Too much!";
        }

    }

}

})();