/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core_module","app/core/app_events"],function(a,b){"use strict";var c,d,e,f,g;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(){}return a}(),a("WizardSrv",e),f=function(){function a(){this.type="select"}return a.prototype.process=function(){return new Promise(function(a,b){})},a}(),a("SelectOptionStep",f),g=function(){function a(a){this.name=a,this.steps=[]}return a.prototype.addStep=function(a){this.steps.push(a)},a.prototype.next=function(a){var b=this,c=this.steps[0];return c.process().then(function(){if(b.steps.length!==a+1)return b.next(a+1)})},a.prototype.start=function(){return d.default.emit("show-modal",{src:"public/app/core/components/wizard/wizard.html",model:this}),this.next(0)},a}(),a("WizardFlow",g),c.default.service("wizardSrv",e)}}});