const studenti = [{
    nome: "Marco",
    cognome: "Rossi",
    eta: 12
},
{
    nome: "Maria",
    cognome: "Bianchi",
    eta: 14
},
{
    nome: "Alessandra",
    cognome: "Franchi",
    eta: 18
},


];


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
    const tr = document.createElement("tr");
    tr.classList.add("bg-light")
    alunniLista.appendChild(tr);
    const tdNome = document.createElement("td");
    tr.appendChild(tdNome);
    const tdCognome = document.createElement("td");
    tr.appendChild(tdCognome)
    const tdEta = document.createElement("td");
    tr.appendChild(tdEta)
    tdNome.innerHTML = nome;
    tdCognome.innerHTML = cognome;
    tdEta.innerHTML = eta;
}


btnInp.addEventListener("click", (e) => {
    const studente = {
        nome: nome.value,
        cognome: cognome.value,
        eta: eta.value
    };

    let ePresente = studentePresente(studente);
    if (ePresente) {
        alert("alunno gia presente");
    } else if (nome.value == "" || cognome.value == "" || eta.value == "") {
        alert("non hai inserito i dati");
    }
    else {
        studenti.push(studente);
        reset(alunniLista);
        inserisciStudente(studenti);

    }


});


function inserisciStudente(arrayStudenti) {

    for (let i = 0; i < arrayStudenti.length; i++) {
        const studente = arrayStudenti[i];
        creaRegistroUtenti(studente.nome, studente.cognome, studente.eta);
    }



}


function reset(id) {
    id.innerHTML = " ";
}

function studentePresente(studente) {
    for (let i = 0; i < studenti.length; i++) {
        const studenteCorrente = studenti[i];
        if (studenteCorrente.nome == studente.nome && studenteCorrente.cognome == studente.cognome && studenteCorrente.eta == studente.eta) {
            return true;

        }
    } return false;

}


inserisciStudente(studenti);


const btnMaggiorenni = document.getElementById("btnMaggiorenni");

function eMaggiorenne(array) {
    const arrayMaggiorenni = [];
    array.forEach(studente => {
        if (studente.eta >= 18) {
            arrayMaggiorenni.push(studente);

        }

    })
    return arrayMaggiorenni
};




btnMaggiorenni.addEventListener("click", (e) => {
    reset(alunniLista);
    const arrayMax = eMaggiorenne(studenti)
    inserisciStudente(arrayMax)

});

const btnMinorenni = document.getElementById("btnMinorenni");


function eMinorenne(array) {
    const arrayMinorenni = [];
    array.forEach(studente => {
        if (studente.eta < 18) {
            arrayMinorenni.push(studente);
        }
    });
    return arrayMinorenni;
}

btnMinorenni.addEventListener("click", (e) => {
    reset(alunniLista);
    const arrayMin = eMinorenne(studenti)
    inserisciStudente(arrayMin)

})




const btnTutti = document.getElementById("btnTutti");
btnTutti.addEventListener("click", (e) => {
    reset(alunniLista);
    inserisciStudente(studenti);

});