angular.module("appInfo").controller("AppInfoController", function ($http){
	this.app =
	{
		name : "Lab",
		version	: "LOCAL"
	};

	var that = this;

	this.load = function (){

		$http.get("data/appInfo.json").success(function(data){
			that.app.version = data.version;
			that.app.build = data.build;

		});
	};
	this.load();
});

angular.module("appInfo").directive("appInfo", function (){
	return {
		restrict: "E",
		controller: "AppInfoController",
		controllerAs: "appInfoCtrl",
		templateUrl: "AppInfo/app-info.html"
	};
});
