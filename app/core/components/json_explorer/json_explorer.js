/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./helpers","lodash"],function(a,b){"use strict";var c,d,e,f,g,h,i,j,k;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){e=/(^\d{1,4}[\.|\\\/|-]\d{1,2}[\.|\\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/,f=/\d{2}:\d{2}:\d{2} GMT-\d{4}/,g=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,h=10,i=window.requestAnimationFrame||function(a){return a(),0},j={animateOpen:!0,animateClose:!0,theme:null},k=function(){function a(a,b,c,d){void 0===b&&(b=1),void 0===c&&(c=j),this.json=a,this.open=b,this.config=c,this.key=d,this._isOpen=null,this.skipChildren=!1}return Object.defineProperty(a.prototype,"isOpen",{get:function(){return null!==this._isOpen?this._isOpen:this.open>0},set:function(a){this._isOpen=a},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"isDate",{get:function(){return"string"===this.type&&(e.test(this.json)||g.test(this.json)||f.test(this.json))},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"isUrl",{get:function(){return"string"===this.type&&0===this.json.indexOf("http")},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"isArray",{get:function(){return Array.isArray(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"isObject",{get:function(){return c.isObject(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"isEmptyObject",{get:function(){return!this.keys.length&&!this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"isEmpty",{get:function(){return this.isEmptyObject||this.keys&&!this.keys.length&&this.isArray},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"hasKey",{get:function(){return"undefined"!=typeof this.key},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"constructorName",{get:function(){return c.getObjectName(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"type",{get:function(){return c.getType(this.json)},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"keys",{get:function(){return this.isObject?Object.keys(this.json).map(function(a){return a?a:'""'}):[]},enumerable:!0,configurable:!0}),a.prototype.toggleOpen=function(){this.isOpen=!this.isOpen,this.element&&(this.isOpen?this.appendChildren(this.config.animateOpen):this.removeChildren(this.config.animateClose),this.element.classList.toggle(c.cssClass("open")))},a.prototype.openAtDepth=function(a){void 0===a&&(a=1),a<0||(this.open=a,this.isOpen=0!==a,this.element&&(this.removeChildren(!1),0===a?this.element.classList.remove(c.cssClass("open")):(this.appendChildren(this.config.animateOpen),this.element.classList.add(c.cssClass("open")))))},a.prototype.isNumberArray=function(){return this.json.length>0&&this.json.length<4&&(d.default.isNumber(this.json[0])||d.default.isNumber(this.json[1]))},a.prototype.renderArray=function(){var a=c.createElement("span");return a.appendChild(c.createElement("span","bracket","[")),this.isNumberArray()?(this.json.forEach(function(b,d){d>0&&a.appendChild(c.createElement("span","array-comma",",")),a.appendChild(c.createElement("span","number",b))}),this.skipChildren=!0):a.appendChild(c.createElement("span","number",this.json.length)),a.appendChild(c.createElement("span","bracket","]")),a},a.prototype.render=function(a){void 0===a&&(a=!1),this.element=c.createElement("div","row");var b=c.createElement("a","toggler-link"),d=c.createElement("span","toggler");if(this.isObject&&b.appendChild(d),this.hasKey&&b.appendChild(c.createElement("span","key",this.key+":")),this.isObject){var e=c.createElement("span","value"),f=c.createElement("span"),g=c.createElement("span","constructor-name",this.constructorName);if(f.appendChild(g),this.isArray){var h=this.renderArray();f.appendChild(h)}e.appendChild(f),b.appendChild(e)}else{var e=this.isUrl?c.createElement("a"):c.createElement("span");e.classList.add(c.cssClass(this.type)),this.isDate&&e.classList.add(c.cssClass("date")),this.isUrl&&(e.classList.add(c.cssClass("url")),e.setAttribute("href",this.json));var i=c.getValuePreview(this.json,this.json);e.appendChild(document.createTextNode(i)),b.appendChild(e)}var j=c.createElement("div","children");return this.isObject&&j.classList.add(c.cssClass("object")),this.isArray&&j.classList.add(c.cssClass("array")),this.isEmpty&&j.classList.add(c.cssClass("empty")),this.config&&this.config.theme&&this.element.classList.add(c.cssClass(this.config.theme)),this.isOpen&&this.element.classList.add(c.cssClass("open")),a||this.element.appendChild(b),this.skipChildren?b.removeChild(d):this.element.appendChild(j),this.isObject&&this.isOpen&&this.appendChildren(),this.isObject&&b.addEventListener("click",this.toggleOpen.bind(this)),this.element},a.prototype.appendChildren=function(b){var d=this;void 0===b&&(b=!1);var e=this.element.querySelector("div."+c.cssClass("children"));if(e&&!this.isEmpty)if(b){var f=0,g=function(){var b=d.keys[f],c=new a(d.json[b],d.open-1,d.config,b);e.appendChild(c.render()),f+=1,f<d.keys.length&&(f>h?g():i(g))};i(g)}else this.keys.forEach(function(b){var c=new a(d.json[b],d.open-1,d.config,b);e.appendChild(c.render())})},a.prototype.removeChildren=function(a){void 0===a&&(a=!1);var b=this.element.querySelector("div."+c.cssClass("children"));if(a){var d=0,e=function(){b&&b.children.length&&(b.removeChild(b.children[0]),d+=1,d>h?e():i(e))};i(e)}else b&&(b.innerHTML="")},a}(),a("JsonExplorer",k)}}});