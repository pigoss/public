/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","app/features/dashboard/import/dash_import","app/core/config"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){c.describe("DashImportCtrl",function(){var a={},b={search:c.sinon.stub().returns(Promise.resolve([])),get:c.sinon.stub()};c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.inject(function(c,e,f){a.$q=f,a.scope=c.$new(),a.ctrl=e(d.DashImportCtrl,{$scope:a.scope,backendSrv:b})})),c.describe("when uploading json",function(){c.beforeEach(function(){e.default.datasources={ds:{type:"test-db"}},a.ctrl.onUpload({__inputs:[{name:"ds",pluginId:"test-db",type:"datasource",pluginName:"Test DB"}]})}),c.it("should build input model",function(){c.expect(a.ctrl.inputs.length).to.eql(1),c.expect(a.ctrl.inputs[0].name).to.eql("ds"),c.expect(a.ctrl.inputs[0].info).to.eql("Select a Test DB data source")}),c.it("should set inputValid to false",function(){c.expect(a.ctrl.inputsValid).to.eql(!1)})}),c.describe("when specifing grafana.com url",function(){c.beforeEach(function(){a.ctrl.gnetUrl="http://grafana.com/dashboards/123",b.get=c.sinon.spy(function(){return Promise.resolve({})}),a.ctrl.checkGnetDashboard()}),c.it("should call gnet api with correct dashboard id",function(){c.expect(b.get.getCall(0).args[0]).to.eql("api/gnet/dashboards/123")})}),c.describe("when specifing dashbord id",function(){c.beforeEach(function(){a.ctrl.gnetUrl="2342",b.get=c.sinon.spy(function(){return Promise.resolve({})}),a.ctrl.checkGnetDashboard()}),c.it("should call gnet api with correct dashboard id",function(){c.expect(b.get.getCall(0).args[0]).to.eql("api/gnet/dashboards/2342")})})})}}});