/*
 jQuery animateNumber plugin v0.0.14
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/
(function(d){var r=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},g=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);d(e.elem).prop("number",a).text(f+b)}},separator:function(b,a,e){b=b||" ";
      a=a||3;e=e||"";return function(f,k){var u=0>f,c=Math.floor((u?-1:1)*f).toString(),n=d(k.elem);if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),c=[],p,s,q,t=0,g=Math.ceil(h.length/l);t<g;t++){p="";for(q=0;q<l;q++){s=t*l+q;if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;l=r(c[h]);c[h]=r(parseInt(l,10).toString());c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),f=[a],k=1,g=arguments.length;k<g;k++)f.push(arguments[k]);
  if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);


/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";
  /**
   * Detect IE browser
   * @const {boolean}
   * @private
   */var g="undefined"!=typeof document&&document.documentMode,f={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var d=t.getAttribute("data-background-image-set").split(n),u=d[0].substr(0,d[0].indexOf(" "))||d[0];// Substring before ... 1x
      u=-1===u.indexOf("url(")?"url("+u+")":u,1===d.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+d+"); background-image: image-set("+d+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function A(t){t.setAttribute("data-loaded",!0)}var m=function(t){return"true"===t.getAttribute("data-loaded")},v=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},f,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,g=e.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),m(t.target)||(r(t.target),A(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d}));for(var c,l=v(o,i),b=0;b<l.length;b++)(c=l[b]).getAttribute("data-placeholder-background")&&(c.style.background=c.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=v(o,i),e=0;e<t.length;e++)m(t[e])||(s?s.observe(t[e]):(u(t[e]),A(t[e]),g(t[e])))},triggerLoad:function(t){m(t)||(u(t),A(t),g(t))},observer:s}}});

/**
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.3
 */
