!function(){"use strict";angular.module("surveyApp").controller("homeController",["$scope","$location",function(o,e){o.test="Testing...",console.log("here in home controller");o.goToSurvey=function(o){console.log("here in home controller"),e.path(o)}}])}();