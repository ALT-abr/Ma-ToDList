let liste = document.getElementById("taches");
let nom = document.getElementById("nom_tache");
let date = document.getElementById("date_tache");
let categorie = document.getElementById("categorie_tache");
let priorite = document.getElementById("priorite_tache");
let boutonValidation = document.getElementById("bouton_valider");

let stockageTaches = [];

let compteur = 0;

boutonValidation.addEventListener("click",
    function (plop){
        plop.preventDefault();

        if (nom.value == "" || date.value == "" || categorie.value == "" || priorite.value == ""){
            alert("champs vide! Veuillez remplir tous les champs.");
            return;
        }

        compteur++;

        liste.innerHTML += `
            <section class="task">
                <input type="checkbox" name="task" id="task${compteur}">
                <div>
                    <label for="task${compteur}">${nom.value}</label>
                    <p><i class="fa-regular fa-calendar"></i>${date.value}</p>
                </div>
                <p>${categorie.value}</p>
                <p>${priorite.value}</p>
                <i class="fa-solid fa-trash"></i>
            </section>
        `;
    }
)