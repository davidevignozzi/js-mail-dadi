//EMAIL
// chiedo l'email
var email = prompt('inserisci l\'email')

/* controllo hce l'email sia nell'array
se c'è vai avanti
altrimenti allert con errore
*/
var mailLogged = ['boolean@boolean.it', 'davide@boolean.it', 'qualcuno@boolean.it']

if (email === mailLogged[0] || email === mailLogged[1] || email === mailLogged[2]) {
  console.log(email + ' ha effettuato l\'accesso');
  var logged = document.getElementById('check-email')
  logged.innerText = 'Hai effettuato l\'accesso'
} else {
  alert('Errore')
}

// DADI

var min = 1;
var max = 6;
var dadoUtente = Math.floor(Math.random() * (max + 1 - min) + min)
console.log('il numero uscito dal dado di ' + email + ' è ' + dadoUtente)

var min = 1;
var max = 6;
var dadoPc = Math.floor(Math.random() * (max + 1 - min) + min)
console.log('il numero uscito dal dado di ' + email + ' è ' + dadoPc)

if (dadoUtente > dadoPc) {
  var vittoria = document.getElementById('risultato');
  vittoria.innerText = 'Hai vinto'
} else if (dadoUtente === dadoPc) {
  var pareggio = document.getElementById('risultato');
  pareggio.innerText = 'Hai pareggiato'
}else {
  var sconfitta = document.getElementById('risultato');
  sconfitta.innerText = 'Hai perso'
}
