

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

for (var i = 0; i < arrayOggetti.length; i++) {
    const classeCorrente = arrayOggetti[i];
    
	console.log('Persona:');

    for (var key in classeCorrente) {
        console.log(key + ': ' + classeCorrente[key]);
    }
}