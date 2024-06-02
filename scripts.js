$(document).ready( function() {
  $("#front").click(function(){
    $("#inner").addClass("flip");
  });

  $("#back").click(function(){
    //$("#inner").removeClass("flip");
    if($("#back").hasClass("open")){
      $("#back").removeClass("open")
    }else{
      $("#back").addClass("open");

      setTimeout(function(){
        $(".content-con").removeClass("hide");
      },300);
      
    }
  });

  $("#btnclose").click(function(){
    $(".content-con").addClass("hide");
    setTimeout(function(){
          $("#back").removeClass("open");
    },400);
    setTimeout(function(){
      $("#inner").removeClass("flip");
    },900);
  });
});

