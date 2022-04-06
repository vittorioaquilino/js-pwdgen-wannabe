// Chiedere all'utente il proprio nome
const userName = prompt("Qual'è il tuo nome");
console.log(userName);

// Chiedere all'utente il proprio cognome
const userSurname = prompt("qual'è il tuo cognome");
console.log(userSurname);

// Chiedere all'utente il proprio colore preferito
const color = prompt("qual'è il tuo colore preferito");
console.log(color);

// Creare il messagio con la password utente
const message = `La tua password è: ${userName}${userSurname}${color}17`;
console.log(message);

// Stampare nella pagina la password
document.getElementById("my-password").innerHTML = message;