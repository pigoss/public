/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","angular"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b,c){this.backendSrv=b,this.$q=c,this.id=a.id}return a.$inject=["instanceSettings","backendSrv","$q"],a.prototype.query=function(a){var b=this,e=c.default.filter(a.targets,function(a){return a.hide!==!0}).map(function(c){return{refId:c.refId,scenarioId:c.scenarioId,intervalMs:a.intervalMs,maxDataPoints:a.maxDataPoints,stringInput:c.stringInput,jsonInput:d.default.fromJson(c.jsonInput),datasourceId:b.id}});return 0===e.length?this.$q.when({data:[]}):this.backendSrv.post("/api/tsdb/query",{from:a.range.from.valueOf().toString(),to:a.range.to.valueOf().toString(),queries:e}).then(function(a){var b=[];return a.results&&c.default.forEach(a.results,function(a){for(var c=0,d=a.series;c<d.length;c++){var e=d[c];b.push({target:e.name,datapoints:e.points})}}),{data:b}})},a.prototype.annotationQuery=function(a){return this.backendSrv.get("/api/annotations",{from:a.range.from.valueOf(),to:a.range.to.valueOf(),limit:a.limit,type:a.type})},a}(),a("TestDataDatasource",e)}}});