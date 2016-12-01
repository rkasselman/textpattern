/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),/*!
	Autosize 3.0.18
	license: MIT
	http://www.jacklmoore.com/autosize
*/
function(a,b){if("function"==typeof define&&define.amd)define(["exports","module"],b);else if("undefined"!=typeof exports&&"undefined"!=typeof module)b(exports,module);else{var c={exports:{}};b(c.exports,c),a.autosize=c.exports}}(this,function(a,b){"use strict";function c(a){function b(){var b=window.getComputedStyle(a,null);"vertical"===b.resize?a.style.resize="none":"both"===b.resize&&(a.style.resize="horizontal"),i="content-box"===b.boxSizing?-(parseFloat(b.paddingTop)+parseFloat(b.paddingBottom)):parseFloat(b.borderTopWidth)+parseFloat(b.borderBottomWidth),isNaN(i)&&(i=0),h()}function c(b){var c=a.style.width;a.style.width="0px",a.offsetWidth,a.style.width=c,a.style.overflowY=b,e()}function d(a){for(var b=[];a&&a.parentNode&&a.parentNode instanceof Element;)a.parentNode.scrollTop&&b.push({node:a.parentNode,scrollTop:a.parentNode.scrollTop}),a=a.parentNode;return b}function e(){var b=a.style.height,c=d(a),e=document.documentElement&&document.documentElement.scrollTop;a.style.height="auto";var f=a.scrollHeight+i;return 0===a.scrollHeight?void(a.style.height=b):(a.style.height=f+"px",j=a.clientWidth,c.forEach(function(a){a.node.scrollTop=a.scrollTop}),void(e&&(document.documentElement.scrollTop=e)))}function h(){e();var b=window.getComputedStyle(a,null),d=Math.round(parseFloat(b.height)),f=Math.round(parseFloat(a.style.height));if(d!==f?"visible"!==b.overflowY&&c("visible"):"hidden"!==b.overflowY&&c("hidden"),k!==d){k=d;var h=g("autosize:resized");try{a.dispatchEvent(h)}catch(a){}}}if(a&&a.nodeName&&"TEXTAREA"===a.nodeName&&!f.has(a)){var i=null,j=a.clientWidth,k=null,l=function(){a.clientWidth!==j&&h()},m=function(b){window.removeEventListener("resize",l,!1),a.removeEventListener("input",h,!1),a.removeEventListener("keyup",h,!1),a.removeEventListener("autosize:destroy",m,!1),a.removeEventListener("autosize:update",h,!1),Object.keys(b).forEach(function(c){a.style[c]=b[c]}),f.delete(a)}.bind(a,{height:a.style.height,resize:a.style.resize,overflowY:a.style.overflowY,overflowX:a.style.overflowX,wordWrap:a.style.wordWrap});a.addEventListener("autosize:destroy",m,!1),"onpropertychange"in a&&"oninput"in a&&a.addEventListener("keyup",h,!1),window.addEventListener("resize",l,!1),a.addEventListener("input",h,!1),a.addEventListener("autosize:update",h,!1),a.style.overflowX="hidden",a.style.wordWrap="break-word",f.set(a,{destroy:m,update:h}),b()}}function d(a){var b=f.get(a);b&&b.destroy()}function e(a){var b=f.get(a);b&&b.update()}var f="function"==typeof Map?new Map:function(){var a=[],b=[];return{has:function(b){return a.indexOf(b)>-1},get:function(c){return b[a.indexOf(c)]},set:function(c,d){a.indexOf(c)===-1&&(a.push(c),b.push(d))},delete:function(c){var d=a.indexOf(c);d>-1&&(a.splice(d,1),b.splice(d,1))}}}(),g=function(a){return new Event(a)};try{new Event("test")}catch(a){g=function(a){var b=document.createEvent("Event");return b.initEvent(a,!0,!1),b}}var h=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(h=function(a){return a},h.destroy=function(a){return a},h.update=function(a){return a}):(h=function(a,b){return a&&Array.prototype.forEach.call(a.length?a:[a],function(a){return c(a,b)}),a},h.destroy=function(a){return a&&Array.prototype.forEach.call(a.length?a:[a],d),a},h.update=function(a){return a&&Array.prototype.forEach.call(a.length?a:[a],e),a}),b.exports=h}),/*! ========================================================================
 * Appended after third-party JavaScript. */
$(function(){"use strict";autosize($("textarea:not(.code)"))});