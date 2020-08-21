

$(document).ready(function(){           /* Fonction qui sert à faire apparaître les liens Google Map quand on clique sur l'un des sports */
  $("#flip1").click(function(){         /* S'active quand on clique sur le premier sport */
    $("#panel1").slideToggle("slow");   /* Le lien associé au premier sport se révèle */
    $("#panel2").slideUp("slow");       /* Si un autre lien était déjà visible, il se rangera */
    $("#panel3").slideUp("slow");
    $("#panel4").slideUp("slow");
    $("#panel5").slideUp("slow");
    $("#panel6").slideUp("slow");
  });
});
$(document).ready(function(){
  $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
    $("#panel1").slideUp("slow");
    $("#panel3").slideUp("slow");
    $("#panel4").slideUp("slow");
    $("#panel5").slideUp("slow");
    $("#panel6").slideUp("slow");
  });
});
$(document).ready(function(){
  $("#flip3").click(function(){
    $("#panel3").slideToggle("slow");
    $("#panel1").slideUp("slow");
    $("#panel2").slideUp("slow");
    $("#panel4").slideUp("slow");
    $("#panel5").slideUp("slow");
    $("#panel6").slideUp("slow");
  });
});
$(document).ready(function(){
  $("#flip4").click(function(){
    $("#panel4").slideToggle("slow");
    $("#panel1").slideUp("slow");
    $("#panel2").slideUp("slow");
    $("#panel3").slideUp("slow");
    $("#panel5").slideUp("slow");
    $("#panel6").slideUp("slow");
  });
});
$(document).ready(function(){
  $("#flip5").click(function(){
    $("#panel5").slideToggle("slow");
    $("#panel1").slideUp("slow");
    $("#panel2").slideUp("slow");
    $("#panel3").slideUp("slow");
    $("#panel4").slideUp("slow");
    $("#panel6").slideUp("slow");
  });
});
$(document).ready(function(){
  $("#flip6").click(function(){
    $("#panel6").slideToggle("slow");
    $("#panel1").slideUp("slow");
    $("#panel2").slideUp("slow");
    $("#panel3").slideUp("slow");
    $("#panel4").slideUp("slow");
    $("#panel5").slideUp("slow");
  });
});


