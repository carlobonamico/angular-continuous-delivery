#Let's start adding some AngularJS - for real!

## Define app, module, controller

mkdir -p src/components/AppInfo

several .js files

src/components/AppInfo/AppInfoModule.js

```
angular.module("appInfo",[]);

```

src/components/AppInfo/AppInfoController.js

```
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

});

angular.module("appInfo").directive("appInfo", function (){
	return {
		restrict: "E",
		controller: "AppInfoController",
		controllerAs: "appInfoCtrl",
		templateUrl: "AppInfo/app-info.html"
	};
});

```

In src/components/AppInfo/appInfo.html

```
<div>
	<h3>{{appInfoCtrl.app.name}} - {{appInfoCtrl.app.version}}</h3>
</div>
```


In Index.html, append

```
	<app-info></app-info>
```



## TODO use a second test page to explain hidden launch

## or ng-if 





In index.html
* include src/app/AppInfo/AppInfoModule.js
* include src/app/AppInfo/AppInfoController.js

And there would be ..Service, ...Directives and so on...

--from CDN

## Commit


## What's missing? 
src/app/main/mainModule.js

```
angular.module("labApp",['appInfo']);
```



## Ta-dah!
Here you are!

#Generate appInfo.json from Jenkins build

Better in the build.sh


## Additional Lab: create another component
