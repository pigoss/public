/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash"],function(a,b){"use strict";var c=a.module("grafana.directives"),d={"external link":"fa-external-link",dashboard:"fa-th-large",question:"fa-question",info:"fa-info",bolt:"fa-bolt",doc:"fa-file-text-o",cloud:"fa-cloud"};c.directive("dashLinksEditor",function(){return{restrict:"E",controller:"DashLinkEditorCtrl",templateUrl:"public/app/features/dashlinks/editor.html",link:function(){}}}),c.directive("dashLinksContainer",function(){return{scope:{links:"="},restrict:"E",controller:"DashLinksContainerCtrl",template:'<dash-link ng-repeat="link in generatedLinks" link="link"></dash-link>',link:function(){}}}),c.directive("dashLink",["$compile","linkSrv",function(a,b){return{restrict:"E",link:function(c,d){function e(){var a=b.getAnchorInfo(f);j.text(a.title),h.attr("href",a.href)}var f=c.link,g='<div class="gf-form"><a class="pointer gf-form-label" data-placement="bottom"'+(f.asDropdown?' ng-click="fillDropdown(link)" data-toggle="dropdown"':"")+"><i></i> <span></span></a>";f.asDropdown&&(g+='<ul class="dropdown-menu" role="menu"><li ng-repeat="dash in link.searchHits"><a href="{{dash.url}}">{{dash.title}}</a></li></ul>'),g+="</div>",d.html(g),a(d.contents())(c);var h=d.find("a"),i=d.find("i"),j=d.find("span");d.find("a").tooltip({title:c.link.tooltip,html:!0,container:"body"}),i.attr("class","fa fa-fw "+c.link.icon),h.attr("target",c.link.target),f.asDropdown&&c.$last&&d.find(".dropdown-menu").addClass("pull-right"),e(),c.$on("refresh",e)}}}]),c.controller("DashLinksContainerCtrl",["$scope","$rootScope","$q","backendSrv","dashboardSrv","linkSrv",function(a,c,e,f,g,h){function i(b){return"dashboards"===b.type?b.tags?b.asDropdown?e.when([{title:b.title,tags:b.tags,keepTime:b.keepTime,includeVars:b.includeVars,icon:"fa fa-bars",asDropdown:!0}]):a.searchDashboards(b,7):(console.log("Dashboard link missing tag"),e.when([])):"link"===b.type?e.when([{url:b.url,title:b.title,icon:d[b.icon],tooltip:b.tooltip,target:b.targetBlank?"_blank":"_self",keepTime:b.keepTime,includeVars:b.includeVars}]):e.when([])}function j(){var c=b.map(a.links,i);e.all(c).then(function(c){a.generatedLinks=b.flatten(c)})}var k=g.getCurrent().id;a.searchDashboards=function(a,c){return f.search({tag:a.tags,limit:c}).then(function(c){return b.reduce(c,function(b,c){return c.id!==k&&b.push({title:c.title,url:"dashboard/"+c.uri,icon:"fa fa-th-large",keepTime:a.keepTime,includeVars:a.includeVars}),b},[])})},a.fillDropdown=function(c){a.searchDashboards(c,100).then(function(a){b.each(a,function(a){a.url=h.getLinkUrl(a)}),c.searchHits=a})},j(),c.onAppEvent("dash-links-updated",j,a)}]),c.controller("DashLinkEditorCtrl",["$scope","$rootScope",function(a,c){a.iconMap=d,a.dashboard.links=a.dashboard.links||[],a.addLink=function(){a.dashboard.links.push({type:"dashboards",icon:"external link"}),a.dashboard.updateSubmenuVisibility(),a.updated()},a.moveLink=function(c,d){b.move(a.dashboard.links,c,c+d),a.updated()},a.updated=function(){c.appEvent("dash-links-updated")},a.deleteLink=function(b){a.dashboard.links.splice(b,1),a.dashboard.updateSubmenuVisibility(),a.updated()}}])});