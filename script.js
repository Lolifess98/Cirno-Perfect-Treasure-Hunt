   $(".button1").click(function() {
  $(".button1").text("????????");
  
});

 $(".button1").dblclick(function() {
  $(".button1").text("Now click the text.");
  $(".hiddentext").fadeIn("Hey! the button said click me.");
  $(".hiddentext").text("Hey! the button said click me.");
});

   $(".hiddentext").click(function() {
   $(".hiddentext").text("Hey, that Cirno isn't who you think she is. Don't believe me? Click her.");
   
});
    
    
    
    
     $(".cirno").click(function() {
      $(".cirno").attr("src", "https://i.redd.it/t705giyzygi01.png");
      $(".cirnospeech").text("SAYORI!?");
      $(".cirnospeech2").text("YOU WERE CIRNO THIS WHOLE TIME!?");
      $(".cirnospeech").css("color", "black");
});

     $(".cirno").dblclick(function() {
     $(".cirnospeech").text("Yeah, I was.");
     $(".cirnospeech2").text("Also, there is no treasure, I lied.");
});