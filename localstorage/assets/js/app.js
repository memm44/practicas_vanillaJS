//variables
const listatweets = document.getElementById("lista-tweets");
//event listeners
eventListeners();

function eventListeners() {
// esta funcion agrega un listener al boton submit del formulario y ejecuta un callback para agregar un tweet
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);


    listatweets.addEventListener('click',borrarTweet)
}
// borrar tweetes


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
  
  li.appendChild(botonborrar);

  //añadir a localstorage
  listatweets.appendChild(li);
  agregarTweetLocalStorage(tweet);
}

function borrarTweet(e) {
    e.preventDefault();
    // delegacion 
    if (e.target.className==='borrar-tweet') {
        e.target.parentElement.remove();  
    }


}
// Agrega tweet a localstorage object

function agregarTweetLocalStorage(tweet) {
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  tweets.push(tweet);

  // convertir de strinf a arreglo para local Storage
  localStorage.setItem('tweets',JSON.stringify(tweets));
  //agregar tweet a localstorage
  // localStorage.setItem('tweets',tweet);
  
}

function obtenerTweetsLocalStorage () {
  let tweets;
  if (localStorage.getItem('tweets')===null) {     
    tweets= [];
  }
  else{ 
    tweets= JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;

}