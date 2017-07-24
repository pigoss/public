/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","./variable"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a){this.model=a,this.defaults={type:"adhoc",name:"",label:"",hide:0,datasource:null,filters:[]},d.assignModelProperties(this,a,this.defaults)}return a.$inject=["model"],a.prototype.setValue=function(a){return Promise.resolve()},a.prototype.getSaveModel=function(){return d.assignModelProperties(this.model,this,this.defaults),this.model},a.prototype.updateOptions=function(){return Promise.resolve()},a.prototype.dependsOn=function(a){return!1},a.prototype.setValueFromUrl=function(a){var b=this;return c.default.isArray(a)||(a=[a]),this.filters=a.map(function(a){var c=a.split("|").map(function(a){return b.unescapeDelimiter(a)});return{key:c[0],operator:c[1],value:c[2]}}),Promise.resolve()},a.prototype.getValueForUrl=function(){var a=this;return this.filters.map(function(b){return[b.key,b.operator,b.value].map(function(b){return a.escapeDelimiter(b)}).join("|")})},a.prototype.escapeDelimiter=function(a){return a.replace("|","__gfp__")},a.prototype.unescapeDelimiter=function(a){return a.replace("__gfp__","|")},a.prototype.setFilters=function(a){this.filters=a},a}(),a("AdhocVariable",e),d.variableTypes.adhoc={name:"Ad hoc filters",ctor:e,description:"Add key/value filters on the fly"}}}});