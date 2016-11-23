/**
 * Created by Administrator on 2016/10/10 0010.
 */
var myapp=angular.module("myapp",["myFilter"])
myapp.controller("partCtrl",function($scope,$http){
    $scope.data=[]
    $scope.getData=function(){
        $http.get("asidedata.json").success(function(response){
            angular.forEach(response,function(data){
                $scope.data.push(data)
            })
        })
        /*$scope.arr=[]
        var index=Math.random()*$scope.data.length
        if($scope.arr.length<5){
            $scope.arr.push($scope.data[index])
        }*/

    }
    $scope.getData()
}).controller("sectionCtrl",function($scope,$http){
    $scope.data=[]
    $scope.getData=function(){
        $http.get("sectiondata.json").success(function(response){
            angular.forEach(response,function(data){
                $scope.data.push(data)
            })
        })
    }
    $scope.getData()
    $scope.selectedComment=null
    $scope.selectComment= function(comment){
        $scope.selectedComment = comment;
        $scope.pageNum = 1;
    };
    $scope.pageNum = 1;
    $scope.pageSize = 15;
    // 分页导航按钮的事件响应
    $scope.selectPage = function(page){
        $scope.pageNum = page;
    }
})/*.controller("pageCtrl",function ($scope) {

})*/