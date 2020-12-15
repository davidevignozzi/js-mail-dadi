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
