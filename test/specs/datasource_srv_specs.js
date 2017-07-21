/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["app/core/config","app/core/services/datasource_srv"],function(a){"use strict";describe("datasource_srv",function(){var b,c,d={};beforeEach(module("grafana.core")),beforeEach(module(function(a){a.value("templateSrv",d)})),beforeEach(module("grafana.services")),beforeEach(inject(function(a){b=a})),describe("when loading metric sources",function(){var d={mmm:{type:"test-db",meta:{metrics:{m:1}}},"--Grafana--":{type:"grafana",meta:{builtIn:!0,metrics:{m:1},id:"grafana"}},"--Mixed--":{type:"test-db",meta:{builtIn:!0,metrics:{m:1},id:"mixed"}},ZZZ:{type:"test-db",meta:{metrics:{m:1}}},aaa:{type:"test-db",meta:{metrics:{m:1}}},BBB:{type:"test-db",meta:{metrics:{m:1}}}};beforeEach(function(){a.datasources=d,c=b.getMetricSources({skipVariables:!0})}),it("should return a list of sources sorted case insensitively with builtin sources last",function(){expect(c[0].name).to.be("aaa"),expect(c[1].name).to.be("BBB"),expect(c[2].name).to.be("mmm"),expect(c[3].name).to.be("ZZZ"),expect(c[4].name).to.be("--Grafana--"),expect(c[5].name).to.be("--Mixed--")})})})});