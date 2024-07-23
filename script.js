



window.addEventListener('load', function() {
    
    adicionarElementos()
   
    
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




   





