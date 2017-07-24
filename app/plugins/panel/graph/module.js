/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./graph","./legend","./series_overrides_ctrl","./thresholds_form","./template","lodash","app/core/config","app/plugins/sdk","./data_processor","./axes_editor"],function(a,b){"use strict";var c,d,e,f,g,h,i,j=this&&this.__extends||function(){var a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return function(b,c){function d(){this.constructor=b}a(b,c),b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();b&&b.id;return{setters:[function(a){},function(a){},function(a){},function(a){},function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a},function(a){g=a},function(a){h=a}],execute:function(){i=function(a){function b(b,c,e){var f=a.call(this,b,c)||this;return f.annotationsSrv=e,f.hiddenSeries={},f.seriesList=[],f.dataList=[],f.annotations=[],f.colors=[],f.panelDefaults={datasource:null,renderer:"flot",yaxes:[{label:null,show:!0,logBase:1,min:null,max:null,format:"short"},{label:null,show:!0,logBase:1,min:null,max:null,format:"short"}],xaxis:{show:!0,mode:"time",name:null,values:[],buckets:null},lines:!0,fill:1,linewidth:1,dashes:!1,dashLength:10,spaceLength:10,points:!1,pointradius:5,bars:!1,stack:!1,percentage:!1,legend:{show:!0,values:!1,min:!1,max:!1,current:!1,total:!1,avg:!1},nullPointMode:"null",steppedLine:!1,tooltip:{value_type:"individual",shared:!0,sort:0},timeFrom:null,timeShift:null,targets:[{}],aliasColors:{},seriesOverrides:[],thresholds:[]},d.default.defaults(f.panel,f.panelDefaults),d.default.defaults(f.panel.tooltip,f.panelDefaults.tooltip),d.default.defaults(f.panel.legend,f.panelDefaults.legend),d.default.defaults(f.panel.xaxis,f.panelDefaults.xaxis),f.processor=new g.DataProcessor(f.panel),f.events.on("render",f.onRender.bind(f)),f.events.on("data-received",f.onDataReceived.bind(f)),f.events.on("data-error",f.onDataError.bind(f)),f.events.on("data-snapshot-load",f.onDataSnapshotLoad.bind(f)),f.events.on("init-edit-mode",f.onInitEditMode.bind(f)),f.events.on("init-panel-actions",f.onInitPanelActions.bind(f)),f}return j(b,a),b.$inject=["$scope","$injector","annotationsSrv"],b.prototype.onInitEditMode=function(){this.addEditorTab("Axes",h.axesEditorComponent,2),this.addEditorTab("Legend","public/app/plugins/panel/graph/tab_legend.html",3),this.addEditorTab("Display","public/app/plugins/panel/graph/tab_display.html",4),e.default.alertingEnabled&&this.addEditorTab("Alert",f.alertTab,5),this.subTabIndex=0},b.prototype.onInitPanelActions=function(a){a.push({text:"Export CSV",click:"ctrl.exportCsv()"}),a.push({text:"Toggle legend",click:"ctrl.toggleLegend()"})},b.prototype.issueQueries=function(b){return this.annotationsPromise=this.annotationsSrv.getAnnotations({dashboard:this.dashboard,panel:this.panel,range:this.range}),a.prototype.issueQueries.call(this,b)},b.prototype.zoomOut=function(a){this.publishAppEvent("zoom-out",2)},b.prototype.onDataSnapshotLoad=function(a){this.annotationsPromise=this.annotationsSrv.getAnnotations({dashboard:this.dashboard,panel:this.panel,range:this.range}),this.onDataReceived(a)},b.prototype.onDataError=function(a){this.seriesList=[],this.annotations=[],this.render([])},b.prototype.onDataReceived=function(a){var b=this;this.dataList=a,this.seriesList=this.processor.getSeriesList({dataList:a,range:this.range}),this.dataWarning=null;var c=this.seriesList.reduce(function(a,b){return a+b.datapoints.length},0);if(0===c)this.dataWarning={title:"No data points",tip:"No datapoints returned from data query"};else for(var d=0,e=this.seriesList;d<e.length;d++){var f=e[d];if(f.isOutsideRange){this.dataWarning={title:"Data points outside time range",tip:"Can be caused by timezone mismatch or missing time filter in query"};break}}this.annotationsPromise.then(function(a){b.loading=!1,b.alertState=a.alertState,b.annotations=a.annotations,b.render(b.seriesList)},function(){b.loading=!1,b.render(b.seriesList)})},b.prototype.onRender=function(){if(this.seriesList)for(var a=0,b=this.seriesList;a<b.length;a++){var c=b[a];c.applySeriesOverrides(this.panel.seriesOverrides),c.unit&&(this.panel.yaxes[c.yaxis-1].format=c.unit)}},b.prototype.changeSeriesColor=function(a,b){a.color=b,this.panel.aliasColors[a.alias]=a.color,this.render()},b.prototype.toggleSeries=function(a,b){b.ctrlKey||b.metaKey||b.shiftKey?this.hiddenSeries[a.alias]?delete this.hiddenSeries[a.alias]:this.hiddenSeries[a.alias]=!0:this.toggleSeriesExclusiveMode(a),this.render()},b.prototype.toggleSeriesExclusiveMode=function(a){var b=this,c=this.hiddenSeries;c[a.alias]&&delete c[a.alias];var e=d.default.every(this.seriesList,function(b){return b.alias===a.alias||c[b.alias]});e?d.default.each(this.seriesList,function(a){delete b.hiddenSeries[a.alias]}):d.default.each(this.seriesList,function(c){c.alias!==a.alias&&(b.hiddenSeries[c.alias]=!0)})},b.prototype.toggleAxis=function(a){var b=d.default.find(this.panel.seriesOverrides,{alias:a.alias});b||(b={alias:a.alias},this.panel.seriesOverrides.push(b)),a.yaxis=b.yaxis=2===a.yaxis?1:2,this.render()},b.prototype.addSeriesOverride=function(a){this.panel.seriesOverrides.push(a||{})},b.prototype.removeSeriesOverride=function(a){this.panel.seriesOverrides=d.default.without(this.panel.seriesOverrides,a),this.render()},b.prototype.toggleLegend=function(){this.panel.legend.show=!this.panel.legend.show,this.refresh()},b.prototype.legendValuesOptionChanged=function(){var a=this.panel.legend;a.values=a.min||a.max||a.avg||a.current||a.total,this.render()},b.prototype.exportCsv=function(){var a=this.$scope.$new(!0);a.seriesList=this.seriesList,this.publishAppEvent("show-modal",{templateHtml:'<export-data-modal data="seriesList"></export-data-modal>',scope:a,modalClass:"modal--narrow"})},b.template=c.default,b}(f.MetricsPanelCtrl),a("GraphCtrl",i),a("PanelCtrl",i)}}});