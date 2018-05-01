// window.addEventListener('load', project_skill);

// function project_skill() {
//     let skill_main = require('../js/skills.js');
//     let data = require('../data/projects.json');
//     let template_left = document.querySelector(".project__template--left");
//     let template_right = document.querySelector(".project__template--right");
//     let projects = document.querySelectorAll(".project__template");

//     data.projects.map(project => {
//         const skills = project.skills;

//         let skills_elements = '';

//         skills.map(project_skill => {
//             skills_elements += `<span class="skill__icon" style="background-image: url(./img/skills/${project_skill})"></span>`;
//         })


//         let elem = `<div class="project__template project__${project.class}">
//                 <h3 class="project__header" id="project__header">${project.name}</h3>
//                 <p class="role__bottom-left">${project.role}</p>
//                 <div class="project__details" id="project__details">
//                     <article class="project__details--article">
//                         <h4 class="project__details--header">${project.name}</h4>
//                         <p class="project__details--para">${project.description}</p>
//                     </article>
//                     <aside class="project__details--aside">
//                         <div class="aside-skill aside-skill__project">
//                             <h2 class="title-header skills-header">Skills</h2>
//                             <div class="skill skill__project" id="skill__project">
//                                 ${skills_elements}
//                             </div>
//                         </div>
//                     </aside>
//                 </div>
//             </div>`;

//         if (project.side === "left") {
//             template_left.innerHTML += elem;
//         } else {
//             template_right.innerHTML += elem;
//         }
//     });


//     for (let x = 0; x < projects.length; x++) {
//         projects[x].addEventListener('click', function() {

//             let details = projects[x].querySelector(".project__details");
//             if (details.style.display !== "none") {
//                 details.style.display = "none";
//             } else {
//                 details.style.display = "flex";
//             }
//         });

//     }
// }