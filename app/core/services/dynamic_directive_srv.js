/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","../core_module"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(a,b,c){this.$compile=a,this.$parse=b,this.$rootScope=c}return a.$inject=["$compile","$parse","$rootScope"],a.prototype.addDirective=function(a,b,d){var e=c.default.element(document.createElement(b));this.$compile(e)(d),a.empty(),a.append(e)},a.prototype.link=function(a,b,c,e){var f=this;e.directive(a).then(function(e){return e&&e.fn?(e.fn.registered||(d.default.directive(c.$normalize(e.name),e.fn),e.fn.registered=!0),void f.addDirective(b,e.name,a)):void b.empty()}).catch(function(a){console.log("Plugin load:",a),f.$rootScope.appEvent("alert-error",["Plugin error",a.toString()])})},a.prototype.create=function(a){var b=this,c={restrict:"E",scope:a.scope,link:function(c,d,e){if(a.watchPath){var f=null;c.$watch(a.watchPath,function(){f&&f.$destroy(),f=c.$new(),b.link(f,d,e,a)})}else b.link(c,d,e,a)}};return c},a}(),d.default.service("dynamicDirectiveSrv",e)}}});