/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","app/core/utils/file_export","app/core/app_events"],function(a,b){"use strict";function c(){return{restrict:"E",templateUrl:"public/app/features/dashboard/export_data/export_data_modal.html",controller:g,controllerAs:"ctrl",scope:{data:"<"},bindToController:!0}}b&&b.id;a("exportDataModal",c);var d,e,f,g;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a){this.$scope=a,this.asRows=!0,this.dateTimeFormat="YYYY-MM-DDTHH:mm:ssZ"}return a.$inject=["$scope"],a.prototype.export=function(){this.asRows?e.exportSeriesListToCsv(this.data,this.dateTimeFormat):e.exportSeriesListToCsvColumns(this.data,this.dateTimeFormat),this.dismiss()},a.prototype.dismiss=function(){f.default.emit("hide-modal")},a}(),a("ExportDataModalCtrl",g),d.default.module("grafana.directives").directive("exportDataModal",c)}}});