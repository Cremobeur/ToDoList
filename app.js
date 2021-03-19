const form = document.querySelector('form'); /* querySelector() permet de tous selectionner plus facilement */
const liste = document.querySelector('ul');
const input = document.querySelector('form input');

let toutesLesTaches = [];

form.addEventListener('submit', event => {

    event.preventDefault(); /* preventDefault() permet de prévenir le comportement de notre événement par defaut içi submit */

    const text = input.value.trim(); /* trim() permet de raser les espaces avant et après le texte mit par erreur  */

    if (text !== ''){ /* !== ''  veut dire stictement différent de chaîne de caractère vide */
        rajouterUneTaches(text);
        input.value = '';
    }
})

function rajouterUneTaches(text) {
    const todo = {
        text,
        id: Date.now() /* Date.now() renvoie le nb de millisecondes dans l'intanté (ce qui nous donnr un id) */
    }
    
    afficherListe(todo);
}

function afficherListe(todo) {

    const item = document.createElement('li');
    item.setAttribute('data-key', todo.id);

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.addEventListener('click', tacheFaite);
    item.appendChild(input);

    const txt = document.createElement('span');
    txt.innerHTML = todo.text;
    item.appendChild(txt);

    const btn = document.createElement('button');
    btn.addEventListener('click', supprimerTache);
    const img = document.createElement('img');
    img.setAttribute('src', 'ressources/fermer.svg');
    btn.appendChild(img);
    item.appendChild(btn);


    liste.appendChild(item);
    toutesLesTaches.push(item);

}

function tacheFaite(e) {
    e.target.parentNode.classList.toggle('finDeTache'); /* parentNode veut dire le parent de notre objet içi le li*/
}

function supprimerTache(e) {

    toutesLesTaches.forEach(el => {

        if (e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
            el.remove();
            toutesLestaches = toutesLesTaches.filter(li => li.dataset.key !== el.dataset.key);
        }
    })
}