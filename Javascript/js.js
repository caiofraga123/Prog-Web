function calcula(){
    //Para coletar o conteúdo que há em um Id, usar .value
    let idadeAtual = document.getElementById('idade').value;
    let idadeMaxima = document.getElementById('idademax').value;
    let quantidadeDeLanches = document.getElementById('lanches').value;
    let quantidadeDeLanchesNecessaria = ((365 * quantidadeDeLanches) * idadeMaxima) - (idadeAtual*quantidadeDeLanches);
    let result = `A quantidade de lanches necessária será ${quantidadeDeLanchesNecessaria}`;
    document.getElementById("resultado").innerHTML = result;
}

function calcCirculo(){
    let raio = document.getElementById('raio').value;
    let comprimento = `A circunferência tem ${raio*2}`;
    document.getElementById('comprimento').innerHTML = comprimento;
    let area = `A área é ${3.14*(raio**2)}`;
    document.getElementById('area').innerHTML = area;
    let pi = `O valor de Pi é ${Math.PI}`;
    document.getElementById('pi').innerHTML = pi;
}

function trocaIdioma(){


}