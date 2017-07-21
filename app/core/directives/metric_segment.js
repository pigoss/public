/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["lodash","jquery","../core_module"],function(a,b,c){"use strict";c.default.directive("metricSegment",["$compile","$sce",function(c,d){var e='<input type="text" data-provide="typeahead"  class="gf-form-input input-medium" spellcheck="false" style="display:none"></input>',f='<a class="gf-form-label" ng-class="segment.cssClass" tabindex="1" give-focus="segment.focus" ng-bind-html="segment.html"></a>',g='<a class="gf-form-input gf-form-input--dropdown" ng-class="segment.cssClass" tabindex="1" give-focus="segment.focus" ng-bind-html="segment.html"></a>';return{scope:{segment:"=",getOptions:"&",onChange:"&"},link:function(h,i){var j=b(e),k=h.segment,l=b(k.selectMode?g:f),m=null,n=null,o=!0;j.appendTo(i),l.appendTo(i),h.updateVariableValue=function(b){""!==b&&k.value!==b&&h.$apply(function(){var c=a.find(h.altSegments,{value:b});c?(k.value=c.value,k.html=c.html||c.value,k.fake=!1,k.expandable=c.expandable):"false"!==k.custom&&(k.value=b,k.html=d.trustAsHtml(b),k.expandable=!0,k.fake=!1),h.onChange()})},h.switchToLink=function(a){o&&!a||(clearTimeout(n),n=null,o=!0,j.hide(),l.show(),h.updateVariableValue(j.val()))},h.inputBlur=function(){n=setTimeout(h.switchToLink,200)},h.source=function(b,c){h.$apply(function(){h.getOptions({$query:b}).then(function(b){h.altSegments=b,m=a.map(h.altSegments,function(a){return a.value}),"false"!==k.custom&&(k.fake||a.indexOf(m,k.value)!==-1||m.unshift(k.value)),c(m)})})},h.updater=function(a){return a===k.value?(clearTimeout(n),j.focus(),a):(j.val(a),h.switchToLink(!0),a)},h.matcher=function(a){var b=this.query;"/"===b[0]&&(b=b.substring(1)),"/"===b[b.length-1]&&(b=b.substring(0,b.length-1));try{return a.toLowerCase().match(b.toLowerCase())}catch(a){return!1}},j.attr("data-provide","typeahead"),j.typeahead({source:h.source,minLength:0,items:1e4,updater:h.updater,matcher:h.matcher});var p=j.data("typeahead");p.lookup=function(){this.query=this.$element.val()||"";var a=this.source(this.query,b.proxy(this.process,this));return a?this.process(a):a},l.keydown(function(a){40!==a.keyCode&&13!==a.keyCode||l.click()}),l.click(function(){m=null,j.css("width",Math.max(l.width(),80)+16+"px"),l.hide(),j.show(),j.focus(),o=!1;var a=j.data("typeahead");a&&(j.val(""),a.lookup())}),j.blur(h.inputBlur),c(i.contents())(h)}}}]),c.default.directive("metricSegmentModel",["uiSegmentSrv","$q",function(b,c){return{template:'<metric-segment segment="segment" get-options="getOptionsInternal()" on-change="onSegmentChange()"></metric-segment>',restrict:"E",scope:{property:"=",options:"=",getOptions:"&",onChange:"&"},link:{pre:function(d,e,f){var g;d.valueToSegment=function(c){var e=a.find(d.options,{value:c}),g={cssClass:f.cssClass,custom:f.custom,value:e?e.text:c,selectMode:f.selectMode};return b.newSegment(g)},d.getOptionsInternal=function(){return d.options?(g=d.options,c.when(a.map(d.options,function(a){return{value:a.text}}))):d.getOptions().then(function(b){return g=b,a.map(b,function(a){return a.html?a:{value:a.text}})})},d.onSegmentChange=function(){if(g){var b=a.find(g,{text:d.segment.value});b&&b.value!==d.property?d.property=b.value:"false"!==f.custom&&(d.property=d.segment.value)}else d.property=d.segment.value;d.$$postDigest(function(){d.$apply(function(){d.onChange()})})},d.segment=d.valueToSegment(d.property)}}}}])});