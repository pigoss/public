/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash"],function(a,b){"use strict";function c(){return{restrict:"E",templateUrl:"public/app/features/dashboard/submenu/submenu.html",controller:f,bindToController:!0,controllerAs:"ctrl",scope:{dashboard:"="}}}b&&b.id;a("submenuDirective",c);var d,e,f;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c,d){this.$rootScope=a,this.variableSrv=b,this.templateSrv=c,this.$location=d,this.annotations=this.dashboard.templating.list,this.variables=this.variableSrv.variables}return a.$inject=["$rootScope","variableSrv","templateSrv","$location"],a.prototype.annotationStateChanged=function(){this.$rootScope.$broadcast("refresh")},a.prototype.variableUpdated=function(a){var b=this;this.variableSrv.variableUpdated(a).then(function(){b.$rootScope.$emit("template-variable-value-updated"),b.$rootScope.$broadcast("refresh")})},a.prototype.openEditView=function(a){var b=e.default.extend(this.$location.search(),{editview:a});this.$location.search(b)},a.prototype.exitBuildMode=function(){this.dashboard.toggleEditMode()},a}(),a("SubmenuCtrl",f),d.default.module("grafana.directives").directive("dashboardSubmenu",c)}}});