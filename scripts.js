var currentpage = 0;
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
  reloadpagination();
  function reloadpagination(){
    if(currentpage == 0){
      $("#btnLeft").css("visibility","hidden");
    }else{
      $("#btnLeft").css("visibility","visible");
    }
    if($(".content").length > 1 && ((currentpage+1) < $(".content").length)){
      $("#btnRight").css("visibility","visible");
    }else{
      $("#btnRight").css("visibility","hidden");
    }
  }

  $("#btnRight").click(function(){
    currentpage += 1;
    $(".content").each(function(){
      if($(this).hasClass("selected")){
        $(this).removeClass("selected")
      }
    });

    $(".content").eq(currentpage).addClass("selected");
    reloadpagination();
  });

  $("#btnLeft").click(function(){
    currentpage -= 1;
    $(".content").each(function(){
      if($(this).hasClass("selected")){
        $(this).removeClass("selected")
      }
    });

    $(".content").eq(currentpage).addClass("selected");
    reloadpagination();
  })

  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }

});

