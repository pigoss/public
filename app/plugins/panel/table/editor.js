/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","./transformers"],function(a,b){"use strict";function c(a,b){return{restrict:"E",scope:!0,templateUrl:"public/app/plugins/panel/table/editor.html",controller:f}}c.$inject=["$q","uiSegmentSrv"];b&&b.id;a("tablePanelEditor",c);var d,e,f;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c){this.$q=b,this.uiSegmentSrv=c,a.editor=this,this.panelCtrl=a.ctrl,this.panel=this.panelCtrl.panel,this.transformers=e.transformers,this.fontSizes=["80%","90%","100%","110%","120%","130%","150%","160%","180%","200%","220%","250%"],this.addColumnSegment=c.newPlusButton()}return a.$inject=["$scope","$q","uiSegmentSrv"],a.prototype.getColumnOptions=function(){var a=this;if(!this.panelCtrl.dataRaw)return this.$q.when([]);var b=this.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw),c=d.default.map(b,function(b){return a.uiSegmentSrv.newSegment({value:b.text})});return this.$q.when(c)},a.prototype.addColumn=function(){var a=e.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw),b=d.default.find(a,{text:this.addColumnSegment.value});b&&(this.panel.columns.push(b),this.render());var c=this.uiSegmentSrv.newPlusButton();this.addColumnSegment.html=c.html,this.addColumnSegment.value=c.value},a.prototype.transformChanged=function(){this.panel.columns=[],"timeseries_aggregations"===this.panel.transform&&this.panel.columns.push({text:"Avg",value:"avg"}),this.render()},a.prototype.render=function(){this.panelCtrl.render()},a.prototype.removeColumn=function(a){this.panel.columns=d.default.without(this.panel.columns,a),this.panelCtrl.render()},a}(),a("TablePanelEditorCtrl",f)}}});