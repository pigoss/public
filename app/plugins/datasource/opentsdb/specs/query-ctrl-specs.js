/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","test/specs/helpers","../query_ctrl"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){c.describe("OpenTsQueryCtrl",function(){var a=new d.default.ControllerTestContext;c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(c.angularMocks.module(function(a){a.preAssignBindingsEnabled(!0)})),c.beforeEach(a.providePhase(["backendSrv","templateSrv"])),c.beforeEach(a.providePhase()),c.beforeEach(c.angularMocks.inject(function(b,d,f){a.$q=f,a.scope=b.$new(),a.target={target:""},a.panelCtrl={panel:{}},a.panelCtrl.refresh=c.sinon.spy(),a.datasource.getAggregators=c.sinon.stub().returns(a.$q.when([])),a.datasource.getFilterTypes=c.sinon.stub().returns(a.$q.when([])),a.ctrl=d(e.OpenTsQueryCtrl,{$scope:a.scope},{panelCtrl:a.panelCtrl,datasource:a.datasource,target:a.target}),a.scope.$digest()})),c.describe("init query_ctrl variables",function(){c.it("filter types should be initialized",function(){c.expect(a.ctrl.filterTypes.length).to.be(7)}),c.it("aggregators should be initialized",function(){c.expect(a.ctrl.aggregators.length).to.be(8)}),c.it("fill policy options should be initialized",function(){c.expect(a.ctrl.fillPolicies.length).to.be(4)})}),c.describe("when adding filters and tags",function(){c.it("addTagMode should be false when closed",function(){a.ctrl.addTagMode=!0,a.ctrl.closeAddTagMode(),c.expect(a.ctrl.addTagMode).to.be(!1)}),c.it("addFilterMode should be false when closed",function(){a.ctrl.addFilterMode=!0,a.ctrl.closeAddFilterMode(),c.expect(a.ctrl.addFilterMode).to.be(!1)}),c.it("removing a tag from the tags list",function(){a.ctrl.target.tags={tagk:"tag_key",tagk2:"tag_value2"},a.ctrl.removeTag("tagk"),c.expect(Object.keys(a.ctrl.target.tags).length).to.be(1)}),c.it("removing a filter from the filters list",function(){a.ctrl.target.filters=[{tagk:"tag_key",filter:"tag_value2",type:"wildcard",groupBy:!0}],a.ctrl.removeFilter(0),c.expect(a.ctrl.target.filters.length).to.be(0)}),c.it("adding a filter when tags exist should generate error",function(){a.ctrl.target.tags={tagk:"tag_key",tagk2:"tag_value2"},a.ctrl.addFilter(),c.expect(a.ctrl.errors.filters).to.be("Please remove tags to use filters, tags and filters are mutually exclusive.")}),c.it("adding a tag when filters exist should generate error",function(){a.ctrl.target.filters=[{tagk:"tag_key",filter:"tag_value2",type:"wildcard",groupBy:!0}],a.ctrl.addTag(),c.expect(a.ctrl.errors.tags).to.be("Please remove filters to use tags, tags and filters are mutually exclusive.")})})})}}});