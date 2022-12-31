const letras = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', ' '
]

var total = letras.length;

//Eventos
let encriptar = document.getElementById("botCripto");
encriptar.addEventListener('click', criptografar);

let descriptar = document.getElementById("botDescripto");
descriptar.addEventListener('click', descriptografar);

let limpa = document.getElementById('botLimpar');
limpa.addEventListener('click', limpar);

let copiarTexto = document.getElementById("botCopiar");
copiarTexto.addEventListener('click', copiar);

let controle = document.getElementById("inivel");
controle.addEventListener('input', () =>{
    document.getElementById("output").innerHTML = controle.value;
})

//Funções
function criptografar(){
    let texto = "";
    
    let indice = Number(document.getElementById('inivel').value);
    let input = document.getElementById("inserir").value.toUpperCase();
    let saida = document.getElementById("resultado");
    
    for (let i=0; i<input.length; i++){
        let analise = letras.indexOf(input[i]) + indice;

        if (analise > total-1){
            analise -= total;
        }

        if (letras[analise] == ' '){
            texto += '-';
        }else{
            texto += letras[analise];
        }
    }
    saida.value = texto;
}

function descriptografar(){
    let texto = "";

    let indice = Number(document.getElementById('inivel').value);
    let input = document.getElementById("inserir").value.toUpperCase().replaceAll('-',' ');
    let saida = document.getElementById("resultado");
    
    for (let i=0; i<input.length; i++){
        let analise = letras.indexOf(input[i]) - indice;

        if (analise < 0){
            analise += total;
        }
        texto += letras[analise];
    }
    saida.value = texto;
}

function limpar(){
    document.getElementById("inserir").value = "";
    document.getElementById("resultado").value = "";
}

function copiar(){
    let textoCopiado = document.getElementById("resultado");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
}