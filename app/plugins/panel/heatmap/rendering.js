/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","jquery","moment","app/core/utils/kbn","app/core/core","app/core/utils/ticks","d3","./heatmap_tooltip","./heatmap_data_converter"],function(a,b){"use strict";function c(a,b,c,y){function z(){try{var a=y.height||oa.height||y.row.height;return g.default.isString(a)&&(a=parseInt(a.replace("px",""),10)),a-=5,a-=oa.title?24:9,Ha.css("height",a+"px"),!0}catch(a){return!1}}function A(a){var b=a.selectAll(".axis-y text").nodes(),c=g.default.max(g.default.map(b,function(a){var b=h.default(a);return b.outerWidth()}));return c}function B(a){var b=a.select(".axis-x line");if(b.empty())return 30;var c=parseFloat(a.select(".axis-x line").attr("y2")),d=parseFloat(a.attr("height"));return d-c}function C(){a.xScale=ta=m.default.scaleTime().domain([na.from,na.to]).range([0,ua]);var b,c=ua/t,e=d(c,na.from,na.to),f=y.dashboard.getTimezone();b="utc"===f?m.default.utcFormat(e):m.default.timeFormat(e);var g=m.default.axisBottom(ta).ticks(c).tickFormat(b).tickPadding(v).tickSize(va),h=La.top,i=ya;pa.append("g").attr("class","axis axis-x").attr("transform","translate("+i+","+h+")").call(g),pa.select(".axis-x").select(".domain").remove()}function D(){var b=Math.ceil(va/u),c=l.tickStep(ma.heatmapStats.min,ma.heatmapStats.max,b),d=E(ma.heatmapStats.min,ma.heatmapStats.max,c),e=d.y_min,h=d.y_max;e=null!==oa.yAxis.min?oa.yAxis.min:e,h=null!==oa.yAxis.max?oa.yAxis.max:h,c=l.tickStep(e,h,b),b=Math.ceil((h-e)/c);var i=f(c),j=null===oa.yAxis.decimals?i:oa.yAxis.decimals,k=l.getFlotTickSize(e,h,b,i),n=l.getScaledDecimals(j,k);y.decimals=j,y.scaledDecimals=n,g.default.isEmpty(ma.buckets)&&(h=1,e=-1,b=3,j=1),ma.yAxis={min:e,max:h,ticks:b},a.yScale=sa=m.default.scaleLinear().domain([e,h]).range([va,0]);var o=m.default.axisLeft(sa).ticks(b).tickFormat(K(j,n)).tickSizeInner(0-qa).tickSizeOuter(0).tickPadding(w);pa.append("g").attr("class","axis axis-y").call(o);var p=La.top,q=A(pa)+w;pa.select(".axis-y").attr("transform","translate("+q+","+p+")"),pa.select(".axis-y").select(".domain").remove()}function E(a,b,c){var d,e,f=(b*(Ma-1)-a*(Ma-1))/2;return 0===c?(e=b*Ma,d=a-a*(Ma-1),c=(e-d)/2):(e=Math.ceil((b+f)/c)*c,d=Math.floor((a-f)/c)*c),a>=0&&d<0&&(d=0),{y_min:d,y_max:e}}function F(){var b=oa.yAxis.logBase,c=G(ma.heatmapStats.minLog,ma.heatmapStats.max,b),d=c.y_min,e=c.y_max;d=null!==oa.yAxis.min?I(oa.yAxis.min,b):d,e=null!==oa.yAxis.max?H(oa.yAxis.max,b):e,g.default.isEmpty(ma.buckets)&&(e=Math.pow(b,2),d=1),a.yScale=sa=m.default.scaleLog().base(oa.yAxis.logBase).domain([d,e]).range([va,0]);var h=sa.domain(),i=J(h,b),j=f(d),k=oa.yAxis.decimals||j,n=l.getFlotTickSize(d,e,i.length,j),o=l.getScaledDecimals(k,n);y.decimals=k,y.scaledDecimals=o,ma.yAxis={min:d,max:e,ticks:i.length};var p=m.default.axisLeft(sa).tickValues(i).tickFormat(K(k,o)).tickSizeInner(0-qa).tickSizeOuter(0).tickPadding(w);pa.append("g").attr("class","axis axis-y").call(p);var q=La.top,r=A(pa)+w;pa.select(".axis-y").attr("transform","translate("+r+","+q+")"),d<1&&pa.select(".axis-y").select(".tick text").text("0"),pa.select(".axis-y").select(".domain").remove()}function G(a,b,c){var d,e;return d=ma.heatmapStats.minLog,d=ma.heatmapStats.minLog>1||!ma.heatmapStats.minLog?1:I(ma.heatmapStats.minLog,c),e=H(ma.heatmapStats.max,c),{y_min:d,y_max:e}}function H(a,b){return Math.pow(b,Math.ceil(e(a,b)))}function I(a,b){return Math.pow(b,Math.floor(e(a,b)))}function J(a,b){var c=a[0],d=a[1],f=[];if(c<1)for(var g=Math.floor(e(c,b)),h=g;h<0;h++){var i=Math.pow(b,h);f.push(i)}for(var j=Math.ceil(e(d,b)),h=0;h<=j;h++){var i=Math.pow(b,h);f.push(i)}return f}function K(a,b){void 0===b&&(b=null);var c=oa.yAxis.format;return function(d){return j.default.valueFormats[c](d,a,b)}}function L(){pa.select(".axis-y").selectAll(".tick line").attr("x2",ua)}function M(){va=ra-La.top-La.bottom,wa=La.top,xa=wa+va,1===oa.yAxis.logBase?D():F(),ya=A(pa)+w,ua=qa-ya-La.right,L(),C(),za=B(pa),oa.yAxis.show||pa.select(".axis-y").selectAll("line").style("opacity",0),oa.xAxis.show||pa.select(".axis-x").selectAll("line").style("opacity",0)}function N(){var a=Ha[0];qa=Math.floor(Ha.width())-Ka.right,ra=Math.floor(Ha.height())-Ka.bottom,Aa=null!==oa.cards.cardPadding?oa.cards.cardPadding:q,Ba=null!==oa.cards.cardRound?oa.cards.cardRound:r,pa&&pa.remove(),pa=m.default.select(a).append("svg").attr("width",qa).attr("height",ra)}function O(){if(N(),M(),1!==oa.yAxis.logBase){var a=oa.yAxis.logBase,b=sa.domain(),c=J(b,a);ma.buckets=o.mergeZeroBuckets(ma.buckets,g.default.min(c))}var d=o.convertToCards(ma.buckets),e=m.default.max(d,function(a){return a.count});Ea=R(e),S(e),T();var f=pa.selectAll(".heatmap-card").data(d);f.append("title"),f=f.enter().append("rect").attr("x",U).attr("width",V).attr("y",W).attr("height",X).attr("rx",Ba).attr("ry",Ba).attr("class","bordered heatmap-card").style("fill",Y).style("stroke",Y).style("stroke-width",0).style("opacity",Z);var h=Ha.find(".heatmap-card");h.on("mouseenter",function(a){Ia.mouseOverBucket=!0,P(a)}).on("mouseleave",function(a){Ia.mouseOverBucket=!1,Q(a)})}function P(a){var b=m.default.select(a.target).style("fill"),c=m.default.color(b).darker(2),d=m.default.color(b).brighter(4),e=m.default.select(a.target);Ia.originalFillColor=b,e.style("fill",c).style("stroke",d).style("stroke-width",1)}function Q(a){m.default.select(a.target).style("fill",Ia.originalFillColor).style("stroke",Ia.originalFillColor).style("stroke-width",0)}function R(a){var b=g.default.find(y.colorSchemes,{value:oa.color.colorScheme}),c=m.default[b.value],d="always"===b.invert||"dark"===b.invert&&!k.contextSrv.user.lightTheme,e=d?a:0,f=d?0:a;return m.default.scaleSequential(c).domain([e,f])}function S(a){"linear"===oa.color.colorScale?Fa=m.default.scaleLinear().domain([0,a]).range([0,1]):"sqrt"===oa.color.colorScale&&(Fa=m.default.scalePow().exponent(oa.color.exponent).domain([0,a]).range([0,1]))}function T(){var a=Math.floor(ta(ma.xBucketSize)-ta(0)),b=Math.floor(sa(sa.invert(0)-ma.yBucketSize));if(1!==oa.yAxis.logBase){var c=oa.yAxis.logBase,d=ma.yBucketSize||1;b=Math.floor((sa(1)-sa(c))/d)}Ca=a-2*Aa,Da=b?b-2*Aa:0}function U(a){var b;return b=ta(a.x)<0?ya+Aa:ta(a.x)+ya+Aa}function V(a){var b;if(ta(a.x)<0){var c=ta(a.x)+Ca;b=c>0?c:0}else b=ta(a.x)+Ca>ua?ua-ta(a.x)-Aa:Ca;return b=Math.max(b,p)}function W(a){var b=sa(a.y)+wa-Da-Aa;return 1!==oa.yAxis.logBase&&0===a.y?b=xa-Da-Aa:b<wa&&(b=wa),b}function X(a){var b=sa(a.y)+wa-Da-Aa,c=Da;return 1!==oa.yAxis.logBase&&0===a.y?Da:(b<wa?c=sa(a.y)-Aa:sa(a.y)>xa?c=xa-b:b+Da>xa&&(c=xa-b),c=Math.min(c,va),c=Math.max(c,p))}function Y(a){return"opacity"===oa.color.mode?oa.color.cardColor:Ea(a.count)}function Z(a){return"opacity"===oa.color.mode?Fa(a.count):1}function $(a){Ja.active=!0,Ja.x1=a.offsetX,Ga=function(){_()},h.default(document).one("mouseup",Ga)}function _(){h.default(document).unbind("mouseup",Ga),Ga=null,Ja.active=!1;var a=Math.abs(Ja.x2-Ja.x1);if(Ja.x2>=0&&a>x){var b=ta.invert(Math.min(Ja.x1,Ja.x2)-ya),c=ta.invert(Math.max(Ja.x1,Ja.x2)-ya);y.timeSrv.setTime({from:i.default.utc(b),to:i.default.utc(c)})}fa()}function aa(){k.appEvents.emit("graph-hover-clear"),ia()}function ba(a){pa&&(Ja.active?(ia(),Ia.destroy(),Ja.x2=da(a.offsetX),ea(Ja.x1,Ja.x2)):(ca(a),ga(a.offsetX),Ia.show(a,ma)))}function ca(a){var b=ta.invert(a.offsetX-ya).valueOf(),c=sa.invert(a.offsetY),d={pageX:a.pageX,pageY:a.pageY,x:b,x1:b,y:c,y1:c,panelRelY:null};d.panelRelY=Math.max(a.offsetY/ra,.001),k.appEvents.emit("graph-hover",{pos:d,panel:oa})}function da(a){return a=Math.max(a,ya),a=Math.min(a,ua+ya)}function ea(a,b){if(pa){pa.selectAll(".heatmap-selection").remove();var c=Math.min(a,b),d=Math.abs(a-b);d>x&&pa.append("rect").attr("class","heatmap-selection").attr("x",c).attr("width",d).attr("y",wa).attr("height",va)}}function fa(){Ja.x1=-1,Ja.x2=-1,pa&&pa.selectAll(".heatmap-selection").remove()}function ga(a){if(pa){pa.selectAll(".heatmap-crosshair").remove();var b=a;b=Math.max(b,ya),b=Math.min(b,ua+ya),pa.append("g").attr("class","heatmap-crosshair").attr("transform","translate("+b+",0)").append("line").attr("x1",1).attr("y1",wa).attr("x2",1).attr("y2",xa).attr("stroke-width",1)}}function ha(a){if(pa&&0!==y.dashboard.graphTooltip){var b=ta(a.x)+ya;ga(b)}}function ia(){pa&&pa.selectAll(".heatmap-crosshair").remove()}function ja(){m.default.select("#heatmap-color-legend").selectAll("rect").remove();var a=m.default.select("#heatmap-color-legend"),b=Math.floor(h.default(m.default.select("#heatmap-color-legend").node()).outerWidth()),c=m.default.select("#heatmap-color-legend").attr("height"),d=R(b),e=2,f=m.default.range(0,b,e),g=a.selectAll(".heatmap-color-legend-rect").data(f);g.enter().append("rect").attr("x",function(a){return a}).attr("y",0).attr("width",e+1).attr("height",c).attr("stroke-width",0).attr("fill",function(a){return d(a)})}function ka(){m.default.select("#heatmap-opacity-legend").selectAll("rect").remove();var a,b=m.default.select("#heatmap-opacity-legend"),c=Math.floor(h.default(m.default.select("#heatmap-opacity-legend").node()).outerWidth()),d=m.default.select("#heatmap-opacity-legend").attr("height");"linear"===oa.color.colorScale?a=m.default.scaleLinear().domain([0,c]).range([0,1]):"sqrt"===oa.color.colorScale&&(a=m.default.scalePow().exponent(oa.color.exponent).domain([0,c]).range([0,1]));var e=1,f=m.default.range(0,c,e),g=b.selectAll(".heatmap-opacity-legend-rect").data(f);g.enter().append("rect").attr("x",function(a){return a}).attr("y",0).attr("width",e).attr("height",d).attr("stroke-width",0).attr("fill",oa.color.cardColor).style("opacity",function(b){return a(b)})}function la(){if(ma=y.data,oa=y.panel,na=y.range,m.default.select("#heatmap-color-legend").empty()||ja(),m.default.select("#heatmap-opacity-legend").empty()||ka(),z()&&ma){if(g.default.isEmpty(ma.buckets))return N(),void M();O(),a.yAxisWidth=ya,a.xAxisHeight=za,a.chartHeight=va,a.chartWidth=ua,a.chartTop=wa}}var ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,Aa,Ba,Ca,Da,Ea,Fa,Ga,Ha=b.find(".heatmap-panel"),Ia=new n.HeatmapTooltip(Ha,a),Ja={active:!1,x1:-1,x2:-1},Ka={left:0,right:0,top:0,bottom:0},La={left:25,right:15,top:10,bottom:20},Ma=s;y.events.on("render",function(){la(),y.renderingCompleted()}),k.appEvents.on("graph-hover",function(a){ha(a.pos)},a),k.appEvents.on("graph-hover-clear",function(){ia()},a),Ha.on("mousedown",$),Ha.on("mousemove",ba),Ha.on("mouseleave",aa)}function d(a,b,c){if(b&&c&&a){var d=c-b,e=d/a/1e3,f=864e5,g=31536e6;return e<=45?"%H:%M:%S":e<=7200||d<=f?"%H:%M":e<=8e4?"%m/%d %H:%M":e<=2419200||d<=g?"%m/%d":"%Y-%m"}return"%H:%M"}function e(a,b){return Math.log(a)/Math.log(b)}function f(a){var b=a.toString(),c=b.indexOf(".");return c===-1?0:b.length-c-1}b&&b.id;a("default",c);var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;return{setters:[function(a){g=a},function(a){h=a},function(a){i=a},function(a){j=a},function(a){k=a},function(a){l=a},function(a){m=a},function(a){n=a},function(a){o=a}],execute:function(){p=1,q=1,r=0,s=1.2,t=100,u=50,v=10,w=5,x=2}}});