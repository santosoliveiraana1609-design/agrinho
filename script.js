// Animação dos cards

const cards = document.querySelectorAll(".card");

function mostrarCards(){

cards.forEach(card=>{

const topo = card.getBoundingClientRect().top;

if(topo < window.innerHeight - 100){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",mostrarCards);

mostrarCards();


// Contadores

function contador(id, fim){

let numero = 0;

const elemento = document.getElementById(id);

const tempo = setInterval(()=>{

numero += Math.ceil(fim/100);

if(numero >= fim){

numero = fim;

clearInterval(tempo);

}

elemento.innerHTML = numero.toLocaleString();

},25);

}

contador("n1",250000);

contador("n2",399);

contador("n3",1200);


// Formulário

document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault();

alert("Mensagem enviada com sucesso!");

});
