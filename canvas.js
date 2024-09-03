

$(document).ready(function(){
    $(window).scroll(function(){

        $(".navbar").toggleClass('bg',$(this).scrollTop()>100);
      
      });


      var typed = new Typed('.tt',{


        strings:["Be","The Biggest WordPress","And Woo Commerce Theme","With 650+ Pre built Websites"],

        typeSpeed:100,
        loop:true



      });

      $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration:30000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

      wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // change this if you are not using animate.css
            offset:       0,          // default
            mobile:       true,       // keep it on mobile
            live:         true        // track if element updates
          }
        )
       wow.init();

    
    
    
    
    


});
