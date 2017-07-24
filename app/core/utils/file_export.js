/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","moment"],function(a,b){"use strict";function c(a,b){void 0===b&&(b=i);var c="Series;Time;Value\n";g.default.each(a,function(a){g.default.each(a.datapoints,function(d){c+=a.alias+";"+h.default(d[1]).format(b)+";"+d[0]+"\n"})}),f(c,"grafana_data_export.csv")}function d(a,b){void 0===b&&(b=i);var c="Time;";g.default.each(a,function(a){c+=a.alias+";"}),c=c.substring(0,c.length-1),c+="\n";var d=[[]],e=1;g.default.each(a,function(a){var c=0;d.push([]),g.default.each(a.datapoints,function(a){d[0][c]=h.default(a[1]).format(b),d[e][c]=a[0],c++}),e++});for(var j=0;j<d[0].length;j++){c+=d[0][j]+";";for(var k=1;k<d.length;k++)c+=d[k][j]+";";c=c.substring(0,c.length-1),c+="\n"}f(c,"grafana_data_export.csv")}function e(a){var b="";g.default.each(a.columns,function(a){b+=(a.title||a.text)+";"}),b+="\n",g.default.each(a.rows,function(a){g.default.each(a,function(a){b+=a+";"}),b+="\n"}),f(b,"grafana_data_export.csv")}function f(a,b){var c=new Blob([a],{type:"text/csv;charset=utf-8"});window.saveAs(c,b)}b&&b.id;a("exportSeriesListToCsv",c),a("exportSeriesListToCsvColumns",d),a("exportTableDataToCsv",e),a("saveSaveBlob",f);var g,h,i;return{setters:[function(a){g=a},function(a){h=a}],execute:function(){i="YYYY-MM-DDTHH:mm:ssZ"}}});