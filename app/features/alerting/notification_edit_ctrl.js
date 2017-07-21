/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/core"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b,d,e,f){var g=this;this.$routeParams=a,this.backendSrv=b,this.$location=d,this.$templateCache=e,this.testSeverity="critical",this.defaults={type:"email",settings:{httpMethod:"POST",autoResolve:!0,uploadImage:!0},isDefault:!1},this.navModel=f.getAlertingNav(),this.backendSrv.get("/api/alert-notifiers").then(function(a){g.notifiers=a;for(var b=0,d=g.notifiers;b<d.length;b++){var e=d[b];g.$templateCache.put(g.getNotifierTemplateId(e.type),e.optionsTemplate)}return g.$routeParams.id?g.backendSrv.get("/api/alert-notifications/"+g.$routeParams.id).then(function(a){return a}):c.default.defaults(g.model,g.defaults)}).then(function(a){g.model=a,g.notifierTemplateId=g.getNotifierTemplateId(g.model.type)})}return a.$inject=["$routeParams","backendSrv","$location","$templateCache","navModelSrv"],a.prototype.save=function(){var a=this;this.theForm.$valid&&(this.model.id?this.backendSrv.put("/api/alert-notifications/"+this.model.id,this.model).then(function(b){a.model=b,d.appEvents.emit("alert-success",["Notification updated",""])}):this.backendSrv.post("/api/alert-notifications",this.model).then(function(b){d.appEvents.emit("alert-success",["Notification created",""]),a.$location.path("alerting/notifications")}))},a.prototype.getNotifierTemplateId=function(a){return"notifier-options-"+a},a.prototype.typeChanged=function(){this.model.settings={},this.notifierTemplateId=this.getNotifierTemplateId(this.model.type)},a.prototype.testNotification=function(){if(this.theForm.$valid){var a={name:this.model.name,type:this.model.type,settings:this.model.settings};this.backendSrv.post("/api/alert-notifications/test",a).then(function(a){d.appEvents.emit("alert-success",["Test notification sent",""])})}},a}(),a("AlertNotificationEditCtrl",e),d.coreModule.controller("AlertNotificationEditCtrl",e)}}});