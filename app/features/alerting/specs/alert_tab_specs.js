/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../alert_tab_ctrl"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){c.describe("AlertTabCtrl",function(){var a={ctrl:{}};c.describe("with null parameters",function(){c.it("can be created",function(){var b=new d.AlertTabCtrl(a,null,null,null,null,null,null,null);c.expect(b).to.not.be(null)})})})}}});