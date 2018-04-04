window.onload = function() {
    let mySkill = document.getElementsByClassName("skill")[0];

    function displaySkills() {
        const skill_images = ['img/java-logo.png', 'img/spring-logo.png', 'img/api-logo.png', 'img/maven-logo.png', 'img/oracle-logo.png', 'img/hibernate-logo.png', 'img/html-logo.png', 'img/js-logo.png', 'img/css-logo.png', 'img/sass-logo.png', 'img/webpack-logo.png', 'img/gulp-logo.png', 'img/grunt-logo.png', 'img/xml-logo.png', 'img/GitHub-logo.png', 'img/eclipse-logo.png'];
        const skills = ['java', 'spring', 'api', 'maven', 'oracle', 'hibernate', 'html', 'js', 'css', 'sass', 'xml', 'webpack', 'gulp', 'grunt', 'GitHub', 'eclipse'];
        // const skill_images = ['img/java-logo.svg']
        skills.forEach((skill, iIndex) => {

            skill_images.forEach((image, sIndex) => {


                // let img = document.createElement('img');
                //let link = document.createElement('a');&& url.includes(skill)
                let span = document.createElement('span');
                span.style.backgroundImage = 'url(' + image + ')';

                if (image.includes(skill)) {
                    // img.src = image;
                    // img.className = 'skill__' + skill;

                    span.className = 'skill__icon';
                    mySkill.append(span);
                    //mySkill.appendChild(link);

                }
            })



        });
    }

    displaySkills();
}