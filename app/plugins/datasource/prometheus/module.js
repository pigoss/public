/*! grafana - v5.0.0-pre1 - 2017-07-21
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./datasource","./query_ctrl"],function(a,b){"use strict";var c,d,e,f;b&&b.id;return{setters:[function(a){c=a},function(a){d=a}],execute:function(){a("Datasource",c.PrometheusDatasource),a("QueryCtrl",d.PrometheusQueryCtrl),e=function(){function a(){}return a.templateUrl="partials/config.html",a}(),a("ConfigCtrl",e),f=function(){function a(){}return a.templateUrl="partials/annotations.editor.html",a}(),a("AnnotationsQueryCtrl",f)}}});