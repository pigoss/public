/*! grafana - v5.0.0-pre1 - 2017-07-24
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["jquery","angular","lodash"],function(a,b,c){"use strict";var d=a(window);return a.fn.place_tt=function(){var e={offset:5};return function(f,g,h){return h=a.extend(!0,{},e,h),this.each(function(){var e,i,j=a(this);j.addClass("grafana-tooltip"),a("#tooltip").remove(),j.appendTo(document.body),h.compile&&b.element(document).injector().invoke(["$compile","$rootScope",function(a,b){var d=b.$new(!0);c.extend(d,h.scopeData),a(j)(d),d.$digest(),d.$destroy()}]),e=j.outerWidth(!0),i=j.outerHeight(!0),j.css("left",f+h.offset+e>d.width()?f-h.offset-e:f+h.offset),j.css("top",g+h.offset+i>d.height()?g-h.offset-i:g+h.offset)})}}(),a});