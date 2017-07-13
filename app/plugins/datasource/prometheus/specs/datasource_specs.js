/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","moment","test/specs/helpers","../datasource"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){c.describe("PrometheusDatasource",function(){var a=new e.default.ServiceTestContext,b={url:"proxied",directUrl:"direct",user:"test",password:"mupp"};c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(a.providePhase(["timeSrv"])),c.beforeEach(c.angularMocks.inject(function(c,d,e,g){a.$q=c,a.$httpBackend=e,a.$rootScope=d,a.ds=g.instantiate(f.PrometheusDatasource,{instanceSettings:b}),e.when("GET",/\.html$/).respond("")})),c.describe("When querying prometheus with one target using query editor target spec",function(){var b,e="proxied/api/v1/query_range?query="+encodeURIComponent('test{job="testjob"}')+"&start=1443438675&end=1443460275&step=60",f={range:{from:d.default(1443438674760),to:d.default(1443460274760)},targets:[{expr:'test{job="testjob"}'}],interval:"60s"},g={status:"success",data:{resultType:"matrix",result:[{metric:{__name__:"test",job:"testjob"},values:[[1443454528,"3846"]]}]}};c.beforeEach(function(){a.$httpBackend.expect("GET",e).respond(g),a.ds.query(f).then(function(a){b=a}),a.$httpBackend.flush()}),c.it("should generate the correct query",function(){a.$httpBackend.verifyNoOutstandingExpectation()}),c.it("should return series list",function(){c.expect(b.data.length).to.be(1),c.expect(b.data[0].target).to.be('test{job="testjob"}')})}),c.describe("When querying prometheus with one target which return multiple series",function(){var b,e=1443438675,f=1443460275,g=60,h="proxied/api/v1/query_range?query="+encodeURIComponent('test{job="testjob"}')+"&start="+e+"&end="+f+"&step="+g,i={range:{from:d.default(1443438674760),to:d.default(1443460274760)},targets:[{expr:'test{job="testjob"}'}],interval:"60s"},j={status:"success",data:{resultType:"matrix",result:[{metric:{__name__:"test",job:"testjob",series:"series 1"},values:[[e+1*g,"3846"],[e+3*g,"3847"],[f-1*g,"3848"]]},{metric:{__name__:"test",job:"testjob",series:"series 2"},values:[[e+2*g,"4846"]]}]}};c.beforeEach(function(){a.$httpBackend.expect("GET",h).respond(j),a.ds.query(i).then(function(a){b=a}),a.$httpBackend.flush()}),c.it("should be same length",function(){c.expect(b.data.length).to.be(2),c.expect(b.data[0].datapoints.length).to.be((f-e)/g+1),c.expect(b.data[1].datapoints.length).to.be((f-e)/g+1)}),c.it("should fill null until first datapoint in response",function(){c.expect(b.data[0].datapoints[0][1]).to.be(1e3*e),c.expect(b.data[0].datapoints[0][0]).to.be(null),c.expect(b.data[0].datapoints[1][1]).to.be(1e3*(e+1*g)),c.expect(b.data[0].datapoints[1][0]).to.be(3846)}),c.it("should fill null after last datapoint in response",function(){var a=(f-e)/g+1;c.expect(b.data[0].datapoints[a-2][1]).to.be(1e3*(f-1*g)),c.expect(b.data[0].datapoints[a-2][0]).to.be(3848),c.expect(b.data[0].datapoints[a-1][1]).to.be(1e3*f),c.expect(b.data[0].datapoints[a-1][0]).to.be(null)}),c.it("should fill null at gap between series",function(){c.expect(b.data[0].datapoints[2][1]).to.be(1e3*(e+2*g)),c.expect(b.data[0].datapoints[2][0]).to.be(null),c.expect(b.data[1].datapoints[1][1]).to.be(1e3*(e+1*g)),c.expect(b.data[1].datapoints[1][0]).to.be(null),c.expect(b.data[1].datapoints[3][1]).to.be(1e3*(e+3*g)),c.expect(b.data[1].datapoints[3][0]).to.be(null)})}),c.describe("When performing annotationQuery",function(){var b,e="proxied/api/v1/query_range?query="+encodeURIComponent('ALERTS{alertstate="firing"}')+"&start=1443438675&end=1443460275&step=60s",f={annotation:{expr:'ALERTS{alertstate="firing"}',tagKeys:"job",titleFormat:"{{alertname}}",textFormat:"{{instance}}"},range:{from:d.default(1443438674760),to:d.default(1443460274760)}},g={status:"success",data:{resultType:"matrix",result:[{metric:{__name__:"ALERTS",alertname:"InstanceDown",alertstate:"firing",instance:"testinstance",job:"testjob"},values:[[1443454528,"1"]]}]}};c.beforeEach(function(){a.$httpBackend.expect("GET",e).respond(g),a.ds.annotationQuery(f).then(function(a){b=a}),a.$httpBackend.flush()}),c.it("should return annotation list",function(){a.$rootScope.$apply(),c.expect(b.length).to.be(1),c.expect(b[0].tags).to.contain("testjob"),c.expect(b[0].title).to.be("InstanceDown"),c.expect(b[0].text).to.be("testinstance"),c.expect(b[0].time).to.be(1443454528e3)})}),c.describe("When resultFormat is table",function(){var b={status:"success",data:{resultType:"matrix",result:[{metric:{__name__:"test",job:"testjob"},values:[[1443454528,"3846"]]},{metric:{__name__:"test",instance:"localhost:8080",job:"otherjob"},values:[[1443454529,"3847"]]}]}};c.it("should return table model",function(){var d=a.ds.transformMetricDataToTable(b.data.result);c.expect(d.type).to.be("table"),c.expect(d.rows).to.eql([[1443454528e3,"test","","testjob",3846],[1443454529e3,"test","localhost:8080","otherjob",3847]]),c.expect(d.columns).to.eql([{text:"Time",type:"time"},{text:"__name__"},{text:"instance"},{text:"job"},{text:"Value"}])})})})}}});