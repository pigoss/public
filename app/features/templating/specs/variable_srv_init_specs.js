/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../all","lodash","test/specs/helpers","app/core/core"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){c.describe("VariableSrv init",function(){function a(a,d){c.describe(a,function(){var a={urlParams:{},setup:function(b){a.setupFn=b}};c.beforeEach(function(){a.setupFn(),b.datasource={},b.datasource.metricFindQuery=c.sinon.stub().returns(b.$q.when(a.queryResult)),b.datasourceSrv.get=c.sinon.stub().returns(b.$q.when(b.datasource)),b.datasourceSrv.getMetricSources=c.sinon.stub().returns(a.metricSources),b.$location.search=c.sinon.stub().returns(a.urlParams),b.dashboard={templating:{list:a.variables},events:new f.Emitter},b.variableSrv.init(b.dashboard),b.$rootScope.$digest(),a.variables=b.variableSrv.variables}),d(a)})}var b=new e.default.ControllerTestContext;c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.controllers")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(c.angularMocks.module(function(a){a.preAssignBindingsEnabled(!0)})),c.beforeEach(b.providePhase(["datasourceSrv","timeSrv","templateSrv","$location"])),c.beforeEach(c.angularMocks.inject(function(a,c,d,e){b.$q=c,b.$rootScope=a,b.$location=d,b.variableSrv=e.get("variableSrv"),b.$rootScope.$digest()})),["query","interval","custom","datasource"].forEach(function(b){a("when setting "+b+" variable via url",function(a){a.setup(function(){a.variables=[{name:"apps",type:b,current:{text:"test",value:"test"},options:[{text:"test",value:"test"}]}],a.urlParams["var-apps"]="new",a.metricSources=[]}),c.it("should update current value",function(){c.expect(a.variables[0].current.value).to.be("new"),c.expect(a.variables[0].current.text).to.be("new")})})}),c.describe("given dependent variables",function(){var e=[{name:"app",type:"query",query:"",current:{text:"app1",value:"app1"},options:[{text:"app1",value:"app1"}]},{name:"server",type:"query",refresh:1,query:"$app.*",current:{text:"server1",value:"server1"},options:[{text:"server1",value:"server1"}]}];a("when setting parent var from url",function(a){a.setup(function(){a.variables=d.default.cloneDeep(e),a.urlParams["var-app"]="google",a.queryResult=[{text:"google-server1"},{text:"google-server2"}]}),c.it("should update child variable",function(){c.expect(a.variables[1].options.length).to.be(2),c.expect(a.variables[1].current.text).to.be("google-server1")}),c.it("should only update it once",function(){c.expect(b.datasource.metricFindQuery.callCount).to.be(1)})})}),a("when datasource variable is initialized",function(a){a.setup(function(){a.variables=[{type:"datasource",query:"graphite",name:"test",current:{value:"backend4_pee",text:"backend4_pee"},regex:"/pee$/"}],a.metricSources=[{name:"backend1",meta:{id:"influx"}},{name:"backend2_pee",meta:{id:"graphite"}},{name:"backend3",meta:{id:"graphite"}},{name:"backend4_pee",meta:{id:"graphite"}}]}),c.it("should update current value",function(){var a=b.variableSrv.variables[0];c.expect(a.options.length).to.be(2)})}),a("when template variable is present in url multiple times",function(a){a.setup(function(){a.variables=[{name:"apps",type:"query",multi:!0,current:{text:"val1",value:"val1"},options:[{text:"val1",value:"val1"},{text:"val2",value:"val2"},{text:"val3",value:"val3",selected:!0}]}],a.urlParams["var-apps"]=["val2","val1"]}),c.it("should update current value",function(){var a=b.variableSrv.variables[0];c.expect(a.current.value.length).to.be(2),c.expect(a.current.value[0]).to.be("val2"),c.expect(a.current.value[1]).to.be("val1"),c.expect(a.current.text).to.be("val2 + val1"),c.expect(a.options[0].selected).to.be(!0),c.expect(a.options[1].selected).to.be(!0)}),c.it("should set options that are not in value to selected false",function(){var a=b.variableSrv.variables[0];c.expect(a.options[2].selected).to.be(!1)})})})}}});