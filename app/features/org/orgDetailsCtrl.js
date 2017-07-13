/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular"],function(a){"use strict";var b=a.module("grafana.controllers");b.controller("OrgDetailsCtrl",["$scope","$http","backendSrv","contextSrv","navModelSrv",function(a,b,c,d,e){a.init=function(){a.getOrgInfo(),a.navModel=e.getOrgNav(0)},a.getOrgInfo=function(){c.get("/api/org").then(function(b){a.org=b,a.address=b.address,d.user.orgName=b.name})},a.update=function(){if(a.orgForm.$valid){var b={name:a.org.name};c.put("/api/org",b).then(a.getOrgInfo)}},a.updateAddress=function(){a.addressForm.$valid&&c.put("/api/org/address",a.address).then(a.getOrgInfo)},a.init()}])});