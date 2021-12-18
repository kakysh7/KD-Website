// Buttons
const homeBtn = document.getElementById('homeBtn');
const aboutBtn = document.getElementById('aboutBtn');
const skillsBtn = document.getElementById('skillsBtn');
const projectsBtn = document.getElementById('projectsBtn');
const contactBtn = document.getElementById('contactBtn');

//Background overlay container
const homeContainer = document.querySelector('.home-container');
const aboutContainer = document.querySelector('.about-container');
const skillsContainer = document.querySelector('.skills-container');
const projectsContainer = document.querySelector('.projects-container');
const contactContainer = document.querySelector('.contact-container');

// Loader 
const loader = document.getElementById('loaderDiv');

// Pages
const homePg = document.querySelector('.home-page');
const aboutPg = document.querySelector('.about-page');
const skillsPg = document.querySelector('.skills-page');
const projectsPg = document.querySelector('.projects-page');
const contactPg = document.querySelector('.contact-page');

// Show Loader for 2 seconds 
function showLoader() {
    loader.classList.remove('hidden');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
}

// Show Home Page
function showHome() {
    homeContainer.setAttribute('data-aos', 'fade-right')
    homePg.hidden = false;
    aboutPg.hidden = true;
    skillsPg.hidden = true;
    projectsPg.hidden = true;
    contactPg.hidden = true;
}

// Show About Page
function showAbout() {  
    aboutPg.hidden = false;
    homePg.hidden = true;
    skillsPg.hidden = true;
    projectsPg.hidden = true;
    contactPg.hidden = true;
    showLoader();
}

// Show Skills Page
function showSkills() {
    skillsPg.hidden = false;
    homePg.hidden = true;
    aboutPg.hidden = true;  
    projectsPg.hidden = true;
    contactPg.hidden = true;
    showLoader();
}

// Show Projects Page
function showProjects() {
    projectsPg.hidden = false;
    homePg.hidden = true;
    aboutPg.hidden = true;
    skillsPg.hidden = true;    
    contactPg.hidden = true;
    showLoader();
}

// Show Contact Page
function showContact() {
    contactPg.hidden = false;
    homePg.hidden = true;
    aboutPg.hidden = true;
    skillsPg.hidden = true;
    projectsPg.hidden = true;
    showLoader();
}


// Event Listeners
homeBtn.addEventListener('click', showHome);
aboutBtn.addEventListener('click', showAbout);
skillsBtn.addEventListener('click', showSkills);
projectsBtn.addEventListener('click', showProjects);
contactBtn.addEventListener('click', showContact);

// On Load
showHome();