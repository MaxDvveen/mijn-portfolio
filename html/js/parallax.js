$(document).ready(function() {
    var amountMove = 100;
    var height = amountMove / $(window).height();
    var width = amountMove / $(window).width();
    $("#bg").mousemove(function(e) {
      var pageX = e.pageX - ($(window).width() / 2);
      var pageY = e.pageY - ($(window).height() / 2);
      var newpageX = width * pageX * -1 - 55;
      var newpageY = height * pageY * -1 - 50;
      $('#bg').css("background-position", newpageX + "px " + newpageY + "px");
    });
  });