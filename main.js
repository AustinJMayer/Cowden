$(document).ready(function() {
  if ($(window).width() <= 991) {
  } else {
    $('nav ul li a[href*="#"]').click(function(e) {
      e.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        500,
        "linear"
      );
    });
    //scroll button//
    // $(function() {
    //   $(".scroll-down").click(function() {
    //     $("html, body").animate(
    //       { scrollTop: $("section#examples").offset().top },
    //       "slow"
    //     );
    //     return false;
    //   });
    // });

    //Email Collapsable//
    $("#box-email .img-box, #email-text").on("click", function() {
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
      $("#email-close").fadeIn(400);
    });

    //Email Close button//
    $("#email-close").on("click", function() {
      $("#box-email h2").fadeIn(400);
      $("#box-email .img-box-2").animate({
        left: "1%",
        marginTop: "3em"
      });
      $("#box-email .img-box-3").animate({
        left: "2%",
        marginTop: "4em"
      });
      $("#email-close").fadeOut(400);
    });
    //Print Collapsable//
    $("#box-print .img-box, #print-text").on("click", function() {
      $("#box-print h2").fadeOut(400);
      $("#box-print .img-box-2, #box-print .img-box-3").animate({
        marginTop: "2em"
      });
      $("#box-print .img-box-2").animate({
        left: "18%"
      });
      $("#box-print .img-box-3").animate({
        left: "38%"
      });
      $("#print-close").fadeIn(400);
    });

    //Print Close button//
    $("#print-close").on("click", function() {
      $("#box-print h2").fadeIn(400);
      $("#box-print .img-box-2").animate({
        left: "1%",
        marginTop: "3em"
      });
      $("#box-print .img-box-3").animate({
        left: "2%",
        marginTop: "4em"
      });
      $("#print-close").fadeOut(400);
    });
    //Radio Collapsable//
    $("#box-radio .img-box, #radio-text").on("click", function() {
      $("#box-radio h2").fadeOut(400);
      $("#box-radio .img-box-2, #box-radio .img-box-3").animate({
        marginTop: "2em"
      });
      $("#box-radio .img-box-2").animate({
        left: "18%"
      });
      $("#box-radio .img-box-3").animate({
        left: "38%"
      });
      $("#radio-close").fadeIn(400);
    });

    //Radio Close button//
    $("#radio-close").on("click", function() {
      $("#box-radio h2").fadeIn(400);
      $("#box-radio .img-box-2").animate({
        left: "1%",
        marginTop: "3em"
      });
      $("#box-radio .img-box-3").animate({
        left: "2%",
        marginTop: "4em"
      });
      $("#radio-close").fadeOut(400);
    });
    //Television collapsable//
    $("#box-tv .img-box, #tv-text").on("click", function() {
      $("#box-tv h2").fadeOut(400);
      $("#box-tv .img-box-2, #box-tv .img-box-3").animate({
        marginTop: "2em"
      });
      $("#box-tv .img-box-2").animate({
        left: "18%"
      });
      $("#box-tv .img-box-3").animate({
        left: "38%"
      });
      $("#tv-close").fadeIn(400);
    });

    //Television Close button//
    $("#tv-close").on("click", function() {
      $("#box-tv h2").fadeIn(400);
      $("#box-tv .img-box-2").animate({
        left: "1%",
        marginTop: "3em"
      });
      $("#box-tv .img-box-3").animate({
        left: "2%",
        marginTop: "4em"
      });
      $("#tv-close").fadeOut(400);
    });
    //Web Collapsable//
    $("#box-web .img-box, #web-text").on("click", function() {
      $("#box-web h2").fadeOut(400);
      $("#box-web .img-box-2, #box-web .img-box-3").animate({
        marginTop: "2em"
      });
      $("#box-web .img-box-2").animate({
        left: "18%"
      });
      $("#box-web .img-box-3").animate({
        left: "38%"
      });
      $("#web-close").fadeIn(400);
    });

    //Web Close button//
    $("#web-close").on("click", function() {
      $("#box-web h2").fadeIn(400);
      $("#box-web .img-box-2").animate({
        left: "1%",
        marginTop: "3em"
      });
      $("#box-web .img-box-3").animate({
        left: "2%",
        marginTop: "4em"
      });
      $("#web-close").fadeOut(400);
    });

    //Anchor unclickable until event//
    $('.img-link').on('click', function(){
      if ($(this).hasClass('active-link')){
        
      }
    })

  }
});
