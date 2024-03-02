
document.getElementById("mostrar").style.display="none";

const ocultarElemento= () =>{
    document.getElementById("mostrar").style.display="flex";
    document.getElementById("ocultar").style.display="none";
    return;
}

const asignarTexto = (elemento, texto) =>{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

const encriptarTexto = () =>{
    let Texto = document.getElementById("ingreso").value;
    let resultado ="";

    for(let letra = 0; letra < Texto.length; letra++){
        if(Texto[letra] === 'a'){
            resultado += 'ai';
        } else {
            if(Texto[letra] === 'e'){
                resultado += 'enter';
            } else {
                if(Texto[letra] === 'i'){
                    resultado += 'imes';
                } else {
                    if(Texto[letra] === 'o'){
                        resultado += 'ober';
                    } else {
                        if(Texto[letra] === 'u'){
                            resultado += 'ufet';
                        } else {
                            resultado += Texto[letra];
                        }
                    }
                }
            }
        }
    }
    return asignarTexto("#resultado", resultado);
}

const desencriptarTexto = () =>{
    let resultado = '';
    let texto = document.getElementById("ingreso").value;
  
    for (let letra = 0; letra < texto.length; letra++) {
      switch (texto[letra]) {
        case 'a':
          if (texto[letra + 1] === 'i') {
            resultado += 'a';
            letra++;
          } else {
            resultado += 'a';
          }
          break;
        case 'e':
          if (texto.slice(letra, letra + 5) === 'enter') {
            resultado += 'e';
            letra += 4;
          } else {
            resultado += 'e';
          }
          break;
        case 'i':
          if (texto.slice(letra, letra + 4) === 'imes') {
            resultado += 'i';
            letra += 3;
          } else {
            resultado += 'i';
          }
          break;
        case 'o':
          if (texto.slice(letra, letra + 4) === 'ober') {
            resultado += 'o';
            letra += 3;
          } else {
            resultado += 'o';
          }
          break;
        case 'u':
          if (texto.slice(letra, letra + 4) === 'ufet') {
            resultado += 'u';
            letra += 3;
          } else {
            resultado += 'u';
          }
          break;
        default:
          resultado += texto[letra];
          break;
      }
    }
  
    asignarTexto('#resultado', resultado);
    //copiarTexto();
}
const copiarTexto = () =>{
    let resultado = document.getElementById("resultado");
    let estadoBoton = document.getElementById("copiar");

    estadoBoton.textContent = "Copiado";
    navigator.clipboard.writeText(resultado.textContent);
}
