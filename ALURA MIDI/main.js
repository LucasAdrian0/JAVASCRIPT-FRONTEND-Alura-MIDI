function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento ou Seletor inválido');

    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//Para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`;//template String 

    tecla.onclick = function () {//clicar no botão reproduz audio
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {//mostra botão quando precionado

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {//volta o botão apos soltar a tecla
        tecla.classList.remove('ativa');
    }
}

