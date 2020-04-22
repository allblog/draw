

var area = document.getElementById('painting');
var button = document.getElementById('button');

$(document).ready(function(){
  color = "black";
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  $(".colors").on("click", function(){
    color = $(this).val();
  });

  $("#button").on("click", function(event){
    height = $("#height").val();
    width = $("#width").val();

    $("#canvas").attr("height", height);
    $("#canvas").attr("width", width);
    console.log("canvas");
  });

  $("#canvas").on( "mousemove", function( event ) {
    eixoX = event.pageX - $("#canvas").offset().left;
    eixoY = event.pageY - $("#canvas").offset().top;

    //console.log("X = "+eixoX+" - Y = "+eixoY);
    $("#coordenadas").text("X = "+eixoX+" - Y = "+eixoY);


    $("#canvas").click(function(){
      context.fillStyle = color;
      context.fillRect(eixoX, eixoY, 20, 20);
    });

  });

});
