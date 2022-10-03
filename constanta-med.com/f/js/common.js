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
});