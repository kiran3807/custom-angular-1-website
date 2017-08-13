app.controller('testCtrl',['$scope','configService',function($scope,configService){

$scope.message = "hola worldkkk";

var obj = configService.getConfig();
obj.then(function(ret){
	console.log(ret);
},
function(){

});


}])
