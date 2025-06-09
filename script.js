// Sélectionne l'élément avec la classe "to-top" (bouton retour en haut)
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    // Vérifie si la page est descendue de plus de 100 pixels
    if (window.pageYOffset > 100) {
        toTop.classList.add("active"); // Affiche le bouton
    } else {
        toTop.classList.remove("active"); // Cache le bouton
    }
});

// Sélection des éléments du menu hamburger et du contenu principal
const menuHamburger = document.querySelector(".menu_hamburger");
const navLinks = document.querySelector(".nav-links");
const section = document.querySelector(".sectiontout");

// Ajoute un écouteur d'événement pour gérer l'affichage du menu mobile
menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu'); // Affiche/masque le menu
    section.classList.toggle('section-deplace'); // Déplace le contenu principal
});

/*
// Fonction pour envoyer un email via "mailto"
function sendEmail(event) {
    event.preventDefault(); 

    // Récupère les valeurs des champs du formulaire
    const userName = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Crée un lien mailto avec les informations saisies
    const recipientEmail = 'evan.moras38@gmail.com'; 
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("De: " + userName + "\n\n" + message)}`;

    // Ouvre le client mail avec le message prérempli
    window.location.href = mailtoLink; 
}
    */

// Gestion du clic pour copier un texte dans le presse-papiers
document.addEventListener('click', function (event) {
    // Vérifie si l'élément cliqué possède l'attribut "a_copier"
    if (event.target.hasAttribute('a_copier')) {
        event.preventDefault();

        // Récupère le texte de l'élément à copier
        var texteACopier = event.target.textContent.trim();

        // Crée un champ texte temporaire pour effectuer la copie
        var tempTextarea = document.createElement('textarea');
        tempTextarea.value = texteACopier;
        document.body.appendChild(tempTextarea);

        // Sélectionne et copie le texte dans le presse-papiers
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999);
        document.execCommand('copy');

        // Supprime l'élément temporaire
        document.body.removeChild(tempTextarea);

        // Affiche un message "Copié !" si un élément de confirmation est présent
        var messageElement = event.target.nextElementSibling;
        if (messageElement && messageElement.classList.contains('message_copie')) {
            messageElement.style.display = 'inline';

            // Cache le message après 2 secondes
            setTimeout(function () {
                messageElement.style.display = 'none';
            }, 2000);
        }
    }
});
