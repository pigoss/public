/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["jquery","lodash","angular","tether-drop"],function(a,b,c,d){"use strict";function e(a,b){var e=c.element(document).injector(),f=document.createElement("div");f.innerHTML='<annotation-tooltip event="event"></annotation-tooltip>',e.invoke(["$compile","$rootScope",function(c,e){var g=e.$new(!0);g.event=b,c(f)(g),g.$digest(),g.$destroy();var h=new d({target:a[0],content:f,position:"bottom center",classes:"drop-popover drop-popover--annotation",openOn:"hover",hoverCloseDelay:200,tetherOptions:{constraints:[{to:"window",pin:!0,attachment:"both"}]}});h.open(),h.on("close",function(){setTimeout(function(){h.destroy()})})}])}function f(b){var c=this,d=new i(b);b.getEvents=function(){return d._events},b.hideEvents=function(){a.each(d._events,function(a,b){b.visual().getObject().hide()})},b.showEvents=function(){b.hideEvents(),a.each(d._events,function(a,b){b.hide()}),c.eventMarkers.drawEvents()},b.setEvents=function(a){d.eventsEnabled&&d.setupEvents(a)},b.hooks.processOptions.push(function(a,b){null!=b.events.data&&(d.eventsEnabled=!0)}),b.hooks.draw.push(function(a){var b=a.getOptions();d.eventsEnabled&&(d.getEvents().length<1?(d.setTypes(b.events.types),d.setupEvents(b.events.data)):d.updateEvents()),d.drawEvents()})}var g=function(a,b,c,d,e,f,g,h){var i=a,j=b,k=c,l=d,m={left:e,top:f},n=g,o=h;this.width=function(){return n},this.height=function(){return o},this.position=function(){return m},this.draw=function(){j(i)},this.clear=function(){k(i)},this.getObject=function(){return i},this.moveTo=function(a){m=a,l(i,m)}},h=function(a,b){var c,d=a,e=b,f=!1;this.visual=function(){return e},this.getOptions=function(){return d},this.getParent=function(){return c},this.isHidden=function(){return f},this.hide=function(){f=!0},this.unhide=function(){f=!1}},i=function(b){var c=[];this._types=[],this._plot=b,this.eventsEnabled=!1,this.getEvents=function(){return c},this.setTypes=function(a){return this._types=a},this.setupEvents=function(b){var d=this;a.each(b,function(a,b){var e=new h(b,d._buildDiv(b));c.push(e)}),c.sort(function(a,b){var c=a.getOptions(),d=b.getOptions();return c.min>d.min?1:c.min<d.min?-1:0})},this.drawEvents=function(){var b=this;a.each(c,function(a,c){b._insidePlot(c.getOptions().min)&&!c.isHidden()?c.visual().draw():c.visual().getObject().hide()})},this.updateEvents=function(){var b,d,e=this,f=this._plot.getPlotOffset(),g=this._plot.getXAxes()[this._plot.getOptions().events.xaxis-1];a.each(c,function(a,c){d=f.top+e._plot.height()-c.visual().height(),b=g.p2c(c.getOptions().min)+f.left-c.visual().width()/2,c.visual().moveTo({top:d,left:b})})},this._clearEvents=function(){a.each(c,function(a,b){b.visual().clear()}),c=[]},this._buildDiv=function(b){var c,d,f,h,i,j,k,l,m,n=this,o=this._plot.getPlaceholder(),p=this._plot.getPlotOffset(),q=this._plot.getAxes(),r=this._plot.getXAxes()[this._plot.getOptions().events.xaxis-1];q.yaxis&&q.yaxis.used&&(c=q.yaxis),q.yaxis2&&q.yaxis2.used&&(c=q.yaxis2);var s=b.eventType;h=null!==this._types&&this._types[s]&&this._types[s].color?this._types[s].color:"#666",i=null!==this._types&&this._types[s]&&this._types[s].markerSize?this._types[s].markerSize:8,j=null===this._types||!this._types[s]||void 0===this._types[s].markerShow||this._types[s].markerShow,m=null===this._types||!this._types[s]||void 0===this._types[s].markerTooltip||this._types[s].markerTooltip,k=null!=this._types&&this._types[s]&&this._types[s].lineStyle?this._types[s].lineStyle.toLowerCase():"dashed",l=null!=this._types&&this._types[s]&&void 0!==this._types[s].lineWidth?this._types[s].lineWidth:1,d=p.top+this._plot.height(),f=r.p2c(b.min)+p.left;var t=a('<div class="events_line flot-temp-elem"></div>').css({position:"absolute",opacity:.8,left:f+"px",top:8,width:l+"px",height:this._plot.height(),"border-left-width":l+"px","border-left-style":k,"border-left-color":h}).appendTo(o);if(j){var u=a('<div class="events_marker"></div>').css({position:"absolute",left:-i-Math.round(l/2)+"px","font-size":0,"line-height":0,width:0,height:0,"border-left":i+"px solid transparent","border-right":i+"px solid transparent"}).appendTo(t);this._types[s]&&this._types[s].position&&"BOTTOM"===this._types[s].position.toUpperCase()?u.css({top:d-i-8+"px","border-top":"none","border-bottom":i+"px solid "+h}):u.css({top:"0px","border-top":i+"px solid "+h,"border-bottom":"none"}),u.data({event:b});var v=function(){e(u,a(this).data("event"))},w=function(){n._plot.clearSelection()};m&&(u.css({cursor:"help"}),u.hover(v,w))}var x=new g(t,function(a){a.show()},function(a){a.remove()},function(a,b){a.css({top:b.top,left:b.left})},f,d,t.width(),t.height());return x},this._insidePlot=function(a){var b=this._plot.getXAxes()[this._plot.getOptions().events.xaxis-1],c=b.p2c(a);return c>0&&c<b.p2c(b.max)}},j={events:{data:null,types:null,xaxis:1,position:"BOTTOM"}};a.plot.plugins.push({init:f,options:j,name:"events",version:"0.2.5"})});