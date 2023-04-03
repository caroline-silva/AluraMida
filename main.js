function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);  
    
    if (elemento === null){
        console.log('Elemento ou seletor não encontrado')
    }

    if (elemento != null && elemento.localName === 'audio'){

            elemento.play();
    }

    else {
        console.log('Eemento ou seletor não encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template String
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador = contador + 1;

    tecla.onkeydown = function (evento) {

        console.log(evento)

        if (evento.code === 'Space' || evento.code === "Enter"){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove ('ativa');
    }
    
}


