/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./admin_list_users_ctrl","./adminListOrgsCtrl","./adminEditOrgCtrl","./adminEditUserCtrl","app/core/core_module"],function(a,b){"use strict";var c,d,e,f,g;b&&b.id;return{setters:[function(a){c=a},function(a){},function(a){},function(a){},function(a){d=a}],execute:function(){e=function(){function a(a,b,c){this.navModel=c.getAdminNav(),b.get("/api/admin/settings").then(function(b){a.settings=b})}return a.$inject=["$scope","backendSrv","navModelSrv"],a}(),f=function(){function a(a){this.navModel=a.getAdminNav()}return a.$inject=["navModelSrv"],a}(),g=function(){function a(a,b){var c=this;this.navModel=b.getAdminNav(),a.get("/api/admin/stats").then(function(a){c.stats=a})}return a.$inject=["backendSrv","navModelSrv"],a}(),a("AdminStatsCtrl",g),d.default.controller("AdminSettingsCtrl",e),d.default.controller("AdminHomeCtrl",f),d.default.controller("AdminStatsCtrl",g),d.default.controller("AdminListUsersCtrl",c.default)}}});