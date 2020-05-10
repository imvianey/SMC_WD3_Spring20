$(document).ready(function() {

$('.sky-fade').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });

  });