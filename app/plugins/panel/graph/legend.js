/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","jquery","jquery.flot","jquery.flot.time"],function(a,b,c){"use strict";var d=a.module("grafana.directives");d.directive("graphLegend",["popoverSrv","$timeout",function(a,d){return{link:function(e,f){function g(a){return a.parents("[data-series-index]").data("series-index")}function h(b){if(!c(b.target).parents(".popover").length){var e=c(b.currentTarget).find(".fa-minus"),f=g(e),h=n[f];d(function(){a.show({element:e[0],position:"bottom center",template:"<gf-color-picker></gf-color-picker>",openOn:"hover",model:{series:h,toggleAxis:function(){r.toggleAxis(h)},colorSelected:function(a){r.changeSeriesColor(h,a)}}})})}}function i(a){var b=c(a.currentTarget),d=g(b),e=n[d],f=c(p.children("tbody")).scrollTop();r.toggleSeries(e,a),c(p.children("tbody")).scrollTop(f)}function j(a){var b=c(a.currentTarget),d=b.data("stat");return d!==s.legend.sort&&(s.legend.sortDesc=null),s.legend.sortDesc===!1?(s.legend.sort=null,s.legend.sortDesc=null,void l()):(s.legend.sortDesc=!s.legend.sortDesc,s.legend.sort=d,void l())}function k(a){if(!s.legend[a])return"";var b='<th class="pointer" data-stat="'+a+'">'+a;if(s.legend.sort===a){var c=s.legend.sortDesc?"fa fa-caret-down":"fa fa-caret-up";b+=' <span class="'+c+'"></span>'}return b+"</th>"}function l(){if(!r.panel.legend.show)return f.empty(),void(q=!0);q&&(f.append(p),p.on("click",".graph-legend-icon",h),p.on("click",".graph-legend-alias",i),p.on("click","th",j),q=!1),n=m,p.empty();var a=s.legend.rightSide&&s.legend.sideWidth?s.legend.sideWidth+"px":"";p.css("min-width",a),p.toggleClass("graph-legend-table",s.legend.alignAsTable===!0);var d;if(s.legend.alignAsTable){var e="<tr>";e+='<th colspan="2" style="text-align:left"></th>',s.legend.values&&(e+=k("min"),e+=k("max"),e+=k("avg"),e+=k("current"),e+=k("total")),e+="</tr>",d=c(e)}s.legend.sort&&(n=b.sortBy(n,function(a){return a.stats[s.legend.sort]}),s.legend.sortDesc&&(n=n.reverse()));var g=0,l=[];for(o=0;o<n.length;o++){var t=n[o];if(!t.hideFromLegend(s.legend)){var u='<div class="graph-legend-series';if(2===t.yaxis&&(u+=" graph-legend-series--right-y"),r.hiddenSeries[t.alias]&&(u+=" graph-legend-series-hidden"),u+='" data-series-index="'+o+'">',u+='<div class="graph-legend-icon">',u+='<i class="fa fa-minus pointer" style="color:'+t.color+'"></i>',u+="</div>",u+='<a class="graph-legend-alias pointer" title="'+b.escape(t.label)+'">'+b.escape(t.label)+"</a>",s.legend.values){var v=t.formatValue(t.stats.avg),w=t.formatValue(t.stats.current),x=t.formatValue(t.stats.min),y=t.formatValue(t.stats.max),z=t.formatValue(t.stats.total);s.legend.min&&(u+='<div class="graph-legend-value min">'+x+"</div>"),s.legend.max&&(u+='<div class="graph-legend-value max">'+y+"</div>"),s.legend.avg&&(u+='<div class="graph-legend-value avg">'+v+"</div>"),s.legend.current&&(u+='<div class="graph-legend-value current">'+w+"</div>"),s.legend.total&&(u+='<div class="graph-legend-value total">'+z+"</div>")}u+="</div>",l.push(c(u)),g++}}if(s.legend.alignAsTable){var A=r.height;s.legend.rightSide||(A/=2);var B=6,C=c("<tbody></tbody>");C.css("max-height",A-B),C.append(d),C.append(l),p.append(C)}else p.append(l)}var m,n,o,p=c('<section class="graph-legend"></section>'),q=!0,r=e.ctrl,s=r.panel;r.events.on("render",function(){m=r.seriesList,m&&l()})}}}])});