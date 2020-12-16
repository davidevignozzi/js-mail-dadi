//EMAIL
// chiedo l'email
var email = prompt('inserisci l\'email')

/* controllo hce l'email sia nell'array
se c'è vai avanti
altrimenti allert con errore
*/
var mailLogged = ['boolean@boolean.it', 'davide@boolean.it', 'qualcuno@boolean.it']

/*
CORREZIONE + APPUNTI
---> correzione con il for perchè 'se le mail fossero state MOLTE più di 3?' <---

            var = mailTrovata = false
            for (var i = 0; i < emails.lenght && mailTrovata === false; i++) {
              if(emails[i] === login) {
                mailTrovata = true
              }
            }

            if(!mailTrovata) {
              alert('accesso negato')
            }

//////////////// IL CICLO SI FERMA QUANDO TROVA LA MAIL ALLA MAIL FERMATA.

//////////////// var gino = 'pippo'; // popolata ==> esistenza true
//////////////// var gino = ''; // anche se è vuota, non esiste e quindi è false

            if(!gino){
            codice
            }

//////////////// quel "!" vuol dire not --> if(!gino) = se non esiste il valore gino
//////////////// if(!gino) != if(gino == false)
//////////////// if(!gino) se var gino non ha un valore
//////////////// if(gino == false) se var gino ha un valore ed è falso
*/

if (email === mailLogged[0] || email === mailLogged[1] || email === mailLogged[2]) {
  console.log(email + ' ha effettuato l\'accesso');
  var logged = document.getElementById('check-email')
  logged.innerText = 'Hai effettuato l\'accesso'
  // DADI

  var min = 1;
  var max = 6;
  // Dado utente
  var dadoUtente = Math.floor(Math.random() * (max + 1 - min) + min)
  console.log('il numero uscito dal dado di ' + email + ' è ' + dadoUtente)
  // Dado PC
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

} else {
  alert('Errore')
}
