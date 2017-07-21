/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../query_builder"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){c.describe("InfluxQueryBuilder",function(){c.describe("when building explore queries",function(){c.it("should only have measurement condition in tag keys query given query with measurement",function(){var a=new d.default({measurement:"cpu",tags:[]}),b=a.buildExploreQuery("TAG_KEYS");c.expect(b).to.be('SHOW TAG KEYS FROM "cpu"')}),c.it("should handle regex measurement in tag keys query",function(){var a=new d.default({measurement:"/.*/",tags:[]}),b=a.buildExploreQuery("TAG_KEYS");c.expect(b).to.be("SHOW TAG KEYS FROM /.*/")}),c.it("should have no conditions in tags keys query given query with no measurement or tag",function(){var a=new d.default({measurement:"",tags:[]}),b=a.buildExploreQuery("TAG_KEYS");c.expect(b).to.be("SHOW TAG KEYS")}),c.it("should have where condition in tag keys query with tags",function(){var a=new d.default({measurement:"",tags:[{key:"host",value:"se1"}]}),b=a.buildExploreQuery("TAG_KEYS");c.expect(b).to.be("SHOW TAG KEYS WHERE \"host\" = 'se1'")}),c.it("should have no conditions in measurement query for query with no tags",function(){var a=new d.default({measurement:"",tags:[]}),b=a.buildExploreQuery("MEASUREMENTS");c.expect(b).to.be("SHOW MEASUREMENTS LIMIT 100")}),c.it("should have no conditions in measurement query for query with no tags and empty query",function(){var a=new d.default({measurement:"",tags:[]}),b=a.buildExploreQuery("MEASUREMENTS",void 0,"");c.expect(b).to.be("SHOW MEASUREMENTS LIMIT 100")}),c.it("should have WITH MEASUREMENT in measurement query for non-empty query with no tags",function(){var a=new d.default({measurement:"",tags:[]}),b=a.buildExploreQuery("MEASUREMENTS",void 0,"something");c.expect(b).to.be("SHOW MEASUREMENTS WITH MEASUREMENT =~ /something/ LIMIT 100")}),c.it("should have WITH MEASUREMENT WHERE in measurement query for non-empty query with tags",function(){var a=new d.default({measurement:"",tags:[{key:"app",value:"email"}]}),b=a.buildExploreQuery("MEASUREMENTS",void 0,"something");c.expect(b).to.be("SHOW MEASUREMENTS WITH MEASUREMENT =~ /something/ WHERE \"app\" = 'email' LIMIT 100")}),c.it("should have where condition in measurement query for query with tags",function(){var a=new d.default({measurement:"",tags:[{key:"app",value:"email"}]}),b=a.buildExploreQuery("MEASUREMENTS");c.expect(b).to.be("SHOW MEASUREMENTS WHERE \"app\" = 'email' LIMIT 100")}),c.it("should have where tag name IN filter in tag values query for query with one tag",function(){var a=new d.default({measurement:"",tags:[{key:"app",value:"asdsadsad"}]}),b=a.buildExploreQuery("TAG_VALUES","app");c.expect(b).to.be('SHOW TAG VALUES WITH KEY = "app"')}),c.it("should have measurement tag condition and tag name IN filter in tag values query",function(){var a=new d.default({measurement:"cpu",tags:[{key:"app",value:"email"},{key:"host",value:"server1"}]}),b=a.buildExploreQuery("TAG_VALUES","app");c.expect(b).to.be('SHOW TAG VALUES FROM "cpu" WITH KEY = "app" WHERE "host" = \'server1\'')}),c.it("should switch to regex operator in tag condition",function(){var a=new d.default({measurement:"cpu",tags:[{key:"host",value:"/server.*/"}]}),b=a.buildExploreQuery("TAG_VALUES","app");c.expect(b).to.be('SHOW TAG VALUES FROM "cpu" WITH KEY = "app" WHERE "host" =~ /server.*/')}),c.it("should build show field query",function(){var a=new d.default({measurement:"cpu",tags:[{key:"app",value:"email"}]}),b=a.buildExploreQuery("FIELDS");c.expect(b).to.be('SHOW FIELD KEYS FROM "cpu"')}),c.it("should build show field query with regexp",function(){var a=new d.default({measurement:"/$var/",tags:[{key:"app",value:"email"}]}),b=a.buildExploreQuery("FIELDS");c.expect(b).to.be("SHOW FIELD KEYS FROM /$var/")}),c.it("should build show retention policies query",function(){var a=new d.default({measurement:"cpu",tags:[]},"site"),b=a.buildExploreQuery("RETENTION POLICIES");c.expect(b).to.be('SHOW RETENTION POLICIES on "site"')})})})}}});