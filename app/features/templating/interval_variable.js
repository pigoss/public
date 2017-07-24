/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/utils/kbn","./variable"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c,d){this.model=a,this.timeSrv=b,this.templateSrv=c,this.variableSrv=d,this.defaults={type:"interval",name:"",hide:0,label:"",refresh:2,options:[],current:{},query:"1m,10m,30m,1h,6h,12h,1d,7d,14d,30d",auto:!1,auto_min:"10s",auto_count:30},e.assignModelProperties(this,a,this.defaults),this.refresh=2}return a.$inject=["model","timeSrv","templateSrv","variableSrv"],a.prototype.getSaveModel=function(){return e.assignModelProperties(this.model,this,this.defaults),this.model},a.prototype.setValue=function(a){return this.updateAutoValue(),this.variableSrv.setOptionAsCurrent(this,a)},a.prototype.updateAutoValue=function(){if(this.auto){this.options.length&&"auto"!==this.options[0].text&&this.options.unshift({text:"auto",value:"$__auto_interval"});var a=d.default.calculateInterval(this.timeSrv.timeRange(),this.auto_count,this.auto_min?">"+this.auto_min:null);this.templateSrv.setGrafanaVariable("$__auto_interval",a.interval)}},a.prototype.updateOptions=function(){return this.options=c.default.map(this.query.match(/(["'])(.*?)\1|\w+/g),function(a){return a=a.replace(/["']+/g,""),{text:a.trim(),value:a.trim()}}),this.updateAutoValue(),this.variableSrv.validateVariableSelectionState(this)},a.prototype.dependsOn=function(a){return!1},a.prototype.setValueFromUrl=function(a){return this.updateAutoValue(),this.variableSrv.setOptionFromUrl(this,a)},a.prototype.getValueForUrl=function(){return this.current.value},a}(),a("IntervalVariable",f),e.variableTypes.interval={name:"Interval",ctor:f,description:"Define a timespan interval (ex 1m, 1h, 1d)"}}}});