/*
* criar um xadrez em cima do .draw
* criar um canva
* ditar o canva embaixo do xadrez
* addEventList

400/height = tamanho do pixel
*/

//variaveis
var area = document.getElementById('painting');
var button = document.getElementById('button');

//função para desenhar quadrados guias
function size(){
  temp = '';
  //pega o valor da altura e largura
  var height = document.getElementById('height').value;
  var width = document.getElementById('width').value;
  var painting = document.getElementById('painting');
  var pixel = document.getElementsByClassName('pixel');

  painting.style.width = (width*10)+"px";
  painting.style.height = (height*10)+"px";
  pixel.style.width = width+"px";
  pixel.style.height = height+"px";
  console.log(pixel);

  console.log(height);
  console.log(width);

  for (var i = 1; i <= height; i++) {
    temp += '<div class="row">'
    for (var j = 0; j <= width; j++) {
      temp += '<div class="pixel"></div>'
    }
    temp += '</div>'
    console.log(i);
  }
  area.innerHTML = temp;
}
