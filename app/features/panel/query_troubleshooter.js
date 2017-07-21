/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/app_events","app/core/core"],function(a,b){"use strict";function c(){return{restrict:"E",template:g,controller:h,bindToController:!0,controllerAs:"ctrl",scope:{panelCtrl:"="},link:function(a,b,c,d){d.renderJsonExplorer=function(a){var c=b.find(".query-troubleshooter-json");d.jsonExplorer=new f.JsonExplorer(a,3,{animateOpen:!0});var e=d.jsonExplorer.render(!0);c.html(e)}}}}b&&b.id;a("queryTroubleshooter",c);var d,e,f,g,h;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g='\n<collapse-box title="Query Troubleshooter" is-open="ctrl.isOpen" state-changed="ctrl.stateChanged()"\n              ng-class="{\'collapse-box--error\': ctrl.hasError}">\n  <collapse-box-actions>\n    <a class="pointer" ng-click="ctrl.toggleExpand()" ng-hide="ctrl.allNodesExpanded">\n      <i class="fa fa-plus-square-o"></i> Expand All\n    </a>\n    <a class="pointer" ng-click="ctrl.toggleExpand()" ng-show="ctrl.allNodesExpanded">\n      <i class="fa fa-minus-square-o"></i> Collapse All\n    </a>\n    <a class="pointer" clipboard-button="ctrl.getClipboardText()"><i class="fa fa-clipboard"></i> Copy to Clipboard</a>\n  </collapse-box-actions>\n  <collapse-box-body>\n    <i class="fa fa-spinner fa-spin" ng-show="ctrl.isLoading"></i>\n    <div class="query-troubleshooter-json"></div>\n  </collapse-box-body>\n</collapse-box>\n',h=function(){function a(a,b){this.$timeout=b,this.onRequestErrorEventListener=this.onRequestError.bind(this),this.onRequestResponseEventListener=this.onRequestResponse.bind(this),e.default.on("ds-request-response",this.onRequestResponseEventListener),e.default.on("ds-request-error",this.onRequestErrorEventListener),a.$on("$destroy",this.removeEventsListeners.bind(this))}return a.$inject=["$scope","$timeout"],a.prototype.removeEventsListeners=function(){e.default.off("ds-request-response",this.onRequestResponseEventListener),e.default.off("ds-request-error",this.onRequestErrorEventListener)},a.prototype.onRequestError=function(a){this.isOpen=!0,this.hasError=!0,this.onRequestResponse(a)},a.prototype.stateChanged=function(){this.isOpen&&(this.panelCtrl.refresh(),this.isLoading=!0)},a.prototype.getClipboardText=function(){if(this.jsonExplorer)return JSON.stringify(this.jsonExplorer.json,null,2)},a.prototype.onRequestResponse=function(a){this.isOpen&&(this.isLoading=!1,a=d.default.cloneDeep(a),a.headers&&delete a.headers,a.config&&(a.request=a.config,delete a.config,delete a.request.transformRequest,delete a.request.transformResponse,delete a.request.paramSerializer,delete a.request.jsonpCallbackParam,delete a.request.headers,delete a.request.requestId,delete a.request.inspect,delete a.request.retry,delete a.request.timeout),a.data&&(a.response=a.data,200===a.status&&this.hasError&&(this.hasError=!1,this.isOpen=!1),delete a.data,delete a.status,delete a.statusText,delete a.$$config),this.$timeout(d.default.partial(this.renderJsonExplorer,a)))},a.prototype.toggleExpand=function(a){this.jsonExplorer&&(this.allNodesExpanded=!this.allNodesExpanded,this.jsonExplorer.openAtDepth(this.allNodesExpanded?20:1))},a}(),a("QueryTroubleshooterCtrl",h),f.coreModule.directive("queryTroubleshooter",c)}}});