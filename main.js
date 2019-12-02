$(document).ready(function() {
  if ($(window).width() <= 991) {
  } else {
    $("#box-email").on("click", function() {
      $("#box-email h2").fadeOut(400);
      $("#box-email .img-box-2, #box-email .img-box-3").animate({
        marginTop: "2em"
      });
      $("#box-email .img-box-2").animate({
        left: "18%"
      });
      $("#box-email .img-box-3").animate({
        left: "38%"
      });
      $("#close-expandable").toggle(400);
    });
    //Close button//
    $("#close-expandable").on("click", function() {
      $("#box-email h2").fadeIn(400);
      $("#box-email .img-box-2").animate({
        left: "-17%",
        marginTop: "3em"
      });
      $("#box-email .img-box-3").animate({
        left: "-34%",
        marginTop: "4em"
      });
    });
  }
});
