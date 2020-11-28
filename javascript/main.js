
jQuery(document).ready(function(){

    "use strict"
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01,
      });

      var typed = new Typed('#typed', {
        strings: [" <strong>i love</strong> <strong class='primary'> coding.</strong>", 
        " <strong>and to </strong> <strong class='primary'> share !!.</strong>"],
        backSpeed:40,
        typeSpeed:40,
        loop:true
      });

});