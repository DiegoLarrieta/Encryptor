document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el input y el área de mensaje
    const input = document.querySelector('.js-input');
    const texto = document.querySelector('.js-message');


    //Aplicar funciones de Encriptar

    function buttonEncript(){
        const textoEncriptado = encriptar(input.value);
        texto.value = textoEncriptado;
        input.value = "";
    }

    function encriptar(stringEncriptado){
        let matrizEcriptacion = [["a","zb"],["e","xc"],["i","yd"],["o","vf"],["u","tg"]];
        stringEncriptado = stringEncriptado.toLowerCase();

        for(let i = 0 ; i<matrizEcriptacion.length;i++){
            if(stringEncriptado.includes(matrizEcriptacion[i][0])){
                stringEncriptado = stringEncriptado.replaceAll(matrizEcriptacion[i][0],matrizEcriptacion[i][1]);
            }
        }
        return stringEncriptado;
    }


    // Aplicar funciones de Desencriptado

    function buttonDesencript() {
        const textoDesencriptado = desencriptar(texto.value);
        texto.value = textoDesencriptado;
    }

    function desencriptar(stringDesencriptado){
        let matrizEcriptacion = [["a","zb"],["e","xc"],["i","yd"],["o","vf"],["u","tg"]];
        stringDesencriptado = stringDesencriptado.toLowerCase();
        
        for(let i=0; i < matrizEcriptacion.length; i++ ){
            if(stringDesencriptado.includes(matrizEcriptacion[i][1])){
                stringDesencriptado = stringDesencriptado.replaceAll(matrizEcriptacion[i][1],matrizEcriptacion[i][0]);
            }
        }
        return stringDesencriptado;

    }

    function copiarTexto(){
        texto.select();
        texto.exeComand('copy');
    }
    // Asociar eventos a los botones
    document.querySelector('.js-button-encriptar').addEventListener('click', buttonEncript);
    document.querySelector('.js-button-desencriptar').addEventListener('click', buttonDesencript);
});