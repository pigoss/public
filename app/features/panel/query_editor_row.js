/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular"],function(a,b){"use strict";function c(){return{restrict:"E",controller:f,bindToController:!0,controllerAs:"ctrl",templateUrl:"public/app/features/panel/partials/query_editor_row.html",transclude:!0,scope:{queryCtrl:"=",canCollapse:"=",hasTextEditMode:"="}}}var d,e,f;b&&b.id;return{setters:[function(a){d=a}],execute:function(){e=d.default.module("grafana.directives"),f=function(){function a(){this.panelCtrl=this.queryCtrl.panelCtrl,this.target=this.queryCtrl.target,this.panel=this.panelCtrl.panel,this.target.refId||(this.target.refId=this.panelCtrl.dashboard.getNextQueryLetter(this.panel)),this.toggleCollapse(!0),this.target.isNew&&(delete this.target.isNew,this.toggleCollapse(!1)),this.panel.targets.length<4&&(this.collapsed=!1)}return a.prototype.toggleHideQuery=function(){this.target.hide=!this.target.hide,this.panelCtrl.refresh()},a.prototype.toggleCollapse=function(a){if(this.canCollapse){this.panelCtrl.__collapsedQueryCache||(this.panelCtrl.__collapsedQueryCache={}),a?this.collapsed=this.panelCtrl.__collapsedQueryCache[this.target.refId]!==!1:(this.collapsed=!this.collapsed,this.panelCtrl.__collapsedQueryCache[this.target.refId]=this.collapsed);try{this.collapsedText=this.queryCtrl.getCollapsedText()}catch(a){var b=a.message||a.toString();this.collapsedText="Error: "+b}}},a.prototype.toggleEditorMode=function(){this.canCollapse&&this.collapsed&&(this.collapsed=!1),this.queryCtrl.toggleEditorMode()},a.prototype.removeQuery=function(){this.panelCtrl.__collapsedQueryCache&&delete this.panelCtrl.__collapsedQueryCache[this.target.refId],this.panelCtrl.removeQuery(this.target)},a.prototype.duplicateQuery=function(){var a=d.default.copy(this.target);this.panelCtrl.addQuery(a)},a.prototype.moveQuery=function(a){this.panelCtrl.moveQuery(this.target,a)},a}(),a("QueryRowCtrl",f),e.directive("queryEditorRow",c)}}});