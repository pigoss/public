/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./add_graphite_func","./func_editor","lodash","./gfunc","./parser","app/plugins/sdk","app/core/app_events"],function(a,b){"use strict";var c,d,e,f,g,h,i=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();b&&b.id;return{setters:[function(a){},function(a){},function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a}],execute:function(){h=function(a){function b(b,c,d,e){var f=a.call(this,b,c)||this;return f.uiSegmentSrv=d,f.templateSrv=e,f.target&&(f.target.target=f.target.target||"",f.parseTarget()),f}return i(b,a),b.$inject=["$scope","$injector","uiSegmentSrv","templateSrv"],b.prototype.toggleEditorMode=function(){this.target.textEditor=!this.target.textEditor,this.parseTarget()},b.prototype.parseTarget=function(){if(this.functions=[],this.segments=[],this.error=null,!this.target.textEditor){var a=new e.Parser(this.target.target),b=a.getAst();if(null===b)return void this.checkOtherSegments(0);if("error"===b.type)return this.error=b.message+" at position: "+b.pos,void(this.target.textEditor=!0);try{this.parseTargetRecursive(b,null,0)}catch(a){console.log("error parsing target:",a.message),this.error=a.message,this.target.textEditor=!0}this.checkOtherSegments(this.segments.length-1)}},b.prototype.addFunctionParameter=function(a,b,c,d){d&&(c=Math.max(c-1,0)),a.params[c]=b},b.prototype.parseTargetRecursive=function(a,b,e){var f=this;if(null===a)return null;switch(a.type){case"function":var g=d.default.createFuncInstance(a.name,{withDefaultParams:!1});c.default.each(a.params,function(a,b){f.parseTargetRecursive(a,g,b)}),g.updateText(),this.functions.push(g);break;case"series-ref":this.addFunctionParameter(b,a.value,e,this.segments.length>0);break;case"bool":case"string":case"number":if(e-1>=b.def.params.length)throw{message:"invalid number of parameters to method "+b.def.name};this.addFunctionParameter(b,a.value,e,!0);break;case"metric":if(this.segments.length>0){if(1!==a.segments.length)throw{message:"Multiple metric params not supported, use text editor."};this.addFunctionParameter(b,a.segments[0].value,e,!0);break}this.segments=c.default.map(a.segments,function(a){return f.uiSegmentSrv.newSegment(a)})}},b.prototype.getSegmentPathUpTo=function(a){var b=this.segments.slice(0,a);return c.default.reduce(b,function(a,b){return a?a+"."+b.value:b.value},"")},b.prototype.checkOtherSegments=function(a){var b=this;if(0===a)return void this.segments.push(this.uiSegmentSrv.newSelectMetric());var c=this.getSegmentPathUpTo(a+1);return""===c?Promise.resolve():this.datasource.metricFindQuery(c).then(function(d){if(0===d.length)""!==c&&(b.segments=b.segments.splice(0,a),b.segments.push(b.uiSegmentSrv.newSelectMetric()));else if(d[0].expandable){if(b.segments.length!==a)return b.checkOtherSegments(a+1);b.segments.push(b.uiSegmentSrv.newSelectMetric())}}).catch(function(a){g.default.emit("alert-error",["Error",a])})},b.prototype.setSegmentFocus=function(a){c.default.each(this.segments,function(b,c){b.focus=a===c})},b.prototype.wrapFunction=function(a,b){return b.render(a)},b.prototype.getAltSegments=function(a){var b=this,d=0===a?"*":this.getSegmentPathUpTo(a)+".*";return this.datasource.metricFindQuery(d).then(function(a){var d=c.default.map(a,function(a){return b.uiSegmentSrv.newSegment({value:a.text,expandable:a.expandable})});return 0===d.length?d:(c.default.each(b.templateSrv.variables,function(a){d.unshift(b.uiSegmentSrv.newSegment({type:"template",value:"$"+a.name,expandable:!0}))}),d.unshift(b.uiSegmentSrv.newSegment("*")),d)}).catch(function(a){return g.default.emit("alert-error",["Error",a]),[]})},b.prototype.segmentValueChanged=function(a,b){var c=this;return this.error=null,this.functions.length>0&&this.functions[0].def.fake&&(this.functions=[]),a.expandable?this.checkOtherSegments(b+1).then(function(){c.setSegmentFocus(b+1),c.targetChanged()}):(this.segments=this.segments.splice(0,b+1),this.setSegmentFocus(b+1),void this.targetChanged())},b.prototype.targetTextChanged=function(){this.updateModelTarget(),this.refresh()},b.prototype.updateModelTarget=function(){if(!this.target.textEditor){var a=this.getSegmentPathUpTo(this.segments.length);this.target.target=c.default.reduce(this.functions,this.wrapFunction,a)}this.updateRenderedTarget(this.target);for(var b=0,d=this.panelCtrl.panel.targets||[];b<d.length;b++){var e=d[b];e.refId!==this.target.refId&&this.updateRenderedTarget(e)}},b.prototype.updateRenderedTarget=function(a){var b=c.default.keyBy(this.panelCtrl.panel.targets,"refId");delete b[a.refId];for(var d=/\#([A-Z])/g,e=a.target;e.match(d);){var f=e.replace(d,function(a,c){var d=b[c];return d?(delete b[c],d.target):a});if(f===e)break;e=f}delete a.targetFull,a.target!==e&&(a.targetFull=e)},b.prototype.targetChanged=function(){if(!this.error){var a=this.target.target;if(this.updateModelTarget(),this.target.target!==a){var b=this.segments.length>0?this.segments[this.segments.length-1]:{};"select metric"!==b.value&&this.panelCtrl.refresh()}}},b.prototype.removeFunction=function(a){this.functions=c.default.without(this.functions,a),this.targetChanged()},b.prototype.addFunction=function(a){var b=d.default.createFuncInstance(a,{withDefaultParams:!0});b.added=!0,this.functions.push(b),this.moveAliasFuncLast(),this.smartlyHandleNewAliasByNode(b),1===this.segments.length&&this.segments[0].fake&&(this.segments=[]),!b.params.length&&b.added&&this.targetChanged()},b.prototype.moveAliasFuncLast=function(){var a=c.default.find(this.functions,function(a){return"alias"===a.def.name||"aliasByNode"===a.def.name||"aliasByMetric"===a.def.name});a&&(this.functions=c.default.without(this.functions,a),this.functions.push(a))},b.prototype.smartlyHandleNewAliasByNode=function(a){if("aliasByNode"===a.def.name)for(var b=0;b<this.segments.length;b++)if(this.segments[b].value.indexOf("*")>=0)return a.params[0]=b,a.added=!1,void this.targetChanged()},b.templateUrl="partials/query.editor.html",b}(f.QueryCtrl),a("GraphiteQueryCtrl",h)}}});