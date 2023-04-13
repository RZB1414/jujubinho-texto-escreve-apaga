

const frases = ["Oi eu sou o Renan Buiatti",
 "Também conhecido como:",
  "Jujubinho",
   "O mais lindo de todos",
    "Senhor Buiatti da toca",
     "O amor da sua vida :D"];
     
const elemento = document.getElementById("frase");

let i_indexFrases = 0;
let j_indexLetras = 0;
let fraseAtual = [];
let estaDeletando = false;
let terminou = false;

function escreveFrase(){
    terminou = false;
    elemento.innerHTML = fraseAtual.join("");
    elemento.classList.add("borda-piscando")

    if (i_indexFrases < frases.length) {

        if (!estaDeletando && j_indexLetras < frases[i_indexFrases].length) {
            fraseAtual.push(frases[i_indexFrases][j_indexLetras]);
            j_indexLetras++;
            elemento.innerHTML = fraseAtual.join("");
        }

        if(estaDeletando && j_indexLetras <= frases[i_indexFrases].length){
            fraseAtual.pop(frases[i_indexFrases][j_indexLetras]);
            j_indexLetras--;
            elemento.innerHTML = fraseAtual.join("");
        }

        if (j_indexLetras == frases[i_indexFrases].length) {
            terminou = true;
            estaDeletando = true;
        }

        if(estaDeletando && j_indexLetras === 0){
            fraseAtual = [];
            estaDeletando = false;
            i_indexFrases++;
            if(i_indexFrases === frases.length){
                i_indexFrases = 0;
            }
        }
    }

    const acelera = Math.random() * (80 - 50) + 50;
    const normal = Math.random() * (200 - 100) + 100;
    const tempo = terminou ? 2000 : estaDeletando ? acelera : normal;
    setTimeout(escreveFrase, tempo);
}

escreveFrase();