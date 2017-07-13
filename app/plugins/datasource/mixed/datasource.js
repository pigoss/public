/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b){this.$q=a,this.datasourceSrv=b}return a.$inject=["$q","datasourceSrv"],a.prototype.query=function(a){var b=this,e=d.default.groupBy(a.targets,"datasource"),f=d.default.map(e,function(d){var e=d[0].datasource;return"-- Mixed --"===e?b.$q([]):b.datasourceSrv.get(e).then(function(b){var e=c.default.copy(a);return e.targets=d,b.query(e)})});return this.$q.all(f).then(function(a){return{data:d.default.flatten(d.default.map(a,"data"))}})},a}(),a("MixedDatasource",e),a("Datasource",e)}}});