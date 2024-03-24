const studenti = [];


/*Versione con il for
for (let i = 0; i < studenti.length; i++){
    console.log(studenti[i].nome, studenti[i].cognome );
}

--Versione con il forEach
studenti.forEach(studente => {
    console.log(studente.nome, studente.cognome);
    
})*/


const btnInp = document.getElementById("btnInp");
const idCount = 0;
const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const eta = document.getElementById("eta");

btnInp.addEventListener("click", (e) => {
    const studente = {
        nome: nome.value,
        cognome: cognome.value,
        eta: eta.value
    };
    studenti.push(studente)

});

function creaRegistroUtenti(nome, cognome, eta) {
    const alunniLista = document.getElementById("alunniLista");
    const div = document.createElement("div");
    div.classList.add("bg-light")
    alunniLista.appendChild(div);
    div.textContent = ` Nome: ${nome} cognome: ${cognome} eta: ${eta}`
    return div;

}

const btnMostraAlunni = document.getElementById("btnaggiungi");

btnMostraAlunni.addEventListener("click", (e) => {
    studenti.forEach(studente => {
        creaRegistroUtenti(studente.nome, studente.cognome, studente.eta);
    });

});
