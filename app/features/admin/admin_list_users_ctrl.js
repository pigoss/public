/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register([],function(a,b){"use strict";var c;b&&b.id;return{setters:[],execute:function(){c=function(){function a(a,b,c){this.$scope=a,this.backendSrv=b,this.navModelSrv=c,this.pages=[],this.perPage=50,this.page=1,this.showPaging=!1,this.navModel=c.getAdminNav(),this.query="",this.getUsers()}return a.$inject=["$scope","backendSrv","navModelSrv"],a.prototype.getUsers=function(){var a=this;this.backendSrv.get("/api/users/search?perpage="+this.perPage+"&page="+this.page+"&query="+this.query).then(function(b){a.users=b.users,a.page=b.page,a.perPage=b.perPage,a.totalPages=Math.ceil(b.totalCount/b.perPage),a.showPaging=a.totalPages>1,a.pages=[];for(var c=1;c<a.totalPages+1;c++)a.pages.push({page:c,current:c===a.page})})},a.prototype.navigateToPage=function(a){this.page=a.page,this.getUsers()},a.prototype.deleteUser=function(a){var b=this;this.$scope.appEvent("confirm-modal",{title:"Delete",text:"Do you want to delete "+a.login+"?",icon:"fa-trash",yesText:"Delete",onConfirm:function(){b.backendSrv.delete("/api/admin/users/"+a.id).then(function(){b.getUsers()})}})},a}(),a("default",c)}}});