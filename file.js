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
const nome = document.getElementById("nome");
const cognome = document.getElementById("cognome");
const eta = document.getElementById("eta");


const alunniLista = document.getElementById("alunniLista");
function creaRegistroUtenti(nome, cognome, eta) {
    const div = document.createElement("div");
    div.classList.add("bg-light")
    alunniLista.appendChild(div);
    div.textContent = ` Nome: ${nome} cognome: ${cognome} eta: ${eta}`
    return div;

}


btnInp.addEventListener("click", (e) => {
    let studentegiapresente = false;
    for (let i = 0; i <= studenti.length; i++) {
        if (studentegiapresente) {
            break;
        } else {
            studenti.push({
                nome: nome.value,
                cognome: cognome.value,
                eta: eta.value
            });
            studentegiapresente = true;

        };

        reset(alunniLista)
        studenti.forEach(studente => {
            creaRegistroUtenti(studente.nome, studente.cognome, studente.eta);

        });
    }
});


function reset(id) {
    id.innerHTML = " ";
}


