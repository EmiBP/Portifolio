



window.addEventListener('load', function() {
    adicionarElementos()
    addActive()
   
    
})



function adicionarElementos() {
    const header = document.querySelector('header');

    
    header.innerHTML = `
    <div class="header_nav">
        <nav>
            <ul>
                <li><a  href="index.html">Home</a></li>
                <li><a  href="projects.html">Projects</a></li>
                <li><a  href="about.html">About</a></li>
                <li><a  href="CV.html">CV</a></li>
            </ul>
        </nav>
    </div>
 `

}

function addActive() {
   let tagsA = document.querySelectorAll('.header_nav nav ul li a');
   const h_home = document.getElementById('h_home');
   const h_cv = document.getElementById('h_cv');
   const h_projects = document.getElementById('h_projects');
   const h_about = document.getElementById('h_about');

  
   for (let index = 0; index < tagsA.length; index++) {
    const listA = tagsA[index];
    const currentHref = listA.getAttribute('href');

    
    if(currentHref == 'index.html' && h_home || currentHref == 'CV.html' && h_cv || currentHref == 'about.html' && h_about || currentHref  == 'projects.html' && h_projects) {
       
      
        listA.style.backgroundColor = 'rgb(221, 225, 233)';
        listA.style.fontWeight = "800";


    }  

   }
   

   

    
}


