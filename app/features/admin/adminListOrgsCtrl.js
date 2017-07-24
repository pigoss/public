/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular"],function(a){"use strict";var b=a.module("grafana.controllers");b.controller("AdminListOrgsCtrl",["$scope","backendSrv","navModelSrv",function(a,b,c){a.init=function(){a.navModel=c.getAdminNav(),a.getOrgs()},a.getOrgs=function(){b.get("/api/orgs").then(function(b){a.orgs=b})},a.deleteOrg=function(c){a.appEvent("confirm-modal",{title:"Delete",text:"Do you want to delete organization "+c.name+"?",text2:"All dashboards for this organization will be removed!",icon:"fa-trash",yesText:"Delete",onConfirm:function(){b.delete("/api/orgs/"+c.id).then(function(){a.getOrgs()})}})},a.init()}])});