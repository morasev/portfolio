const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

const menuHamburger = document.querySelector(".menu_hamburger")
    const navLinks = document.querySelector(".nav-links")
    const section = document.querySelector(".sectiontout")

    menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        section.classList.toggle('section-deplace')
    })

    function sendEmail(event) {
        event.preventDefault();
        
        const userName = document.getElementById('name').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
    
        const recipientEmail = 'evan.moras38@gmail.com'; 
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("De: " + userName + "\n\n" + message)}`;
    
        window.location.href = mailtoLink;
    }

    document.addEventListener('click', function (event) {
        // Vérifier si l'élément cliqué a un attribut data-copy
        if (event.target.hasAttribute('a_copier')) {
            event.preventDefault();

            // Récupèrer le texte à copier
            var texteACopier = event.target.textContent.trim();

            // Créer un élément temporaire pour copier le texte
            var tempTextarea = document.createElement('textarea');
            tempTextarea.value = texteACopier;
            document.body.appendChild(tempTextarea);

            tempTextarea.select();
            tempTextarea.setSelectionRange(0, 99999);
            document.execCommand('copy');

            document.body.removeChild(tempTextarea);

            // Afficher un message Copié !
            var messageElement = event.target.nextElementSibling; 
            if (messageElement && messageElement.classList.contains('message_copie')) {
                messageElement.style.display = 'inline'; 

                // Cacher le message après 2 secondes
                setTimeout(function () {
                    messageElement.style.display = 'none'; 
                }, 2000);
            }
        }
    });