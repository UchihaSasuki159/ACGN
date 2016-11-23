/**
 * Created by hxsd on 2016/10/11.
 */
angular.module("myFilter",[])
angular.module("myFilter")
    .filter("pageFilter",function(){
        return function (comment, pageNum, pageSize) {
            if (angular.isArray(comment) &&
                angular.isNumber(pageNum) && angular.isNumber(pageSize)) {
                var startIndex = (pageNum - 1) * pageSize;
                if (startIndex >= comment.length) {

                    return [];
                }
                return comment.slice(startIndex, startIndex + pageSize);
            } else {
                return comment;
            }
        };
    })
    .filter("pageNavFilter",function(){
        return function (comment,pageSize){
            if(angular.isArray(comment) && angular.isNumber(pageSize)){
                // 计算页数
                var pageNumber = Math.ceil(comment.length/pageSize);
                var nav = [];
                for(var i=0;i<pageNumber;i++){
                    nav.push(i+1);
                }

                return nav;
            }else{
                return comment;
            }
        };
    });
