function mostrarDados1() {

    const jsontime=`{
        "musica": "Praia do rosa", 
        "artista": "Oriente, Cynthia Luz, Delacruz"
    }`;

//Verificar console
   console.log(jsontime);
//Transformando em JSOM - objeto JavaScript
   const data = JSON.parse(jsontime)
//Verificar Console
console.log(data)   

//Verificar no navegado - front-end
  document.getElementById("dados1").innerHTML+=
    "<p>Musica: "+data.musica + "</p>" +
    "<p>Artista: "+data.artista + "</p>" 

}

function mostrarDados2() {
const jsontime=`{"musica": "Rainha da pista",
 "artista": "ConeCrewDiretotia"}`;

//Verificar console
console.log(jsontime);
//Transformando em JSOM - objeto JavaScript
const data = JSON.parse(jsontime)
//Verificar Console
console.log(data)   

//Verificar no navegado - front-end
document.getElementById("dados2").innerHTML+=
"<p>Musica: "+data.musica + "</p>" +
"<p>Artista: "+data.artista + "</p>" 
}

function mostrarDados3() {
const jsontime=`{"musica": "Zoio de lula",
         "artista": "Charlie Brawn Jr"}`;

//Verificar console
console.log(jsontime);
//Transformando em JSOM - objeto JavaScript
const data = JSON.parse(jsontime)
//Verificar Console
console.log(data)   

//Verificar no navegado - front-end
document.getElementById("dados3").innerHTML+=
"<p>Musica: "+data.musica + "</p>" +
"<p>Artista: "+data.artista + "</p>" 
}

function mostrarDados4() {
const jsontime=`{"musica": "AnaLua",
"artista": "Armandinho"}`;

//Verificar console
console.log(jsontime);
//Transformando em JSOM - objeto JavaScript
const data = JSON.parse(jsontime)
//Verificar Console
console.log(data)   

//Verificar no navegado - front-end
document.getElementById("dados4").innerHTML+=
"<p>Musica: "+data.musica + "</p>" +
"<p>Artista: "+data.artista + "</p>" 
}