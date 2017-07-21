/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../dynamic_dashboard_srv"],function(a,b){"use strict";function c(a,b){d.describe(a,function(){var a={};a.setup=function(b){d.beforeEach(d.angularMocks.module("grafana.core")),d.beforeEach(d.angularMocks.module("grafana.services")),d.beforeEach(d.angularMocks.module(function(a){a.value("contextSrv",{user:{timezone:"utc"}})})),d.beforeEach(d.angularMocks.inject(function(c){a.dashboardSrv=c;var d={rows:[],templating:{list:[]}};b(d),a.dash=a.dashboardSrv.create(d),a.dynamicDashboardSrv=new e.DynamicDashboardSrv,a.dynamicDashboardSrv.init(a.dash),a.dynamicDashboardSrv.process(),a.rows=a.dash.rows}))},b(a)})}var d,e;b&&b.id;return{setters:[function(a){d=a},function(a){e=a}],execute:function(){c("given dashboard with panel repeat",function(a){a.setup(function(a){a.rows.push({panels:[{id:2,repeat:"apps"}]}),a.templating.list.push({name:"apps",current:{text:"se1, se2, se3",value:["se1","se2","se3"]},options:[{text:"se1",value:"se1",selected:!0},{text:"se2",value:"se2",selected:!0},{text:"se3",value:"se3",selected:!0},{text:"se4",value:"se4",selected:!1}]})}),d.it("should repeat panel one time",function(){d.expect(a.rows[0].panels.length).to.be(3)}),d.it("should mark panel repeated",function(){d.expect(a.rows[0].panels[0].repeat).to.be("apps"),d.expect(a.rows[0].panels[1].repeatPanelId).to.be(2)}),d.it("should set scopedVars on panels",function(){d.expect(a.rows[0].panels[0].scopedVars.apps.value).to.be("se1"),d.expect(a.rows[0].panels[1].scopedVars.apps.value).to.be("se2"),d.expect(a.rows[0].panels[2].scopedVars.apps.value).to.be("se3")}),d.describe("After a second iteration",function(){var b;d.beforeEach(function(){b=a.rows[0].panels[1],a.rows[0].panels[0].fill=10,a.dynamicDashboardSrv.process()}),d.it("should have reused same panel instances",function(){d.expect(a.rows[0].panels[1]).to.be(b)}),d.it("reused panel should copy properties from source",function(){d.expect(a.rows[0].panels[1].fill).to.be(10)}),d.it("should have same panel count",function(){d.expect(a.rows[0].panels.length).to.be(3)})}),d.describe("After a second iteration with different variable",function(){d.beforeEach(function(){a.dash.templating.list.push({name:"server",current:{text:"se1, se2, se3",value:["se1"]},options:[{text:"se1",value:"se1",selected:!0}]}),a.rows[0].panels[0].repeat="server",a.dynamicDashboardSrv.process()}),d.it("should remove scopedVars value for last variable",function(){d.expect(a.rows[0].panels[0].scopedVars.apps).to.be(void 0)}),d.it("should have new variable value in scopedVars",function(){d.expect(a.rows[0].panels[0].scopedVars.server.value).to.be("se1")})}),d.describe("After a second iteration and selected values reduced",function(){d.beforeEach(function(){a.dash.templating.list[0].options[1].selected=!1,a.dynamicDashboardSrv.process()}),d.it("should clean up repeated panel",function(){d.expect(a.rows[0].panels.length).to.be(2)})}),d.describe("After a second iteration and panel repeat is turned off",function(){d.beforeEach(function(){a.rows[0].panels[0].repeat=null,a.dynamicDashboardSrv.process()}),d.it("should clean up repeated panel",function(){d.expect(a.rows[0].panels.length).to.be(1)}),d.it("should remove scoped vars from reused panel",function(){d.expect(a.rows[0].panels[0].scopedVars).to.be(void 0)})})}),c("given dashboard with row repeat",function(a){a.setup(function(a){a.rows.push({repeat:"servers",panels:[{id:2}]}),a.rows.push({panels:[]}),a.templating.list.push({name:"servers",current:{text:"se1, se2",value:["se1","se2"]},options:[{text:"se1",value:"se1",selected:!0},{text:"se2",value:"se2",selected:!0}]})}),d.it("should repeat row one time",function(){d.expect(a.rows.length).to.be(3)}),d.it("should keep panel ids on first row",function(){d.expect(a.rows[0].panels[0].id).to.be(2)}),d.it("should keep first row as repeat",function(){d.expect(a.rows[0].repeat).to.be("servers")}),d.it("should clear repeat field on repeated row",function(){d.expect(a.rows[1].repeat).to.be(null)}),d.it("should add scopedVars to rows",function(){d.expect(a.rows[0].scopedVars.servers.value).to.be("se1"),d.expect(a.rows[1].scopedVars.servers.value).to.be("se2")}),d.it("should generate a repeartRowId based on repeat row index",function(){d.expect(a.rows[1].repeatRowId).to.be(1),d.expect(a.rows[1].repeatIteration).to.be(a.dynamicDashboardSrv.iteration)}),d.it("should set scopedVars on row panels",function(){d.expect(a.rows[0].panels[0].scopedVars.servers.value).to.be("se1"),d.expect(a.rows[1].panels[0].scopedVars.servers.value).to.be("se2")}),d.describe("After a second iteration",function(){var b;d.beforeEach(function(){b=a.rows[1],a.rows[0].height=500,a.dynamicDashboardSrv.process()}),d.it("should still only have 2 rows",function(){d.expect(a.rows.length).to.be(3)}),d.it.skip("should have updated props from source",function(){d.expect(a.rows[1].height).to.be(500)}),d.it("should reuse row instance",function(){d.expect(a.rows[1]).to.be(b)})}),d.describe("After a second iteration and selected values reduced",function(){d.beforeEach(function(){a.dash.templating.list[0].options[1].selected=!1,a.dynamicDashboardSrv.process()}),d.it("should remove repeated second row",function(){d.expect(a.rows.length).to.be(2)})})}),c("given dashboard with row repeat and panel repeat",function(a){a.setup(function(a){a.rows.push({repeat:"servers",panels:[{id:2,repeat:"metric"}]}),a.templating.list.push({name:"servers",current:{text:"se1, se2",value:["se1","se2"]},options:[{text:"se1",value:"se1",selected:!0},{text:"se2",value:"se2",selected:!0}]}),a.templating.list.push({name:"metric",current:{text:"m1, m2",value:["m1","m2"]},options:[{text:"m1",value:"m1",selected:!0},{text:"m2",value:"m2",selected:!0}]})}),d.it("should repeat row one time",function(){d.expect(a.rows.length).to.be(2)}),d.it("should repeat panel on both rows",function(){d.expect(a.rows[0].panels.length).to.be(2),d.expect(a.rows[1].panels.length).to.be(2)}),d.it("should keep panel ids on first row",function(){d.expect(a.rows[0].panels[0].id).to.be(2)}),d.it("should mark second row as repeated",function(){d.expect(a.rows[0].repeat).to.be("servers")}),d.it("should clear repeat field on repeated row",function(){d.expect(a.rows[1].repeat).to.be(null)}),d.it("should generate a repeartRowId based on repeat row index",function(){d.expect(a.rows[1].repeatRowId).to.be(1)}),d.it("should set scopedVars on row panels",function(){d.expect(a.rows[0].panels[0].scopedVars.servers.value).to.be("se1"),d.expect(a.rows[1].panels[0].scopedVars.servers.value).to.be("se2")})})}}});