
var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('ctrl', function($scope) {
	$scope.taskList=[];
	var localTaskData = localStorage['allTasks'];
	if(localTaskData !== undefined){
		$scope.taskList=JSON.parse(localTaskData);
	}
    $scope.searchEnter = function(){
	  
	  if(event.which == 13){
		  
		  $scope.addTask();
	  }
	  $scope.addTask = function (){
		  $scope.taskList.push({'msg':$scope.task,'status':false});
		  localStorage['allTasks']=JSON.stringify($scope.taskList);
		  console.log($scope.taskList);
		  $scope.task="";
		  
	  };
	  $scope.contentEdit = function(msg){
		  console.log("in content edit "+msg);
		  event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
		  for(i=0;i<$scope.taskList.length;i++){
			  if($scope.taskList[i].msg == msg)
				 $scope.taskList[i].msg =  event.target.innerHTML;
		  }
		  localStorage['allTasks']=JSON.stringify($scope.taskList);
	  };
	   $scope.enterPress = function(msg){
		   if(event.which == 13 && $scope.task != "msg"){
		  
			$scope.contentEdit(msg);
			}
	  };
	  $scope.enterPressOnImg = function(msg){
		  console.log("cliked "+msg);
		  $scope.addTask();
	  };
  };
});

