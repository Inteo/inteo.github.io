const constantaJSCore = (function () {
  return {
    init: function() {
      this.fixMenu();
    },
    showServicesMenu: function() {
      $('[data-open-menu]').addClass('active');
      $('[data-menu]').addClass('active');
      $('.navigation-fixed').addClass('active');
      //$('body').addClass('no-scroll');
    },
    hideServicesMenu: function() {
      $('[data-open-menu]').removeClass('active');
      $('[data-menu]').removeClass('active');
      $('.navigation-fixed').removeClass('active');
      //$('body').removeClass('no-scroll');
    },
    fixMenu: function() {
      const scrollY = $(document).scrollTop(),
        headerHeight = Math.round($('.top-navigation').outerHeight()) + Math.round($('.intro').outerHeight());
      $('body')[scrollY >= headerHeight  ? 'addClass' : 'removeClass']('is-fixed-menu');
    }
  }
})();

$(document).ready(function(){
  constantaJSCore.init();
  $('[data-open-menu]').click(function(){
    if ($(this).hasClass('active'))
      constantaJSCore.hideServicesMenu();
    else
      constantaJSCore.showServicesMenu();
    return false;
  });
  $(document).click(function(event) {
    const $target = $(event.target);
    if(!$target.closest('[data-menu]').length &&
      $('[data-menu]').is(".active")) {
      constantaJSCore.hideServicesMenu();
    }
  });
  $(window).scroll(function(e) {
    constantaJSCore.fixMenu();
  });
});