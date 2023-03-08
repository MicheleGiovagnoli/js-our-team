const domTeam = document.getElementById('team');

//array di oggetti
const arrayOggetti = [
    {
       'nome' : 'Wayne Barnette',
       'ruolo' : 'Founder & CEO',
       'immagine' : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        'nome' : 'Angela Caroll',
        'ruolo' : 'Chief Editor',
        'immagine' : 'angela-caroll-chief-editor.jpg',
    },
    {
        'nome' : 'Walter Gordon',
        'ruolo' : 'Office Manager',
        'immagine' : 'walter-gordon-office-manager.jpg',
    },
    {
        'nome' : 'Angela Lopez',
        'ruolo' : 'Social Media Manager',
        'immagine' : 'angela-lopez-social-media-manager.jpg',
    },
    {
        'nome' : 'Scott Estrada',
        'ruolo' : 'Developer',
        'immagine' : 'scott-estrada-developer.jpg',
    },
    {
        'nome' : 'Barbara Ramos',
        'ruolo' : 'Graphic Designer',
        'immagine' : 'barbara-ramos-graphic-designer.jpg',
    },
];
console.log(arrayOggetti);
//Scorro l'array
for (var i = 0; i < arrayOggetti.length; i++) {
    const oggettoCorrente = arrayOggetti[i];
    //una volta entrato nell'arrai in posizione [i] scorro le key dell'oggetto
    for (var key in oggettoCorrente) {
        //metto in una variabile il valore dell'oggetto in posizione [key]
        const oggettoEstratto = oggettoCorrente[key];
        //metto in una variabile la funzione per creare un'elemento nel DOM
        const box = newBox(oggettoEstratto);
        //collego il DOM
        domTeam.append(box);
        console.log(key + ': ' + oggettoCorrente[key]);
    }
}

function newBox (contenuto){
    const box = document.createElement('span');
    box.classList.add('d-flex');
    box.innerHTML = contenuto;
    return box;
}