/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core_module"],function(a,b){"use strict";function c(){return{restrict:"E",template:e,controller:f,bindToController:!0,controllerAs:"ctrl",scope:{dismiss:"&"}}}b&&b.id;a("saveDashboardModalDirective",c);var d,e,f;return{setters:[function(a){d=a}],execute:function(){e='\n<div class="modal-body">\n\t<div class="modal-header">\n\t\t<h2 class="modal-header-title">\n\t\t\t<i class="fa fa-save"></i>\n\t\t\t<span class="p-l-1">Save changes</span>\n\t\t</h2>\n\n\t\t<a class="modal-header-close" ng-click="ctrl.dismiss();">\n\t\t\t<i class="fa fa-remove"></i>\n\t\t</a>\n\t</div>\n\n\t<form name="ctrl.saveForm" ng-submit="ctrl.save()" class="modal-content" novalidate>\n\t\t<h6 class="text-center">Add a note to describe your changes</h6>\n\t\t<div class="p-t-2">\n\t\t\t<div class="gf-form">\n\t\t\t\t<label class="gf-form-hint">\n\t\t\t\t\t<input\n\t\t\t\t\t\ttype="text"\n\t\t\t\t\t\tname="message"\n\t\t\t\t\t\tclass="gf-form-input"\n\t\t\t\t\t\tplaceholder="Updates to &hellip;"\n\t\t\t\t\t\tgive-focus="true"\n\t\t\t\t\t\tng-model="ctrl.message"\n\t\t\t\t\t\tng-model-options="{allowInvalid: true}"\n\t\t\t\t\t\tng-maxlength="this.max"\n\t\t\t\t\t\tautocomplete="off" />\n\t\t\t\t\t<small class="gf-form-hint-text muted" ng-cloak>\n\t\t\t\t\t\t<span ng-class="{\'text-error\': ctrl.saveForm.message.$invalid && ctrl.saveForm.message.$dirty }">\n\t\t\t\t\t\t\t{{ctrl.message.length || 0}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t/ {{ctrl.max}} characters\n\t\t\t\t\t</small>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="gf-form-button-row text-center">\n\t\t\t<button type="submit" class="btn btn-success" ng-disabled="ctrl.saveForm.$invalid">Save</button>\n\t\t\t<button class="btn btn-inverse" ng-click="ctrl.dismiss();">Cancel</button>\n\t\t</div>\n\t</form>\n</div>\n',f=function(){function a(a,b){this.$scope=a,this.dashboardSrv=b,this.message="",this.max=64}return a.$inject=["$scope","dashboardSrv"],a.prototype.save=function(){if(this.saveForm.$valid){var a=this.dashboardSrv.getCurrent(),b=a.getSaveModelClone(),c={message:this.message};return this.dashboardSrv.save(b,c).then(this.dismiss)}},a}(),a("SaveDashboardModalCtrl",f),d.default.directive("saveDashboardModal",c)}}});