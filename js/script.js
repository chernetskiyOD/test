/**
var $shadow = $('#shadow'),
    tl = new TimelineMax({repeat: -1});

tl.to($shadow, 4, {left: "75%", ease:Power0.easeInOut})
  .to($shadow, 1, {rotationY: "+=180"})
  .to($shadow, 4, {left: "25%", ease:Power0.easeInOut})
  .to($shadow, 1, {rotationY: "+=180"});
**/


/** Hamburger **/

$(document).ready(menu);

function menu() {
  $('#menu-icon-shape').on('click', function() {
    $('#menu-icon-shape').toggleClass('active');
    $('#top, #middle, #bottom').toggleClass('active');
    $('#overlay-nav').toggleClass('active');
  });
}