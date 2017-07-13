/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","moment","../../../features/alerting/alert_def","app/plugins/sdk","app/core/utils/datemath"],function(a,b){"use strict";var c,d,e,f,g,h,i=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){h=function(a){function b(b,d,e,f,g,h){var i=a.call(this,b,d)||this;i.$location=e,i.backendSrv=f,i.timeSrv=g,i.templateSrv=h,i.showOptions=[{text:"Current state",value:"current"},{text:"Recent state changes",value:"changes"}],i.sortOrderOptions=[{text:"Alphabetical (asc)",value:1},{text:"Alphabetical (desc)",value:2},{text:"Importance",value:3}],i.stateFilter={},i.currentAlerts=[],i.alertHistory=[],i.panelDefaults={show:"current",limit:10,stateFilter:[],onlyAlertsOnDashboard:!1,sortOrder:1},c.default.defaults(i.panel,i.panelDefaults),i.events.on("init-edit-mode",i.onInitEditMode.bind(i)),i.events.on("render",i.onRender.bind(i)),i.events.on("refresh",i.onRender.bind(i));for(var j in i.panel.stateFilter)i.stateFilter[i.panel.stateFilter[j]]=!0;return i}return i(b,a),b.$inject=["$scope","$injector","$location","backendSrv","timeSrv","templateSrv"],b.prototype.sortResult=function(a){if(3===this.panel.sortOrder)return c.default.sortBy(a,function(a){return e.default.alertStateSortScore[a.state]});var b=c.default.sortBy(a,function(a){return a.name.toLowerCase()});return 2===this.panel.sortOrder&&b.reverse(),b},b.prototype.updateStateFilter=function(){var a=[];for(var b in this.stateFilter)this.stateFilter[b]&&a.push(b);this.panel.stateFilter=a,this.onRender()},b.prototype.onRender=function(){this.contentHeight="max-height: "+this.height+"px;","current"===this.panel.show&&this.getCurrentAlertState(),"changes"===this.panel.show&&this.getStateChanges()},b.prototype.getStateChanges=function(){var a=this,b={limit:this.panel.limit,type:"alert",newState:this.panel.stateFilter};this.panel.onlyAlertsOnDashboard&&(b.dashboardId=this.dashboard.id),b.from=1e3*g.parse(this.dashboard.time.from).unix(),b.to=1e3*g.parse(this.dashboard.time.to).unix(),this.backendSrv.get("/api/annotations",b).then(function(b){a.alertHistory=c.default.map(b,function(a){return a.time=d.default(a.time).format("MMM D, YYYY HH:mm:ss"),a.stateModel=e.default.getStateDisplayModel(a.newState),a.info=e.default.getAlertAnnotationInfo(a),a})})},b.prototype.getCurrentAlertState=function(){var a=this,b={state:this.panel.stateFilter};this.panel.onlyAlertsOnDashboard&&(b.dashboardId=this.dashboard.id),this.backendSrv.get("/api/alerts",b).then(function(b){a.currentAlerts=a.sortResult(c.default.map(b,function(a){return a.stateModel=e.default.getStateDisplayModel(a.state),a.newStateDateAgo=d.default(a.newStateDate).fromNow().replace(" ago",""),a}))})},b.prototype.onInitEditMode=function(){this.addEditorTab("Options","public/app/plugins/panel/alertlist/editor.html")},b.templateUrl="module.html",b}(f.PanelCtrl),a("AlertListPanel",h),a("PanelCtrl",h)}}});