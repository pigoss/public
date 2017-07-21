/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../influx_series"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){c.describe("when generating timeseries from influxdb response",function(){c.describe("given multiple fields for series",function(){var a={alias:"",series:[{name:"cpu",tags:{app:"test",server:"server1"},columns:["time","mean","max","min"],values:[[1431946625e3,10,11,9],[1431946626e3,20,21,19]]}]};c.describe("and no alias",function(){c.it("should generate multiple datapoints for each column",function(){var b=new d.default(a),e=b.getTimeSeries();c.expect(e.length).to.be(3),c.expect(e[0].target).to.be("cpu.mean {app: test, server: server1}"),c.expect(e[0].datapoints[0][0]).to.be(10),c.expect(e[0].datapoints[0][1]).to.be(1431946625e3),c.expect(e[0].datapoints[1][0]).to.be(20),c.expect(e[0].datapoints[1][1]).to.be(1431946626e3),c.expect(e[1].target).to.be("cpu.max {app: test, server: server1}"),c.expect(e[1].datapoints[0][0]).to.be(11),c.expect(e[1].datapoints[0][1]).to.be(1431946625e3),c.expect(e[1].datapoints[1][0]).to.be(21),c.expect(e[1].datapoints[1][1]).to.be(1431946626e3),c.expect(e[2].target).to.be("cpu.min {app: test, server: server1}"),c.expect(e[2].datapoints[0][0]).to.be(9),c.expect(e[2].datapoints[0][1]).to.be(1431946625e3),c.expect(e[2].datapoints[1][0]).to.be(19),c.expect(e[2].datapoints[1][1]).to.be(1431946626e3)})}),c.describe("and simple alias",function(){c.it("should use alias",function(){a.alias="new series";var b=new d.default(a),e=b.getTimeSeries();c.expect(e[0].target).to.be("new series"),c.expect(e[1].target).to.be("new series"),c.expect(e[2].target).to.be("new series")})}),c.describe("and alias patterns",function(){c.it("should replace patterns",function(){a.alias="alias: $m -> $tag_server ([[measurement]])";var b=new d.default(a),e=b.getTimeSeries();c.expect(e[0].target).to.be("alias: cpu -> server1 (cpu)"),c.expect(e[1].target).to.be("alias: cpu -> server1 (cpu)"),c.expect(e[2].target).to.be("alias: cpu -> server1 (cpu)")})})}),c.describe("given measurement with default fieldname",function(){var a={series:[{name:"cpu",tags:{app:"test",server:"server1"},columns:["time","value"],values:[["2015-05-18T10:57:05Z",10],["2015-05-18T10:57:06Z",12]]},{name:"cpu",tags:{app:"test2",server:"server2"},columns:["time","value"],values:[["2015-05-18T10:57:05Z",15],["2015-05-18T10:57:06Z",16]]}]};c.describe("and no alias",function(){c.it("should generate label with no field",function(){var b=new d.default(a),e=b.getTimeSeries();c.expect(e[0].target).to.be("cpu {app: test, server: server1}"),c.expect(e[1].target).to.be("cpu {app: test2, server: server2}")})})}),c.describe("given two series",function(){var a={alias:"",series:[{name:"cpu",tags:{app:"test",server:"server1"},columns:["time","mean"],values:[[1431946625e3,10],[1431946626e3,12]]},{name:"cpu",tags:{app:"test2",server:"server2"},columns:["time","mean"],values:[[1431946625e3,15],[1431946626e3,16]]}]};c.describe("and no alias",function(){c.it("should generate two time series",function(){var b=new d.default(a),e=b.getTimeSeries();c.expect(e.length).to.be(2),c.expect(e[0].target).to.be("cpu.mean {app: test, server: server1}"),c.expect(e[0].datapoints[0][0]).to.be(10),c.expect(e[0].datapoints[0][1]).to.be(1431946625e3),c.expect(e[0].datapoints[1][0]).to.be(12),c.expect(e[0].datapoints[1][1]).to.be(1431946626e3),c.expect(e[1].target).to.be("cpu.mean {app: test2, server: server2}"),c.expect(e[1].datapoints[0][0]).to.be(15),c.expect(e[1].datapoints[0][1]).to.be(1431946625e3),c.expect(e[1].datapoints[1][0]).to.be(16),c.expect(e[1].datapoints[1][1]).to.be(1431946626e3)})}),c.describe("and simple alias",function(){c.it("should use alias",function(){a.alias="new series";var b=new d.default(a),e=b.getTimeSeries();c.expect(e[0].target).to.be("new series")})}),c.describe("and alias patterns",function(){c.it("should replace patterns",function(){a.alias="alias: $m -> $tag_server ([[measurement]])";var b=new d.default(a),e=b.getTimeSeries();c.expect(e[0].target).to.be("alias: cpu -> server1 (cpu)"),c.expect(e[1].target).to.be("alias: cpu -> server2 (cpu)")})})}),c.describe("given measurement with dots",function(){var a={alias:"",series:[{name:"app.prod.server1.count",tags:{},columns:["time","mean"],values:[[1431946625e3,10],[1431946626e3,12]]}]};c.it("should replace patterns",function(){a.alias="alias: $1 -> [[3]]";var b=new d.default(a),e=b.getTimeSeries();c.expect(e[0].target).to.be("alias: prod -> count")})}),c.describe("given table response",function(){var a={alias:"",series:[{name:"app.prod.server1.count",tags:{datacenter:"Africa",server:"server2"},columns:["time","value2","value"],values:[[1431946625e3,23,10],[1431946626e3,25,12]]}]};c.it("should return table",function(){var b=new d.default(a),e=b.getTable();c.expect(e.type).to.be("table"),c.expect(e.columns.length).to.be(5),c.expect(e.rows[0]).to.eql([1431946625e3,"Africa","server2",23,10])})}),c.describe("given annotation response",function(){c.describe("with empty tagsColumn",function(){var a={alias:"",annotation:{},series:[{name:"logins.count",tags:{datacenter:"Africa",server:"server2"},columns:["time","datacenter","hostname","source","value"],values:[[1481549440372,"America","10.1.100.10","backend",215.7432653659507]]}]};c.it("should multiple tags",function(){var b=new d.default(a),e=b.getAnnotations();c.expect(e[0].tags.length).to.be(0)})}),c.describe("given annotation response",function(){var a={alias:"",annotation:{tagsColumn:"datacenter, source"},series:[{name:"logins.count",tags:{datacenter:"Africa",server:"server2"},columns:["time","datacenter","hostname","source","value"],values:[[1481549440372,"America","10.1.100.10","backend",215.7432653659507]]}]};c.it("should multiple tags",function(){var b=new d.default(a),e=b.getAnnotations();c.expect(e[0].tags.length).to.be(2),c.expect(e[0].tags[0]).to.be("America"),c.expect(e[0].tags[1]).to.be("backend")})})})})}}});