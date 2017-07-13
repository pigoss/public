/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../query_ctrl","app/core/services/segment_srv","test/lib/common","../gfunc","test/specs/helpers"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){f=a},function(a){},function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){c.describe("GraphiteQueryCtrl",function(){var a=new e.default.ControllerTestContext;c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.controllers")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(c.angularMocks.module(function(a){a.preAssignBindingsEnabled(!0)})),c.beforeEach(a.providePhase()),c.beforeEach(c.angularMocks.inject(function(b,d,e){a.$q=e,a.scope=b.$new(),a.target={target:"aliasByNode(scaleToSeconds(test.prod.*,1),2)"},a.datasource.metricFindQuery=c.sinon.stub().returns(a.$q.when([])),a.panelCtrl={panel:{}},a.panelCtrl.refresh=c.sinon.spy(),a.ctrl=d(f.GraphiteQueryCtrl,{$scope:a.scope},{panelCtrl:a.panelCtrl,datasource:a.datasource,target:a.target}),a.scope.$digest()})),c.describe("init",function(){c.it("should validate metric key exists",function(){c.expect(a.datasource.metricFindQuery.getCall(0).args[0]).to.be("test.prod.*")}),c.it("should delete last segment if no metrics are found",function(){c.expect(a.ctrl.segments[2].value).to.be("select metric")}),c.it("should parse expression and build function model",function(){c.expect(a.ctrl.functions.length).to.be(2)})}),c.describe("when adding function",function(){c.beforeEach(function(){a.ctrl.target.target="test.prod.*.count",a.ctrl.datasource.metricFindQuery=c.sinon.stub().returns(a.$q.when([{expandable:!1}])),a.ctrl.parseTarget(),a.ctrl.addFunction(d.default.getFuncDef("aliasByNode"))}),c.it("should add function with correct node number",function(){c.expect(a.ctrl.functions[0].params[0]).to.be(2)}),c.it("should update target",function(){c.expect(a.ctrl.target.target).to.be("aliasByNode(test.prod.*.count, 2)")}),c.it("should call refresh",function(){c.expect(a.panelCtrl.refresh.called).to.be(!0)})}),c.describe("when adding function before any metric segment",function(){c.beforeEach(function(){a.ctrl.target.target="",a.ctrl.datasource.metricFindQuery.returns(a.$q.when([{expandable:!0}])),a.ctrl.parseTarget(),a.ctrl.addFunction(d.default.getFuncDef("asPercent"))}),c.it("should add function and remove select metric link",function(){c.expect(a.ctrl.segments.length).to.be(0)})}),c.describe("when initalizing target without metric expression and only function",function(){c.beforeEach(function(){a.ctrl.target.target="asPercent(#A, #B)",a.ctrl.datasource.metricFindQuery.returns(a.$q.when([])),a.ctrl.parseTarget(),a.scope.$digest()}),c.it("should not add select metric segment",function(){c.expect(a.ctrl.segments.length).to.be(0)}),c.it("should add both series refs as params",function(){c.expect(a.ctrl.functions[0].params.length).to.be(2)})}),c.describe("when initializing a target with single param func using variable",function(){c.beforeEach(function(){a.ctrl.target.target="movingAverage(prod.count, $var)",a.ctrl.datasource.metricFindQuery.returns(a.$q.when([])),a.ctrl.parseTarget()}),c.it("should add 2 segments",function(){c.expect(a.ctrl.segments.length).to.be(2)}),c.it("should add function param",function(){c.expect(a.ctrl.functions[0].params.length).to.be(1)})}),c.describe("when initalizing target without metric expression and function with series-ref",function(){c.beforeEach(function(){a.ctrl.target.target="asPercent(metric.node.count, #A)",a.ctrl.datasource.metricFindQuery.returns(a.$q.when([])),a.ctrl.parseTarget()}),c.it("should add segments",function(){c.expect(a.ctrl.segments.length).to.be(3)}),c.it("should have correct func params",function(){c.expect(a.ctrl.functions[0].params.length).to.be(1)})}),c.describe("when getting altSegments and metricFindQuery retuns empty array",function(){c.beforeEach(function(){a.ctrl.target.target="test.count",a.ctrl.datasource.metricFindQuery.returns(a.$q.when([])),a.ctrl.parseTarget(),a.ctrl.getAltSegments(1).then(function(b){a.altSegments=b}),a.scope.$digest()}),c.it("should have no segments",function(){c.expect(a.altSegments.length).to.be(0)})}),c.describe("targetChanged",function(){c.beforeEach(function(){a.ctrl.datasource.metricFindQuery=c.sinon.stub().returns(a.$q.when([{expandable:!1}])),a.ctrl.parseTarget(),a.ctrl.target.target="",a.ctrl.targetChanged()}),c.it("should rebuld target after expression model",function(){c.expect(a.ctrl.target.target).to.be("aliasByNode(scaleToSeconds(test.prod.*, 1), 2)")}),c.it("should call panelCtrl.refresh",function(){c.expect(a.panelCtrl.refresh.called).to.be(!0)})}),c.describe("when updating targets with nested query",function(){c.beforeEach(function(){a.ctrl.target.target="scaleToSeconds(#A)",a.ctrl.datasource.metricFindQuery=c.sinon.stub().returns(a.$q.when([{expandable:!1}])),a.ctrl.parseTarget(),a.ctrl.panelCtrl.panel.targets=[{target:"nested.query.count",refId:"A"}],a.ctrl.updateModelTarget()}),c.it("target should remain the same",function(){c.expect(a.ctrl.target.target).to.be("scaleToSeconds(#A)")}),c.it("targetFull should include nexted queries",function(){c.expect(a.ctrl.target.targetFull).to.be("scaleToSeconds(nested.query.count)")})}),c.describe("when updating target used in other query",function(){c.beforeEach(function(){a.ctrl.target.target="metrics.a.count",a.ctrl.target.refId="A",a.ctrl.datasource.metricFindQuery=c.sinon.stub().returns(a.$q.when([{expandable:!1}])),a.ctrl.parseTarget(),a.ctrl.panelCtrl.panel.targets=[a.ctrl.target,{target:"sumSeries(#A)",refId:"B"}],a.ctrl.updateModelTarget()}),c.it("targetFull of other query should update",function(){c.expect(a.ctrl.panel.targets[1].targetFull).to.be("sumSeries(metrics.a.count)")})})})}}});