//variables
const listatweets = document.getElementById("lista-tweets");
const ul = document.createElement('ul');
//event listeners
eventListeners();

function eventListeners() {
// esta funcion agrega un listener al boton submit del formulario y ejecuta un callback para agregar un tweet
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);
}

//funciones

function agregarTweet(e) {
  // mata el proceso de recarga para operar con los elementos del DOM
  e.preventDefault();
  console.log("formulario enviado");
  // creamos una constante para recuperar el valor del campo de texto
  const tweet = document.getElementById("tweet").value;
  // creamos un boton borrar que sera un enlace que tendra una clase borrar-tweet y agregara una x como texto  
  const botonborrar = document.createElement("a");
  botonborrar.classList = "borrar-tweet";
  botonborrar.innerText = "X";
  // creamos un elemento del DOM en este caso una lista
  const li = document.createElement("li");
  // agregamos un valor a un elemento de la lista con lo que tiene la variable tweet
  li.innerText = tweet;
  // la lista creada dinamicamente la agregamos al div que se almacena en la variable listatweets
  
  ul.appendChild(li);
  listatweets.appendChild(ul);
  console.log(tweet);
}

function borrarTweet(e) {
    if (e.target.className==='borrar-tweet') {
        console.log("diste click en eliminar");     
    }
}
