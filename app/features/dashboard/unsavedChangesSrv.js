/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash"],function(a,b){"use strict";var c=a.module("grafana.services");c.service("unsavedChangesSrv",["$rootScope","$q","$location","$timeout","contextSrv","dashboardSrv","$window",function(c,d,e,f,g,h,i){function j(a,b,c){var d=this;this.current=a,this.originalPath=e.path(),this.scope=b,b.onAppEvent("dashboard-saved",function(){this.original=this.current.getSaveModelClone(),this.originalPath=e.path()}.bind(this)),i.onbeforeunload=function(){if(!d.ignoreChanges())return d.hasChanges()?"There are unsaved changes to this dashboard":void 0},b.$on("$locationChangeStart",function(a,b){return d.originalPath===e.path()||(!!d.ignoreChanges()||void(d.hasChanges()&&(a.preventDefault(),d.next=b,f(function(){d.open_modal()}))))}),c?f(function(){d.original=a.getSaveModelClone()},c):d.original=a.getSaveModelClone()}var k=j.prototype;k.ignoreChanges=function(){if(!this.original)return!0;if(!g.isEditor)return!0;if(!this.current||!this.current.meta)return!0;var a=this.current.meta;return!a.canSave||a.fromScript||a.fromFile},k.cleanDashboardFromIgnoredChanges=function(a){a.time=0,a.refresh=0,a.schemaVersion=0,a.editMode=!1,a.rows=b.filter(a.rows,function(a){return!a.repeatRowId&&(a.panels=b.filter(a.panels,function(a){return!a.repeatPanelId&&(a.scopedVars=null,a.span=null,a.legend&&(delete a.legend.sort,delete a.legend.sortDesc),!0)}),a.collapse=!1,!0)}),b.each(a.templating.list,function(a){a.current=null,a.options=null,a.filters=null})},k.hasChanges=function(){var c=this.current.getSaveModelClone(),d=this.original;this.cleanDashboardFromIgnoredChanges(c),this.cleanDashboardFromIgnoredChanges(d);var e=b.find(c.nav,{type:"timepicker"}),f=b.find(d.nav,{type:"timepicker"});e&&f&&(e.now=f.now);var g=a.toJson(c),h=a.toJson(d);return g!==h},k.discardChanges=function(){this.original=null,this.gotoNext()},k.open_modal=function(){c.appEvent("show-modal",{templateHtml:'<unsaved-changes-modal dismiss="dismiss()"></unsaved-changes-modal>',modalClass:"modal--narrow confirm-modal"})},k.saveChanges=function(){var a=this,b=c.$on("dashboard-saved",function(){b(),f(function(){a.gotoNext()})});c.appEvent("save-dashboard")},k.gotoNext=function(){var a=e.absUrl().length-e.url().length,b=this.next.substring(a);e.url(b)},this.Tracker=j,this.init=function(a,b){return this.tracker=new j(a,b,1e3),this.tracker}}])});