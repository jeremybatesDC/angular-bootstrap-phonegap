'use strict';

/* NG */
// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).

	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/home', {templateUrl:'partials/home.html', controller:MyCtrl1});
		$routeProvider.when('/bootstrap', {templateUrl:'partials/bootstrap.html', controller:MyCtrl2});
		$routeProvider.when('/d3', {templateUrl:'partials/d3.html', controller:MyCtrl3});

		$routeProvider.otherwise({redirectTo:'/phonegap'});
	}]).

	run(function ($rootScope, $location) {

		/* PG */
		$rootScope.deviceready = false;
		document.addEventListener('deviceready', function () {
			console.log("Report: deviceready");
			$rootScope.deviceready = true;
		}, false);
		/* /PG */

	});