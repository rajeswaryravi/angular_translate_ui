var app = angular.module('myApp',['ui.bootstrap','pascalprecht.translate']);
app.config(function ($translateProvider, $translatePartialLoaderProvider) {
  $translateProvider.useLoader('$translatePartialLoader', {
  urlTemplate: '/i18n/{part}/{lang}.json'
});
});
var title;
app.controller('myController',['$scope','$uibModal','$translatePartialLoader','$translate',function ($scope, $uibModal,$translatePartialLoader,$translate) {
  $scope.table_array=[];
  $scope.text="hai";
  title=$scope.table_array;
  $scope.change_lang='english';
  $translatePartialLoader.addPart('home');
  $translate.refresh();
  $translate.use($scope.change_lang);
  $scope.update_lang=function(){
    $translate.use($scope.change_lang);
   }
  $scope.add=function(){
  $scope.tid="";
  $scope.tname="";
  $translatePartialLoader.addPart('add');
  $translate.refresh();
  $translate.use($scope.change_lang);
  var modalInstance = $uibModal.open({
  templateUrl: 'add.html',
  controller:'popController',
  resolve: {
     title: function () {
     return $scope.table_array;
  }
  }
  });
 }
$scope.remove=function(i){
    $scope.table_array.splice(i,1);
}
}]);
app.controller('popController',function($scope, $uibModalInstance){ 
  $scope.add_show=true;
  $scope.detail_show=false;
  $scope.table_array=title;
  // cancel_detail function
  $scope.cancel_detail=function(){
  	$uibModalInstance.dismiss('cancel');
  }
  // add_detail function
  $scope.add_detail=function(){
  	if($scope.taskid!=null && $scope.taskname!=null){
   			var flag=0;
  			for(var i=0;i<$scope.table_array.length;i++){
  			 	if($scope.table_array.taskid==$scope.taskid){
  			 		flag=1;
  			 		break;
  			 	}
  			}
      if(flag==0){
  		$scope.table_array.push({taskid:$scope.taskid,taskname:$scope.taskname});
  		$scope.taskid=null;
  		$scope.taskname=null;
      $uibModalInstance.dismiss('cancel');
  	  }
  	  else{
  		alert("task id already exists");
  		$scope.taskid=null;
  		$scope.taskname=null;
  	 }
  }
  	 else{
  	 alert("enter taskid and task name");
  	 $scope.taskid=null;
  	 $scope.taskname=null;
  	}
  }
 });	
