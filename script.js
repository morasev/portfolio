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

    document.getElementById('lienACopier').addEventListener('click', function(event) {
        event.preventDefault();
    
        var texteACopier = "07 88 50 21 78";
    
        var tempTextarea = document.createElement('textarea');
        tempTextarea.value = texteACopier;
        document.body.appendChild(tempTextarea);
    
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999);
    
        document.execCommand('copy');
    
        document.body.removeChild(tempTextarea);
    
        alert('Le texte a été copié dans le presse-papiers !');
    });

    function sendEmail(event) {
        event.preventDefault();
        
        const userName = document.getElementById('name').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
    
        const recipientEmail = 'evan.moras38@gmail.com'; 
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("De: " + userName + "\n\n" + message)}`;
    
        window.location.href = mailtoLink;
    }