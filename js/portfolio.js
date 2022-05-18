/* Sidenav initialization */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

/* Parallax initialization */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});

/* Carousel initialization
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel')
  M.Carousel.init(elems,{
        indicators: true})
});
*/