var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function($) {
  "use strict"; 
  initTawkTo();
  
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#sideNav'
});

$('#contact').click( ()=> {
  Tawk_API.maximize();
})

})(jQuery); // End of use strict
function initTawkTo(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/5d4e16bd77aa790be32e40da/default';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
};
function summonMe(){
  Tawk_API.maximize();
}