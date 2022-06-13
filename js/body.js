/** Chiediamo all’utente il suo nome,
poi chiediamo il suo cognome,
poi chiediamo il suo colore preferito.
Infine scrivi sulla pagina nomecognomecolorepreferito22
(sostituendo nome, cognome e colore preferito con quelli inseriti dall'utente)
*/

const userName = prompt ('Inserisci il tuo nome');

const userLastName = prompt ('Inserisci il tuo cognome');

const favouriteColor = prompt ('Inserisci il tuo colore preferito');

console.log (userName, userLastName, favouriteColor);

document.getElementById ('user-name').innerHTML = userName;

document.getElementById ('user-lastname').innerHTML = userName;

document.getElementById ('user-favcolor').innerHTML = userName;