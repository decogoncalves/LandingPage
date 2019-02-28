$(document).scroll(function() {
    if ($(this).scrollTop() > 300) { //Adjust 150
      $('nav').addClass('shrinked');
    } else {
      $('nav').removeClass('shrinked');
    }
  });

  $(document).scroll(function() {
    if ($(this).scrollTop() > 300) { //Adjust 150
      $('.arrow-up').addClass('shrinked');
    } else {
      $('.arrow-up').removeClass('shrinked');
    }
  });