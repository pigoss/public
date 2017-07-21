/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/config","lodash","../../core_module"],function(a,b){"use strict";function c(){return{restrict:"E",templateUrl:"public/app/core/components/search/search.html",controller:g,bindToController:!0,controllerAs:"ctrl",scope:{}}}b&&b.id;a("searchDirective",c);var d,e,f,g;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a,b,c,d,e,f){this.$scope=a,this.$location=b,this.$timeout=c,this.backendSrv=d,this.contextSrv=e,this.$rootScope=f,f.onAppEvent("show-dash-search",this.openSearch.bind(this),a),f.onAppEvent("hide-dash-search",this.closeSearch.bind(this),a)}return a.$inject=["$scope","$location","$timeout","backendSrv","contextSrv","$rootScope"],a.prototype.closeSearch=function(){this.isOpen=this.ignoreClose,this.openCompleted=!1},a.prototype.openSearch=function(a,b){var c=this;return this.isOpen?void(this.isOpen=!1):(this.isOpen=!0,this.giveSearchFocus=0,this.selectedIndex=-1,this.results=[],this.query={query:"",tag:[],starred:!1},this.currentSearchId=0,this.ignoreClose=!0,b&&b.starred&&(this.query.starred=!0),b&&b.tagsMode?this.$timeout(function(){c.ignoreClose=!1,c.giveSearchFocus=c.giveSearchFocus+1,c.getTags()},100):void this.$timeout(function(){c.openCompleted=!0,c.ignoreClose=!1,c.giveSearchFocus=c.giveSearchFocus+1,c.search()},100))},a.prototype.keyDown=function(a){if(27===a.keyCode&&this.closeSearch(),40===a.keyCode&&this.moveSelection(1),38===a.keyCode&&this.moveSelection(-1),13===a.keyCode){if(this.tagsMode){var b=this.results[this.selectedIndex];return void(b&&this.filterByTag(b.term,null))}var c=this.results[this.selectedIndex];c&&(this.$location.search({}),this.$location.path(c.url))}},a.prototype.moveSelection=function(a){var b=(this.results||[]).length,c=this.selectedIndex+a;this.selectedIndex=(c%=b)<0?c+b:c},a.prototype.searchDashboards=function(){var a=this;this.tagsMode=!1,this.currentSearchId=this.currentSearchId+1;var b=this.currentSearchId;return this.backendSrv.search(this.query).then(function(c){b<a.currentSearchId||(a.results=e.default.map(c,function(a){return a.url="dashboard/"+a.uri,a}),a.queryHasNoFilters()&&a.results.unshift({title:"Home",url:d.default.appSubUrl+"/",type:"dash-home"}))})},a.prototype.queryHasNoFilters=function(){var a=this.query;return""===a.query&&a.starred===!1&&0===a.tag.length},a.prototype.filterByTag=function(a,b){this.query.tag.push(a),this.search(),this.giveSearchFocus=this.giveSearchFocus+1,b&&(b.stopPropagation(),b.preventDefault())},a.prototype.removeTag=function(a,b){this.query.tag=e.default.without(this.query.tag,a),this.search(),this.giveSearchFocus=this.giveSearchFocus+1,b.stopPropagation(),b.preventDefault()},a.prototype.getTags=function(){var a=this;return this.backendSrv.get("/api/dashboards/tags").then(function(b){a.tagsMode=!a.tagsMode,a.results=b,a.giveSearchFocus=a.giveSearchFocus+1,a.tagsMode||a.search()})},a.prototype.showStarred=function(){this.query.starred=!this.query.starred,this.giveSearchFocus=this.giveSearchFocus+1,this.search()},a.prototype.search=function(){this.showImport=!1,this.selectedIndex=0,this.searchDashboards()},a}(),a("SearchCtrl",g),f.default.directive("dashboardSearch",c)}}});