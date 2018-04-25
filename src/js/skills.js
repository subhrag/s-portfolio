window.onload = function() {

    displaySkills();
    project_skill();
}

function displaySkills() {
    let mySkill = document.querySelector(".skill");
    const skill_images = ['java-logo.png', 'spring-logo.png', 'api-logo.png', 'maven-logo.png', 'oracle-logo.png', 'hibernate-logo.png', 'junit-logo.png', 'html5-logo.png', 'js-logo.png', 'css-logo.png', 'sass-logo.png', 'webpack-logo.png', 'gulp-logo.png', 'grunt-logo.png', 'xml-logo.png', 'GitHub-logo.png', 'eclipse-logo.png', 'vscode-logo.png'];
    const skills = ['java', 'spring', 'api', 'maven', 'oracle', 'hibernate', 'junit', 'html', 'js', 'css', 'sass', 'xml', 'webpack', 'GitHub', 'eclipse', 'vscode'];
    skills.forEach((skill, iIndex) => {
        skill_images.forEach((image, sIndex) => {
            let span = document.createElement('span');
            span.style.backgroundImage = 'url(./img/skills/' + image + ')';
            if (image.includes(skill)) {
                span.className = 'skill__icon';
                mySkill.append(span);
            }
        });
    });
}

function project_skill() {

    let data = require('../data/projects.json');
    let template_left = document.querySelector(".project__template--left");
    let template_right = document.querySelector(".project__template--right");

    data.projects.map(project => {
        const skills = project.skills;

        let skills_elements = '';

        skills.map(project_skill => {
            skills_elements += `<span class="skill__icon" style="background-image: url(./img/skills/${project_skill})"></span>`;
        })


        let elem = `<div class="project__template project__${project.class}">
                <h3 class="project__header">${project.name}</h3>
                <p class="role__bottom-left">${project.role}</p>
        <div class="project__details">
            <div class="project__details--template">
              <article class="project__details--article">
                        <h4 class="project__header">Description</h4>
                        <p class="project__details--para">${project.description}</p>
                    </article>
                    <aside class="project__details--aside">
                        <div class="project__${project.class}">
                        <h3 class="project__header">${project.name}</h3>
                        <p class="role__bottom-left">${project.role}</p></div>
                    </aside>
            </div>
        </div>
        </div>`;



        if (project.side === "left") {
            template_left.innerHTML += elem;
            let project_details_template = document.querySelectorAll(".project__details--template");
            //project_details_template.style.flexDirection = "row-reverse";
            console.log(project_details_template);
        } else {
            template_right.innerHTML += elem;

        }
    });


    let projects = document.querySelectorAll(".project__template");

    for (let x = 0; x < projects.length; x++) {
        projects[x].addEventListener('click', function() {
            let details = projects[x].querySelector(".project__details");
            if (details.style.display !== "none") {
                details.style.display = "none";
            } else {
                details.style.display = "flex";
            }
        });

    }

}


/* <div class="aside-skill aside-skill__project">
                            <h2 class="title-header project__skills-header">Skills</h2>
                            <div class="skill skill__project" id="skill__project">
                                ${skills_elements}
                            </div>
                        </div> */