
let boutonValidation = document.getElementById("bouton_valider");

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