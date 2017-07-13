/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/utils/kbn"],function(a,b){"use strict";function c(){return{restrict:"E",scope:!0,templateUrl:"public/app/plugins/panel/heatmap/partials/axes_editor.html",controller:e}}b&&b.id;a("axesEditor",c);var d,e;return{setters:[function(a){d=a}],execute:function(){e=function(){function a(a,b){a.editor=this,this.panelCtrl=a.ctrl,this.panel=this.panelCtrl.panel,this.unitFormats=d.default.getUnitFormats(),this.logScales={linear:1,"log (base 2)":2,"log (base 10)":10,"log (base 32)":32,"log (base 1024)":1024},this.dataFormats={"Time series":"timeseries","Time series buckets":"tsbuckets"}}return a.$inject=["$scope","uiSegmentSrv"],a.prototype.setUnitFormat=function(a){this.panel.yAxis.format=a.value,this.panelCtrl.render()},a}(),a("AxesEditorCtrl",e)}}});