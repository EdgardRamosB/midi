function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();/*trae el sonido*/
}

const listaDeTeclas = document.querySelectorAll('.tecla') // declaramos referencia

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classList[1];
    console.log(contador);

    const idAudio = `#sonido_${instrumentos}`;



    tecla.onclick = function (){
        playSonido(idAudio);
    };

    tecla.onkeydown = function(evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
        console.log(evento.code === 'Space' || evento.code === 'Enter')
       
    }
         
    tecla.onkeyup = function(){/*desactivar la clase activa*/
        tecla.classList.remove('activa');
    }     
}
























//document.querySelector('.tecla_pom').onclick = playSonidoPom;/*trae la tecla pom*/


// function playSonidoClap (){
//     document.querySelector('#sonido_tecla_clap').play();
// }

// document.querySelector('.tecla_clap').onclick = playSonidoClap;
