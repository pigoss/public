/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash","app/core/core_module","./row/row_model"],function(a,b){"use strict";var c,d,e,f,g;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(){}return a.prototype.init=function(a){this.dashboard=a,this.variables=a.templating.list},a.prototype.process=function(a){if(!this.dashboard.snapshot&&0!==this.variables.length){this.iteration=(this.iteration||(new Date).getTime())+1,a=a||{};var b,c,e,f,g=a.cleanUpOnly;for(b=0;b<this.dashboard.rows.length;b++)for(e=this.dashboard.rows[b],delete e.scopedVars,c=0;c<e.panels.length;c++)delete e.panels[c].scopedVars;for(b=0;b<this.dashboard.rows.length;b++){if(e=this.dashboard.rows[b],e.repeat)g||this.repeatRow(e,b);else if(e.repeatRowId&&e.repeatIteration!==this.iteration){this.dashboard.removeRow(e,!0),b-=1;continue}for(c=0;c<e.panels.length;c++)f=e.panels[c],f.repeat?g||this.repeatPanel(f,e):f.repeatPanelId&&f.repeatIteration!==this.iteration&&(e.panels=d.default.without(e.panels,f),c-=1);e.panelSpanChanged()}}},a.prototype.getRowClone=function(a,b,d){if(0===b)return a;var e,g,h,i,j=d+1;for(e=0;e<this.dashboard.rows.length;e++)if(h=this.dashboard.rows[e],h.repeatRowId===j&&h.repeatIteration!==this.iteration){i=h,i.copyPropertiesFromRowSource(a);break}if(!i){var k=c.default.copy(a.getSaveModel());for(i=new f.DashboardRow(k),this.dashboard.rows.splice(d+b,0,i),e=0;e<i.panels.length;e++)g=i.panels[e],g.id=this.dashboard.getNextPanelId()}return i.repeat=null,i.repeatRowId=j,i.repeatIteration=this.iteration,i},a.prototype.repeatRow=function(a,b){var c=this,e=d.default.find(this.variables,{name:a.repeat});if(e){var f,g,h,i;f="All"===e.current.text?e.options.slice(1,e.options.length):d.default.filter(e.options,{selected:!0}),d.default.each(f,function(d,f){for(g=c.getRowClone(a,f,b),g.scopedVars={},g.scopedVars[e.name]=d,h=0;h<g.panels.length;h++)i=g.panels[h],i.scopedVars={},i.scopedVars[e.name]=d})}},a.prototype.getPanelClone=function(a,b,d){if(0===d)return a;var e,f,g,h;for(e=0;e<b.panels.length;e++)if(g=b.panels[e],g.repeatIteration!==this.iteration&&g.repeatPanelId===a.id){h=g;break}return h||(h={id:this.dashboard.getNextPanelId()},b.panels.push(h)),f=h.id,c.default.copy(a,h),h.id=f,h.repeatIteration=this.iteration,h.repeatPanelId=a.id,h.repeat=null,h},a.prototype.repeatPanel=function(a,b){var c=this,e=d.default.find(this.variables,{name:a.repeat});if(e){var f;f="All"===e.current.text?e.options.slice(1,e.options.length):d.default.filter(e.options,{selected:!0}),d.default.each(f,function(d,g){var h=c.getPanelClone(a,b,g);h.span=Math.max(12/f.length,a.minSpan||4),h.scopedVars=h.scopedVars||{},h.scopedVars[e.name]=d})}},a}(),a("DynamicDashboardSrv",g),e.default.service("dynamicDashboardSrv",g)}}});