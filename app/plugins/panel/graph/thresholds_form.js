/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core_module"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a}],execute:function(){d=function(){function a(a){var b=this;this.panel=this.panelCtrl.panel,this.panel.alert&&(this.disabled=!0);var c=a.$on("$destroy",function(){b.panelCtrl.editingThresholds=!1,b.panelCtrl.render(),c()});this.panelCtrl.editingThresholds=!0}return a.$inject=["$scope"],a.prototype.addThreshold=function(){this.panel.thresholds.push({value:void 0,colorMode:"critical",op:"gt",fill:!0,line:!0}),this.panelCtrl.render()},a.prototype.removeThreshold=function(a){this.panel.thresholds.splice(a,1),this.panelCtrl.render()},a.prototype.render=function(){this.panelCtrl.render()},a}(),a("ThresholdFormCtrl",d),e='\n<div class="gf-form-group">\n  <h5>Thresholds</h5>\n  <p class="muted" ng-show="ctrl.disabled">\n    Visual thresholds options <strong>disabled.</strong>\n    Visit the Alert tab update your thresholds. <br>\n    To re-enable thresholds, the alert rule must be deleted from this panel.\n  </p>\n  <div ng-class="{\'thresholds-form-disabled\': ctrl.disabled}">\n    <div class="gf-form-inline" ng-repeat="threshold in ctrl.panel.thresholds">\n      <div class="gf-form">\n        <label class="gf-form-label">T{{$index+1}}</label>\n      </div>\n\n      <div class="gf-form">\n        <div class="gf-form-select-wrapper">\n          <select class="gf-form-input" ng-model="threshold.op"\n                  ng-options="f for f in [\'gt\', \'lt\']" ng-change="ctrl.render()" ng-disabled="ctrl.disabled"></select>\n        </div>\n        <input type="number" ng-model="threshold.value" class="gf-form-input width-8"\n               ng-change="ctrl.render()" placeholder="value" ng-disabled="ctrl.disabled">\n      </div>\n\n      <div class="gf-form">\n        <label class="gf-form-label">Color</label>\n        <div class="gf-form-select-wrapper">\n          <select class="gf-form-input" ng-model="threshold.colorMode"\n                  ng-options="f for f in [\'custom\', \'critical\', \'warning\', \'ok\']" ng-change="ctrl.render()" ng-disabled="ctrl.disabled">\n          </select>\n        </div>\n      </div>\n\n      <gf-form-switch class="gf-form" label="Fill" checked="threshold.fill"\n                      on-change="ctrl.render()" ng-disabled="ctrl.disabled"></gf-form-switch>\n\n      <div class="gf-form" ng-if="threshold.fill && threshold.colorMode === \'custom\'">\n        <label class="gf-form-label">Fill color</label>\n        <span class="gf-form-label">\n          <spectrum-picker ng-model="threshold.fillColor" ng-change="ctrl.render()" ></spectrum-picker>\n        </span>\n      </div>\n\n      <gf-form-switch class="gf-form" label="Line" checked="threshold.line"\n                      on-change="ctrl.render()" ng-disabled="ctrl.disabled"></gf-form-switch>\n\n      <div class="gf-form" ng-if="threshold.line && threshold.colorMode === \'custom\'">\n        <label class="gf-form-label">Line color</label>\n        <span class="gf-form-label">\n          <spectrum-picker ng-model="threshold.lineColor" ng-change="ctrl.render()" ></spectrum-picker>\n        </span>\n      </div>\n\n      <div class="gf-form">\n        <label class="gf-form-label">\n          <a class="pointer" ng-click="ctrl.removeThreshold($index)" ng-disabled="ctrl.disabled">\n            <i class="fa fa-trash"></i>\n          </a>\n        </label>\n      </div>\n    </div>\n\n    <div class="gf-form-button-row">\n      <button class="btn btn-inverse" ng-click="ctrl.addThreshold()" ng-disabled="ctrl.disabled">\n        <i class="fa fa-plus"></i>&nbsp;Add Threshold\n      </button>\n    </div>\n  </div>\n</div>\n',c.default.directive("graphThresholdForm",function(){return{restrict:"E",template:e,controller:d,bindToController:!0,controllerAs:"ctrl",scope:{panelCtrl:"="}}})}}});