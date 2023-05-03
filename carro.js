//código do carro

let xCarro = 420; //600;

function mostraCarro() {
    image(imagemDoCarro, xCarro, 40, 50, 40);
}

function movimentaCarro() {
   // xCarro = xCarro - 2; reescrevi abaixo, ficou mais enxuto :)
    xCarro -= 2;
}