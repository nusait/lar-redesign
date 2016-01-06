define(['jquery'], function ($) {
  var $el = $('<a href="https://www.google.com">Quick Exit</a>');
  $el.css({
    'display': 'block',
    'text-decoration': 'none',
    'position': 'fixed',
    'z-index': '999999',
    'right': '10px',
    'bottom': '0',
    'color': 'white',
    'background-color': 'red',
    'padding': '10px 30px',
    'text-align': 'center'
  });

  var quickExit = {
    initialize: function () {
      if ($('.stamp.quick-exit').length) {
        $('body').append($el);
      }
    }
  }

  return quickExit;
});