;(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof module!=='undefined'&&module.exports){module.exports=factory(require('jquery'))}else{factory(jQuery)}})(function($){'use strict';var $scrollTo=$.scrollTo=function(target,duration,settings){return $(window).scrollTo(target,duration,settings)};$scrollTo.defaults={axis:'xy',duration:0,limit:true};function isWin(elem){return!elem.nodeName||$.inArray(elem.nodeName.toLowerCase(),['iframe','#document','html','body'])!==-1}function isFunction(obj){return typeof obj==='function'}$.fn.scrollTo=function(target,duration,settings){if(typeof duration==='object'){settings=duration;duration=0}if(typeof settings==='function'){settings={onAfter:settings}}if(target==='max'){target=9e9}settings=$.extend({},$scrollTo.defaults,settings);duration=duration||settings.duration;var queue=settings.queue&&settings.axis.length>1;if(queue){duration/=2}settings.offset=both(settings.offset);settings.over=both(settings.over);return this.each(function(){if(target===null){return}var win=isWin(this),elem=win?this.contentWindow||window:this,$elem=$(elem),targ=target,attr={},toff;switch(typeof targ){case 'number':case 'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,elem);case 'object':if(targ.length===0){return}if(targ.is||targ.style){toff=(targ=$(targ)).offset()}}var offset=isFunction(settings.offset)&&settings.offset(elem,targ)||settings.offset;$.each(settings.axis.split(''),function(i,axis){var Pos=axis==='x'?'Left':'Top',pos=Pos.toLowerCase(),key='scroll'+Pos,prev=$elem[key](),max=$scrollTo.max(elem,axis);if(toff){attr[key]=toff[pos]+(win?0:prev-$elem.offset()[pos]);if(settings.margin){attr[key]-=parseInt(targ.css('margin'+Pos),10)||0;attr[key]-=parseInt(targ.css('border'+Pos+'Width'),10)||0}attr[key]+=offset[pos]||0;if(settings.over[pos]){attr[key]+=targ[axis==='x'?'width':'height']()*settings.over[pos]}}else{var val=targ[pos];attr[key]=val.slice&&val.slice(-1)==='%'?parseFloat(val)/100*max:val}if(settings.limit&&/^\d+$/.test(attr[key])){attr[key]=attr[key]<=0?0:Math.min(attr[key],max)}if(!i&&settings.axis.length>1){if(prev===attr[key]){attr={}}else if(queue){animate(settings.onAfterFirst);attr={}}}});animate(settings.onAfter);function animate(callback){var opts=$.extend({},settings,{queue:true,duration:duration,complete:callback&&function(){callback.call(elem,targ,settings)}});$elem.animate(attr,opts)}})};$scrollTo.max=function(elem,axis){var Dim=axis==='x'?'Width':'Height',scroll='scroll'+Dim;if(!isWin(elem)){return elem[scroll]-$(elem)[Dim.toLowerCase()]()}var size='client'+Dim,doc=elem.ownerDocument||elem.document,html=doc.documentElement,body=doc.body;return Math.max(html[scroll],body[scroll])-Math.min(html[size],body[size])};function both(val){return isFunction(val)||$.isPlainObject(val)?val:{top:val,left:val}}$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]()},set:function(t){var curr=this.get(t);if(t.options.interrupt&&t._last&&t._last!==curr){return $(t.elem).stop()}var next=Math.round(t.now);if(curr!==next){$(t.elem)[t.prop](next);t._last=this.get(t)}}};return $scrollTo});

const constantaJSCore = (function () {
  return {
    init: function() {
      this.fixMenu();
      $(".social").clone().appendTo(".header__mobile-menu-social");
    },
    showServicesMenu: function() {
      $('[data-open-menu]').addClass('active');
      $('[data-menu]').addClass('active');
      $('.navigation-fixed').addClass('active');
      $('body').addClass('no-scroll');
    },
    hideServicesMenu: function() {
      $('[data-open-menu]').removeClass('active');
      $('[data-menu]').removeClass('active');
      $('.navigation-fixed').removeClass('active');
      $('body').removeClass('no-scroll');
    },
    showMobileMenu: function() {
      $('[data-open-mobile-menu]').addClass('active');
      $('[data-mobile-menu]').addClass('active');
      $('body').addClass('mobile-menu-active');
    },
    hideMobileMenu: function() {
      $('[data-open-mobile-menu]').removeClass('active');
      $('[data-mobile-menu]').removeClass('active');
      $('body').removeClass('mobile-menu-active');
    },
    fixMenu: function() {
      const scrollY = $(document).scrollTop(),
        headerHeight = Math.round($('.top-navigation').outerHeight()) + Math.round($('.intro').outerHeight());
      $('body')[scrollY >= headerHeight  ? 'addClass' : 'removeClass']('is-fixed-menu');
    }
  }
})();

(function($, document, window) {
      function JQueryHeader($header, options) {
        var self = this;
        self.$document = $(document);
        self.$window = $(window);
        self.$body = $("body");
        self.options = options;
        self.$header = $header;
        return self.init();
      }
      JQueryHeader.prototype.init = function() {
        var self = this;
        var offsetTop = self.$window.scrollTop();
        var curOffsetTop = 0;
        var firstScrollFromTop = true;
        var offsetTopHeader = self.$header.offset().top;
        var heightHeader = self.$header.height();
        var offsetTopFixedElement = self.$header.find(self.options.fixedElement).offset().top;
        var way = "down";
        self.$window.on("scroll", function() {
          curOffsetTop = self.$window.scrollTop();
          if (self.$body.hasClass("is-show-menu")) {
            self.$body.removeClass("is-hide-menu");
          } else {
            if ((curOffsetTop <= offsetTop) && way !== "down") {
              self.$body.removeClass("is-hide-menu");
              self.$body.removeClass("no-transition");
            } else {
              self.$body.addClass("is-hide-menu");
              constantaJSCore.hideMobileMenu();
            }
            if (curOffsetTop <= offsetTopHeader || curOffsetTop <= offsetTopFixedElement) {
              self.$body.removeClass("fixed-menu");
              firstScrollFromTop = true;
            } else if (curOffsetTop >= offsetTopHeader + heightHeader) {
              self.$body.addClass("fixed-menu");
              if (firstScrollFromTop) {
                firstScrollFromTop = false;
                self.$body.addClass("no-transition");
              }
            }
            if (curOffsetTop < offsetTop) {
              way = "up"
            } else if (curOffsetTop > offsetTop) {
              way = "down"
            }
            offsetTop = curOffsetTop;
          }
        });
      }
      ;
      $.fn.JQueryHeader = function(options) {
        options = $.extend({}, $.fn.JQueryHeader.options, options);
        this.each(function() {
          new JQueryHeader($(this),options);
        })
      }
      ;
      $.fn.JQueryHeader.options = {
        fixedElement: ".js-header-fixed-element"
      };
    }
)(window.jQuery, document, window);

$(document).ready(function(){
  constantaJSCore.init();
  //$("header").JQueryHeader();
  $('[data-open-menu]').click(function(){
    if ($(this).hasClass('active'))
      constantaJSCore.hideServicesMenu();
    else
      constantaJSCore.showServicesMenu();
    return false;
  });
  $('[data-open-mobile-menu]').click(function(){
    if ($(this).hasClass('active'))
      constantaJSCore.hideMobileMenu();
    else
      constantaJSCore.showMobileMenu();
    return false;
  });
  $('.mobile-holder').click(function(){
    constantaJSCore.hideMobileMenu();
    return false;
  });
  $('[data-messengers]').click(function(){
    $(this).closest('.dropdown').addClass('active');
  });
  $('[data-scrollto]').click(function(){
    if ($(this).hasClass('active')) return false;
    const $target = $(this).data('scrollto');
    $.scrollTo($('[data-scrollto-target="'+$target+'"]'), {
      offset: {'top': -110},
      duration: 300
    });
    return false;
  });
  $(document).click(function(event) {
    const $target = $(event.target);
    if(!$target.closest('[data-menu]').length &&
      $('[data-menu]').is(".active")) {
      constantaJSCore.hideServicesMenu();
    }
    if(!$target.closest('.dropdown').length &&
        $('[data-messengers]').closest('.dropdown').is(".active")) {
      $('[data-messengers]').closest('.dropdown').removeClass('active');
    }
  });
  $(window).scroll(function(e) {
    constantaJSCore.fixMenu();
  });

  const observer = lozad();
  observer.observe();

  tippy('[data-tippy-content]', {
    theme: 'light',
    interactive: true,
    allowHTML: true,
    appendTo: document.body,
    maxWidth: 200
  });
});
