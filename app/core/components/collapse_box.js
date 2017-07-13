/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core_module"],function(a,b){"use strict";function c(){return{restrict:"E",template:e,controller:f,bindToController:!0,controllerAs:"ctrl",scope:{title:"@",isOpen:"=?",stateChanged:"&"},transclude:{actions:"?collapseBoxActions",body:"collapseBoxBody"},link:function(a,b,c){}}}b&&b.id;a("collapseBox",c);var d,e,f;return{setters:[function(a){d=a}],execute:function(){e='\n<div class="collapse-box">\n  <div class="collapse-box__header">\n    <a class="collapse-box__header-title pointer" ng-click="ctrl.toggle()">\n      <span class="fa fa-fw fa-caret-right" ng-hide="ctrl.isOpen"></span>\n      <span class="fa fa-fw fa-caret-down" ng-hide="!ctrl.isOpen"></span>\n      {{ctrl.title}}\n    </a>\n    <div class="collapse-box__header-actions" ng-transclude="actions" ng-if="ctrl.isOpen"></div>\n  </div>\n  <div class="collapse-box__body" ng-transclude="body" ng-if="ctrl.isOpen">\n  </div>\n</div>\n',f=function(){function a(a){this.$timeout=a,this.isOpen=!1}return a.$inject=["$timeout"],a.prototype.toggle=function(){var a=this;this.isOpen=!this.isOpen,this.$timeout(function(){a.stateChanged()})},a}(),a("CollapseBoxCtrl",f),d.default.directive("collapseBox",c)}}});