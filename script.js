



window.addEventListener('load', function() {
    adicionarElementos()
    addActive()
    cambiaWidthButton(img_btn1)
    cambiaWidthButton(img_btn2)

   
    
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

// slider Projects

const scrollContainer = document.querySelector(".containerSlider")
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

  
scrollContainer.addEventListener("wheel", (evt) => { 
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "smooth";

});


btn1.addEventListener("click", event =>{
 
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;

})


btn2.addEventListener("click", event =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})


// mouseover event button project

const img_btn1 = document.getElementById('img_btn1');
const img_btn2 = document.getElementById('img_btn2');

function cambiaWidthButton(x) {
    x.style.borderRadius = '20px';

    x.addEventListener("mouseover", event =>{
        
        x.style.backgroundColor = 'rgb(153, 180, 231)';
        
        
       
       })
     
       
     x.addEventListener("mouseout", event =>{

      
         x.style.backgroundColor = 'transparent';
     
       
       })

}


  



