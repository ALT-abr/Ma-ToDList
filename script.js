
let boutonValidation = document.getElementById("bouton_valider");
let boutonOuverture = document.getElementById("ouvrir_formulaire");
let formulairePanel = document.getElementById("list_taches");
let boutonMenu = document.getElementById("ouvrir_menu");
let menuNavigation = document.getElementById("menu_navigation");
let iconeMenu = boutonMenu.querySelector("i");

function definirMenuOuvert(ouvert) {
    menuNavigation.classList.toggle("is-open", ouvert);
    boutonMenu.setAttribute("aria-expanded", ouvert);
    boutonMenu.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    iconeMenu.classList.toggle("fa-bars", !ouvert);
    iconeMenu.classList.toggle("fa-xmark", ouvert);
}

let dateAffichee = document.getElementById("date_affichee");
let maintenant = new Date();
let dateLongue = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}).format(maintenant);
let dateCourte = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
}).format(maintenant);

dateAffichee.innerHTML = '<span class="date-longue"></span><span class="date-courte"></span>';
dateAffichee.querySelector(".date-longue").textContent = dateLongue;
dateAffichee.querySelector(".date-courte").textContent = dateCourte;

boutonMenu.addEventListener("click", function () {
    definirMenuOuvert(!menuNavigation.classList.contains("is-open"));
});

document.addEventListener("click", function (event) {
    const clicDansMenu = menuNavigation.contains(event.target);
    const clicSurBouton = boutonMenu.contains(event.target);

    if (!clicDansMenu && !clicSurBouton) {
        definirMenuOuvert(false);
    }
});

function afficherFormulaire(ouvert) {
    formulairePanel.classList.toggle("is-open", ouvert);
    boutonOuverture.setAttribute("aria-expanded", ouvert);
    boutonOuverture.setAttribute("aria-label", ouvert ? "Fermer le formulaire" : "Ajouter une tâche");
    boutonOuverture.innerHTML = `<i class="fa-solid ${ouvert ? "fa-xmark" : "fa-plus"}" aria-hidden="true"></i>`;
}

boutonOuverture.addEventListener("click", function () {
    afficherFormulaire(!formulairePanel.classList.contains("is-open"));
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") afficherFormulaire(false);
});

let stockageTaches = [];

let compteur = 0;

boutonValidation.addEventListener("click",
    function (){
        let liste = document.getElementById("taches");
        let nom = document.getElementById("nom_tache").value;
        let date = document.getElementById("date_tache").value;
        let categorie = document.getElementById("categorie_tache").value;
        let priorite = document.getElementById("priorite_tache").value;

        if (nom == "" || date == "" || categorie == "" || priorite == ""){
            alert("champs vide! Veuillez remplir tous les champs.");
            return;
        }

        stockageTaches.push({
            nom: nom,
            date: date,
            categorie: categorie,
            priorite: priorite
        });

        compteur++;

        liste.innerHTML += `
            <section class="task">
                <input type="checkbox" name="task" id="task${compteur}">
                <div>
                    <label for="task${compteur}">${nom}</label>
                    <p><i class="fa-regular fa-calendar"></i>${date}</p>
                </div>
                <p>${categorie}</p>
                <p>${priorite}</p>
                <i class="fa-solid fa-trash"></i>
            </section>
        `;
        afficherFormulaire(false);
    }
)

let donnes = JSON.stringify(stockageTaches);
let stockage = JSON.parse(donnes);

stockage.forEach(function (tache, index) {
    console.log("Tâche numero" + (index + 1) + ":");
    console.log("nom :" + tache.nom);
    console.log("date :" + tache.date);
    console.log("categorie :" + tache.categorie);
    console.log("priorite :" + tache.priorite);
    console.log("- -- -------------------- -- -");
})
