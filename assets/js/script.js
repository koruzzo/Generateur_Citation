const citationTristeTab = [
    ['"La vie ', 'est obscure et cruel ','et je n\'en vois pas la fin."', 'Jean-michel Triste'],
    ['"Le monde ', 'est un enchainement de décéption ','et ca nous détruit."', 'Jean-michel Obscure'],
    ['"La population ', 'n\'existe que pour nous faire souffrire ','et ca me rend triste."', 'Jean-nadine Triste'],
    ['"Notre existance ', 'ne nous apporte jamais la paix ',' et pourtant nous la vivons."' , 'Jean-nadine Obscure'],
    ['"La dépression ', 'n\'a rien à nous apporter ','et nous la subisson."', 'Jean-michel Triste feat Jean-nadine Obscure'],
  ]
  const citationJoyeuseTab = [
    ['"La paix ', 'est lumineuse et joyeuse ','et ca nous rend heureux."', 'Jean-michel Joyeux'],
    ['"La destiné ', 'est un enchainement de bonne chose ','et c\'est cool."', 'Jean-michel Content'],
    ['"L\'amitier ', 'n\'existe que pour nous apporter du bonheur ','et nous donne la force de continuer."', 'Jean-nadine Joyeux'],
    ['"L\'amour ', 'nous offre la paix interrieur ','et j\'en profite."' , 'Jean-nadine Content'],
    ['"La vie ', 'à beaucoup à nous offrire ','et elle na pas de défaut."', 'Jean-michel Joyeux feat Jean-nadine Content'],
  ]



function getRandomInt(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  
function getValuej()
{
  var inputj = document.getElementById("nombre_repetition_j").value;
   return inputj;
}

function getValuet()
{
  var inputt = document.getElementById("nombre_repetition_t").value;
  return inputt;
}


const bouton1 = document.querySelector("#bouton_confirmation_j");

bouton1.addEventListener("click", 
function creerPara1() 
{
  var valeurnbj = getValuej();

  if(valeurnbj == ""){
    let monErreur = document.getElementById('ERREUR2');
    monErreur.innerHTML="Le champs de chiffre est requis";
    monErreur.style.color = 'red';
  }
  else if(isNaN(valeurnbj)){
    let monErreur = document.getElementById('ERREUR2');
    monErreur.innerHTML="Le champs doit comporter des chiffres uniquement";
    monErreur.style.color = 'red';
  }
  else if(valeurnbj > 5 || valeurnbj<1)
  {
    let monErreur = document.getElementById('ERREUR2');
    monErreur.innerHTML="Le champs doit comporter des chiffres valides";
    monErreur.style.color = 'red';
  }
  else{
    let monErreur = document.getElementById('ERREUR2');
    monErreur.innerHTML="";
    while(valeurnbj >0)
    {

      for (let j = 0; j < 4; j++) 
      {
        var nba = getRandomInt(0, 4);
        console.log(nba);
        console.log(citationJoyeuseTab[nba][j]);
        document.querySelector("#input_j").innerHTML += citationJoyeuseTab[nba][j] += " ";
      }
      document.querySelector("#input_j").innerHTML += "<br>";
      valeurnbj--;
    }
  }
    
});

const bouton2 = document.querySelector("#bouton_confirmation_t");

bouton2.addEventListener("click", 
function creerPara2() 
{
  var valeurnbt = getValuet();

  if(valeurnbt == ""){
    let monErreur = document.getElementById('ERREUR1');
    monErreur.innerHTML="Le champs de chiffre est requis";
    monErreur.style.color = 'red';
  }
  else if(isNaN(valeurnbt)){
    let monErreur = document.getElementById('ERREUR1');
    monErreur.innerHTML="Le champs doit comporter des chiffres uniquement";
    monErreur.style.color = 'red';
  }
  else if(valeurnbt > 5 || valeurnbt<1)
  {
    let monErreur = document.getElementById('ERREUR1');
    monErreur.innerHTML="Le champs doit comporter des chiffres valides";
    monErreur.style.color = 'red';
  }
  else{
    let monErreur = document.getElementById('ERREUR1');
    monErreur.innerHTML="";
    while(valeurnbt >0)
    {

      for (let j = 0; j < 4; j++) 
      {
        var nba = getRandomInt(0, 4);
        console.log(nba);
        console.log(citationTristeTab[nba][j]);
        document.querySelector("#input_t").innerHTML += citationTristeTab[nba][j] += " ";
      }
      document.querySelector("#input_t").innerHTML += "<br>";
      valeurnbt--;
    }
  }
});

const boutonsupp1 = document.querySelector("#bouton_supp_j");

boutonsupp1.addEventListener("click", 
function suppPara1() 
{
  document.querySelector("#input_j").innerHTML = "";
});

const boutonsupp2 = document.querySelector("#bouton_supp_t");

boutonsupp2.addEventListener("click", 
function suppPara2() 
{
  document.querySelector("#input_t").innerHTML = "";
});

