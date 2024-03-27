let entrada = document.getElementById('Digitavel');
let botaoCriptografar = document.getElementById('cript');
let resultado = document.getElementById('area-resultado');
let botaoDescriptografar= document.getElementById('descript');
let botaoCopiar = document.getElementById('copiar-texto');

function encriptografar(texto) {
    const encriptar = texto.split('').map((letra) => {
        switch (letra) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return letra;
        }
    }).join('');
    return encriptar;
}

function descriptografar(texto){
    return texto
    .replaceAll('ai','a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober','o')
    .replaceAll('ufat', 'u');
}

function copiarTexto(){
    let textoCopiado = resultado.textContent;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado");
}

botaoCriptografar.addEventListener('click', () => {
    let texto = entrada.value;
    let textoCript = encriptografar(texto);
    resultado.textContent = textoCript;
    entrada.value = '';
});

botaoDescriptografar.addEventListener('click', () =>{
    let texto = entrada.value;
    let textoDescript = descriptografar(texto);
    resultado.textContent = textoDescript;
    entrada.value = '';
});

botaoCopiar.addEventListener('click', () =>{
    copiarTexto();
    resultado.textContent = '';
});