/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","jquery","../core_module","bootstrap-tagsinput"],function(a,b,c){"use strict";function d(a){for(var b=5381,c=0;c<a.length;c++)b=(b<<5)+b+a.charCodeAt(c);return b}function e(a,b){var c=d(a.toLowerCase()),e=["#E24D42","#1F78C1","#BA43A9","#705DA0","#466803","#508642","#447EBC","#C15C17","#890F02","#757575","#0A437C","#6D1F62","#584477","#629E51","#2F4F4F","#BF1B00","#806EB7","#8a2eb8","#699e00","#000000","#3F6833","#2F575E","#99440A","#E0752D","#0E4AB4","#58140C","#052B51","#511749","#3F2B5B"],f=["#FF7368","#459EE7","#E069CF","#9683C6","#6C8E29","#76AC68","#6AA4E2","#E7823D","#AF3528","#9B9B9B","#3069A2","#934588","#7E6A9D","#88C477","#557575","#E54126","#A694DD","#B054DE","#8FC426","#262626","#658E59","#557D84","#BF6A30","#FF9B53","#3470DA","#7E3A32","#2B5177","#773D6F","#655181"],g=e[Math.abs(c%e.length)],h=f[Math.abs(c%f.length)];b.css("background-color",g),b.css("border-color",h)}c.default.directive("tagColorFromName",function(){return{scope:{tagColorFromName:"="},link:function(a,b){e(a.tagColorFromName,b)}}}),c.default.directive("bootstrapTagsinput",function(){function c(b,c){if(c)return a.isFunction(b.$parent[c])?b.$parent[c]:function(a){return a[c]}}return{restrict:"EA",scope:{model:"=ngModel",onTagsUpdated:"&"},template:"<select multiple></select>",replace:!1,link:function(d,f,g){a.isArray(d.model)||(d.model=[]);var h=b("select",f);g.placeholder&&h.attr("placeholder",g.placeholder),h.tagsinput({typeahead:{source:a.isFunction(d.$parent[g.typeaheadSource])?d.$parent[g.typeaheadSource]:null},itemValue:c(d,g.itemvalue),itemText:c(d,g.itemtext),tagClass:a.isFunction(d.$parent[g.tagclass])?d.$parent[g.tagclass]:function(){return g.tagclass}}),h.on("itemAdded",function(a){d.model.indexOf(a.item)===-1&&(d.model.push(a.item),d.onTagsUpdated&&d.onTagsUpdated());var c=h.next().children("span").filter(function(){return b(this).text()===a.item});e(a.item,c)}),h.on("itemRemoved",function(a){var b=d.model.indexOf(a.item);b!==-1&&(d.model.splice(b,1),d.onTagsUpdated&&d.onTagsUpdated())}),d.$watch("model",function(){a.isArray(d.model)||(d.model=[]),h.tagsinput("removeAll");for(var b=0;b<d.model.length;b++)h.tagsinput("add",d.model[b])},!0)}}})});