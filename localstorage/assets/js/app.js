//------------------------------------variables
const listatweets = document.getElementById("lista-tweets");

//-----------------------------------event listeners
eventListeners();

function eventListeners() {
  // esta funcion agrega un listener al boton submit del formulario y ejecuta un callback para agregar un tweet
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);
  listatweets.addEventListener("click", borrarTweet);
  // preparamos el local storage cuando el documento este listo.
  document.addEventListener("DOMContentLoaded", localStorageListo);
}
//---------------------------------------funciones
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
// borrar tweets
function borrarTweet(e) {
  e.preventDefault();
  // delegacion
  if (e.target.className === "borrar-tweet") {
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.innerText);
  }
  
}

//Mostrar datos de  LocalStorage en la lista de
function localStorageListo() {
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  tweets.forEach(function(tweet){
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
  });
}
// Agrega tweet a localstorage object
function agregarTweetLocalStorage(tweet) {
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  tweets.push(tweet);
  //convertir de strinf a arreglo para local Storage
  console.log(JSON.stringify(tweets));
  localStorage.setItem("tweets", JSON.stringify(tweets));
  //agregar tweet a localstorage
  // localStorage.setItem('tweets',tweet);
}
// comprobar que hayan elementos en localStorage
function obtenerTweetsLocalStorage() {
  let tweets;
  if (localStorage.getItem("tweets") === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem("tweets"));
  }
  return tweets;
}
//funcion para borrar tweets de local storage
function borrarTweetLocalStorage (tweet) {
  let tweets,tweetBorrar;
  //elimina la x del tweet
  tweetBorrar =tweet.substring(0,tweet.length-1);
  tweets = obtenerTweetsLocalStorage();
  tweets.forEach(function (tweet,index) {
    if (tweetBorrar==tweet) {
      tweets.splice(index,1);
    }
    
  });
  // con esto seteamos el nuevo array a local storage sin el tweet seleccionado
  localStorage.setItem('tweets',JSON.stringify(tweets))

}