/*! grafana - v5.0.0-pre1 - 2017-07-13
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","moment","app/core/utils/datemath","app/core/utils/kbn","app/features/templating/variable","./annotation_query"],function(a,b,c,d,e,f,g){"use strict";function h(c,h,i,j){function k(a,c,d){var e=/\{\{(.+?)\}\}/g,f=c.alias||"{{metric}}_{{stat}}",g={region:j.replace(c.region,d),namespace:j.replace(c.namespace,d),metric:j.replace(c.metricName,d)},h={};b.each(b.keys(c.dimensions),function(a){var b=j.replace(a,d),e=j.replace(c.dimensions[a],d);h[b]=e}),b.extend(g,h);var i=1e3*c.period;return b.map(c.statistics,function(c){var d=!b.includes(l.standardStatistics,c),h=[],j=null;b.chain(a.Datapoints).sortBy(function(a){return a.Timestamp}).each(function(a){var b=new Date(a.Timestamp).getTime();j&&b-j>i&&h.push([null,j+i]),j=b,d?h.push([a.ExtendedStatistics[c],b]):h.push([a[c],b])}).value(),g.stat=c;var k=f.replace(e,function(a,b){return g[b]?g[b]:b});return{target:k,datapoints:h}})}this.type="cloudwatch",this.name=c.name,this.supportMetrics=!0,this.proxyUrl=c.url,this.defaultRegion=c.jsonData.defaultRegion,this.standardStatistics=["Average","Maximum","Minimum","Sum","SampleCount"];var l=this;this.query=function(c){var d=l.convertToCloudWatchTime(c.range.from,!1),e=l.convertToCloudWatchTime(c.range.to,!0),f=[];if(c=a.copy(c),c.targets=this.expandTemplateVariable(c.targets,c.scopedVars,j),b.each(c.targets,function(a){if(!a.hide&&a.namespace&&a.metricName&&!b.isEmpty(a.statistics)){var g={};g.region=j.replace(a.region,c.scopedVars),g.namespace=j.replace(a.namespace,c.scopedVars),g.metricName=j.replace(a.metricName,c.scopedVars),g.dimensions=l.convertDimensionFormat(a.dimensions,c.scopedVars),g.statistics=a.statistics;var h=Math.round(Date.now()/1e3),i=this._getPeriod(a,g,c,d,e,h);a.period=i,g.period=i,f.push(g)}}.bind(this)),b.isEmpty(f)){var g=h.defer();return g.resolve({data:[]}),g.promise}var i=b.map(f,function(a){return this.performTimeSeriesQuery(a,d,e)}.bind(this));return h.all(i).then(function(a){var d=[];return b.each(a,function(a,b){var e=k(a,c.targets[b],c.scopedVars);d=d.concat(e)}),{data:d}})},this._getPeriod=function(a,b,c,d,f,g){var h,i=f-d,k=86400,l=60;return g-d>15*k?l=h=300:g-d>63*k?l=h=3600:g-d>455*k?l=h=3600:h=a.period?/^\d+$/.test(a.period)?parseInt(a.period,10):e.interval_to_seconds(j.replace(a.period,c.scopedVars)):"AWS/EC2"===b.namespace?300:60,h<60&&(h=60),i/h>=1440&&(h=Math.ceil(i/1440/l)*l),h},this.performTimeSeriesQuery=function(a,c,d){var e=b.filter(a.statistics,function(a){return b.includes(l.standardStatistics,a)}),f=b.reject(a.statistics,function(a){return b.includes(l.standardStatistics,a)});return this.awsRequest({region:a.region,action:"GetMetricStatistics",parameters:{namespace:a.namespace,metricName:a.metricName,dimensions:a.dimensions,statistics:e,extendedStatistics:f,startTime:c,endTime:d,period:a.period}})},this.getRegions=function(){return this.awsRequest({action:"__GetRegions"})},this.getNamespaces=function(){return this.awsRequest({action:"__GetNamespaces"})},this.getMetrics=function(a,b){return this.awsRequest({action:"__GetMetrics",region:b,parameters:{namespace:j.replace(a)}})},this.getDimensionKeys=function(a,b){return this.awsRequest({action:"__GetDimensions",region:b,parameters:{namespace:j.replace(a)}})},this.getDimensionValues=function(a,c,d,e,f){var g={region:j.replace(a),action:"ListMetrics",parameters:{namespace:j.replace(c),metricName:j.replace(d),dimensions:this.convertDimensionFormat(f,{})}};return this.awsRequest(g).then(function(a){return b.chain(a.Metrics).map("Dimensions").flatten().filter(function(a){return null!==a&&a.Name===e}).map("Value").uniq().sortBy().map(function(a){return{value:a,text:a}}).value()})},this.performEC2DescribeInstances=function(a,b,c){return this.awsRequest({region:a,action:"DescribeInstances",parameters:{filters:b,instanceIds:c}})},this.metricFindQuery=function(a){var c,d,e,f=function(a){return b.map(a,function(a){return{text:a}})},g=a.match(/^regions\(\)/);if(g)return this.getRegions();var i=a.match(/^namespaces\(\)/);if(i)return this.getNamespaces();var k=a.match(/^metrics\(([^\)]+?)(,\s?([^,]+?))?\)/);if(k)return this.getMetrics(k[1],k[3]);var l=a.match(/^dimension_keys\(([^\)]+?)(,\s?([^,]+?))?\)/);if(l)return this.getDimensionKeys(l[1],l[3]);var m=a.match(/^dimension_values\(([^,]+?),\s?([^,]+?),\s?([^,]+?),\s?([^,]+?)\)/);if(m){c=j.replace(m[1]),d=j.replace(m[2]),e=j.replace(m[3]);var n=j.replace(m[4]);return this.getDimensionValues(c,d,e,n,{})}var o=a.match(/^ebs_volume_ids\(([^,]+?),\s?([^,]+?)\)/);if(o){c=j.replace(o[1]);var p=j.replace(o[2]),q=[p];return this.performEC2DescribeInstances(c,[],q).then(function(a){var c=b.map(a.Reservations[0].Instances[0].BlockDeviceMappings,function(a){return a.Ebs.VolumeId});return f(c)})}var r=a.match(/^ec2_instance_attribute\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/);if(r){c=j.replace(r[1]);var s=JSON.parse(j.replace(r[3])),t=b.map(s,function(a,b){return{Name:b,Values:a}}),u=j.replace(r[2]);return this.performEC2DescribeInstances(c,t,null).then(function(a){var c=b.chain(a.Reservations).map(function(a){return b.map(a.Instances,u)}).flatten().uniq().sortBy().value();return f(c)})}return h.when([])},this.performDescribeAlarms=function(a,b,c,d,e){return this.awsRequest({region:a,action:"DescribeAlarms",parameters:{actionPrefix:b,alarmNamePrefix:c,alarmNames:d,stateValue:e}})},this.performDescribeAlarmsForMetric=function(a,c,d,e,f,g){var h=b.includes(l.standardStatistics,f)?f:"",i=b.includes(l.standardStatistics,f)?"":f;return this.awsRequest({region:a,action:"DescribeAlarmsForMetric",parameters:{namespace:c,metricName:d,dimensions:e,statistic:h,extendedStatistic:i,period:g}})},this.performDescribeAlarmHistory=function(a,b,c,d){return this.awsRequest({region:a,action:"DescribeAlarmHistory",parameters:{alarmName:b,startDate:c,endDate:d}})},this.annotationQuery=function(a){var b=new g(this,a.annotation,h,j);return b.process(a.range.from,a.range.to)},this.testDatasource=function(){var a=this.defaultRegion,b="AWS/Billing",c="EstimatedCharges",d={};return this.getDimensionValues(a,b,c,"ServiceName",d).then(function(){return{status:"success",message:"Data source is working",title:"Success"}})},this.awsRequest=function(a){var b={method:"POST",url:this.proxyUrl,data:a};return i.datasourceRequest(b).then(function(a){return a.data})},this.getDefaultRegion=function(){return this.defaultRegion},this.getExpandedVariables=function(c,d,e,f){var g=b.find(e.options,{selected:!0,text:"All"});return b.chain(e.options).filter(function(a){return g?"All"!==a.text:a.selected}).map(function(b){var g=a.copy(c),h={};return h[e.name]=b,g.dimensions[d]=f.replace(g.dimensions[d],h),g}).value()},this.expandTemplateVariable=function(a,c,d){var e=this;return b.chain(a).map(function(a){var g=b.findKey(a.dimensions,function(a){return d.variableExists(a)&&!b.has(c,d.getVariableName(a))});if(g){var h=b.find(d.variables,function(b){return f.containsVariable(a.dimensions[g],b.name)&&b.multi}),i=b.find(d.variables,function(b){return f.containsVariable(a.dimensions[g],b.name)});return e.getExpandedVariables(a,g,h||i,d)}return[a]}).flatten().value()},this.convertToCloudWatchTime=function(a,c){return b.isString(a)&&(a=d.parse(a,c)),Math.round(a.valueOf()/1e3)},this.convertDimensionFormat=function(a,c){return b.map(a,function(a,b){return{Name:j.replace(b,c),Value:j.replace(a,c)}})}}return h.$inject=["instanceSettings","$q","backendSrv","templateSrv"],{CloudWatchDatasource:h}});