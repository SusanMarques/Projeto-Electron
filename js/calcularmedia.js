
// função para calcular a média
function calcular_media () {
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);
    let nota4 = Number(document.getElementById('nota4').value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4

   
    document.getElementById('resultado-media').innerHTML = 'O resultado da média é '+media
}


calcular_media;

