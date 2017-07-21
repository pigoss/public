/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","../../../core/utils/flatten","../../../core/time_series2","../../../core/table_model"],function(a,b){"use strict";function c(a,b){var c=new g.default;if(!a||0===a.length)return c;var d=h[b.transform];if(!d)throw{message:"Transformer "+b.transform+" not found"};return d.transform(a,b,c),c}b&&b.id;a("transformDataToTable",c);var d,e,f,g,h;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){h={},a("transformers",h),h.timeseries_to_rows={description:"Time series to rows",getColumns:function(){return[]},transform:function(a,b,c){c.columns=[{text:"Time",type:"date"},{text:"Metric"},{text:"Value"}];for(var d=0;d<a.length;d++)for(var e=a[d],f=0;f<e.datapoints.length;f++){var g=e.datapoints[f];c.rows.push([g[1],e.target,g[0]])}}},h.timeseries_to_columns={description:"Time series to columns",getColumns:function(){return[]},transform:function(a,b,c){c.columns.push({text:"Time",type:"date"});for(var d={},e=0;e<a.length;e++){var f=a[e];c.columns.push({text:f.target});for(var g=0;g<f.datapoints.length;g++){var h=f.datapoints[g],i=h[1].toString();d[i]?d[i][e]=h[0]:(d[i]={time:h[1]},d[i][e]=h[0])}}for(var j in d){for(var k=d[j],l=[k.time],e=0;e<a.length;e++){var m=k[e];l.push(m)}c.rows.push(l)}}},h.timeseries_aggregations={description:"Time series aggregations",getColumns:function(){return[{text:"Avg",value:"avg"},{text:"Min",value:"min"},{text:"Max",value:"max"},{text:"Total",value:"total"},{text:"Current",value:"current"},{text:"Count",value:"count"}]},transform:function(a,b,c){var d,e;for(c.columns.push({text:"Metric"}),d=0;d<b.columns.length;d++)c.columns.push({text:b.columns[d].text});for(d=0;d<a.length;d++){var g=new f.default({datapoints:a[d].datapoints,alias:a[d].target});g.getFlotPairs("connected");var h=[g.alias];for(e=0;e<b.columns.length;e++)h.push(g.stats[b.columns[e].value]);c.rows.push(h)}}},h.annotations={description:"Annotations",getColumns:function(){return[]},transform:function(a,b,c){if(c.columns.push({text:"Time",type:"date"}),c.columns.push({text:"Title"}),c.columns.push({text:"Text"}),c.columns.push({text:"Tags"}),a&&a.annotations&&0!==a.annotations.length)for(var d=0;d<a.annotations.length;d++){var e=a.annotations[d];c.rows.push([e.min,e.title,e.text,e.tags])}}},h.table={description:"Table",getColumns:function(a){if(!a||0===a.length)return[]},transform:function(a,b,c){if(a&&0!==a.length){if("table"!==a[0].type)throw{message:"Query result is not in table format, try using another transform."};c.columns=a[0].columns,c.rows=a[0].rows}}},h.json={description:"JSON Data",getColumns:function(a){if(!a||0===a.length)return[];for(var b={},c=0;c<a.length;c++){var f=a[c];if("docs"===f.type)for(var g=Math.min(f.datapoints.length,100),h=0;h<g;h++){var i=f.datapoints[h],j=e.default(i,null);for(var k in j)b[k]=!0}}return d.default.map(b,function(a,b){return{text:b,value:b}})},transform:function(a,b,c){var f,g,h;for(f=0;f<b.columns.length;f++)c.columns.push({text:b.columns[f].text});for(0===c.columns.length&&c.columns.push({text:"JSON"}),f=0;f<a.length;f++){var i=a[f];for(g=0;g<i.datapoints.length;g++){var j=i.datapoints[g],k=[];if(d.default.isObject(j)&&b.columns.length>0){var l=e.default(j,null);for(h=0;h<b.columns.length;h++)k.push(l[b.columns[h].value])}else k.push(JSON.stringify(j));c.rows.push(k)}}}}}}});