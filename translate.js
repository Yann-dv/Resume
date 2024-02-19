var currentLanguage = document.currentScript.getAttribute('data-current-language') || 'en';
var translateButton = document.getElementById('translate-button');

translateButton.addEventListener('click', toggleLanguage);


function toggleLanguage() {
    currentLanguage = (currentLanguage === 'fr') ? 'en' : 'fr';
    translatePage(); 

    if (translateButton) {
        translateButton.style.backgroundImage = (currentLanguage === 'fr') ? 'url("./images/en-flag.png")' : 'url("./images/fr-flag.png")';
    }
}

function translatePage() {
    var elements = document.querySelectorAll('[data-translate]');

    elements.forEach(function (element) {
        var translationKey = element.getAttribute('data-translate');

        if (translations[translationKey] && translations[translationKey][currentLanguage]) {
                var translatedText = translations[translationKey][currentLanguage];
                
                if (translatedText) {
                    element.innerHTML = translatedText;
                }
                else {
                        console.log('No translation found for key: ' + translationKey);
                }
            }
    });
}

var translations = {
    'header.title': {
        'fr': 'Yann Hagege - Ingénierie logicielle et applications',
        'en': 'Yann Hagege - Software & Application Engineering'
    },
    "header.subtitle": {
        "fr": "Développement de logiciels et applications web et mobiles",
        "en": "Web and Mobile Software Development"
    },
    "fullname": {
        "fr": "Yann HAGEGE",
        "en": "Yann HAGEGE"
    },
    "job.goal": {
        "fr": "Ingénieur logiciel",
        "en": "Software Engineer"
    },
    "pitch": {
        "fr": "\"J'aide les entreprises à concevoir des applications efficaces et innovantes, axées sur l'expérience utilisateur.\"",
        "en": "\"I help companies design efficient and innovative applications, focused on the user experience.\""
    },
    "skills.title": {
        "fr": "Compétences",
        "en": "Skills"
    },
    "skills.item1": {
        "fr": "Développer des applications web complètes, du Front-end au Back-end.",
        "en": "Develop complete web applications, from Front-end to Back-end."
    },
    "skills.item2": {
        "fr": "Concevoir des applications en utilisant des frameworks populaires tels que Angular, React, Vue.js.",
        "en": "Design applications using popular frameworks such as Angular, React, Vue.js."
    },
    "skills.item3": {
        "fr": "Développer des solutions Back-end robustes en utilisant des technologies telles que C#, .NET, et MySQL.",
        "en": "Develop robust Back-end solutions using technologies such as C#, .NET, and MySQL."
    },
    "skills.item4": {
        "fr": "Concevoir et implémenter des API RESTful pour une communication transparente entre les applications et les bases de données.",
        "en": "Design and implement RESTful APIs for seamless communication between applications and databases."
    },
    "skills.item5": {
        "fr": "Concevoir et gérer des bases de données MySQL, PostgreSQL, MongoDB, SQL Server.",
        "en": "Design and manage MySQL, PostgreSQL, MongoDB, SQL Server databases."
    },
    "skills.item6": {
        "fr": "Déployer et gérer des infrastructures cloud avec AWS, Azure et Google Cloud.",
        "en": "Deploy and manage cloud infrastructures with AWS, Azure, and Google Cloud."
    },
    "skills.item7": {
        "fr": "Maîtriser l'optimisation des performances, l'accessibilité et le SEO pour une expérience utilisateur améliorée.",
        "en": "Proficient in optimizing performance, accessibility, and SEO for enhanced user experience."
    },
    "skills.item8": {
        "fr": "Concevoir une interface utilisateur (UI) basée sur l'expérience utilisateur (UX).",
        "en": "Design user interface (UI) based on user experience (UX)."
    },
    "skills.item9": {
        "fr": "Choisir une solution technique adaptée aux besoins du client et travailler en mode Scrum/Agile.",
        "en": "Choose a technical solution tailored to client needs and work in Scrum/Agile mode."
    },
    "skills.item10": {
        "fr": "Créer des tests unitaires et d'intégration, déboguer le code, refactoriser le code.",
        "en": "Create unit and integration tests, debug code, refactor code."
    },
    "experiences.title": {
        "fr": "Expériences Professionnelles",
        "en": "Professional Experiences"
    },
    "experiences.item1.title": {
        "fr": "Ingénieur logiciel",
        "en": "Software Engineer"
    },
    "experiences.item1.details": {
        "fr": "<span class='compagny'>Employé </span>Paris/ 2022 - présent",
        "en": "<span class='compagny'>Employee </span>Paris/ 2022 - now"
    },
    "experiences.item2.title": {
        "fr": "Développeur Web",
        "en": "Web Developer"
    },
    "experiences.item2.details": {
        "fr": "<span class='compagny'>Indépendant </span>Paris/ 2021 - 2022",
        "en": "<span class='compagny'>Freelancer </span>Paris/ 2021 - 2022"
    },
    "experiences.item3.title": {
        "fr": "Ostéopathe",
        "en": "Osteopath"
    },
    "experiences.item3.details": {
        "fr": "<span class='compagny'>Cabinet privé </span>Paris/ septembre 2016 - décembre 2021",
        "en": "<span class='compagny'>Private Practice </span>Paris/ September 2016 - December 2021"
    },
    "experiences.item4.title": {
        "fr": "Entraîneur sportif, Instructeur de boxe",
        "en": "Sports Coach, Boxing Instructor"
    },
    "experiences.item4.details": {
        "fr": "<span class='compagny'>Body-Hit, Club-360 </span>Versailles, Tokyo/ janvier - septembre 2019",
        "en": "<span class='compagny'>Body-Hit, Club-360 </span>Versailles, Tokyo/ January - September 2019"
    },
    "experiences.item5.title": {
        "fr": "Manutentionnaire",
        "en": "Handler"
    },
    "experiences.item5.details": {
        "fr": "<span class='compagny'>La Bellevilloise </span>Paris/ novembre 2011 - septembre 2016",
        "en": "<span class='compagny'>La Bellevilloise </span>Paris/ November 2011 - September 2016"
    },
    "formations.title": {
        "fr": "Diplômes et Éducation",
        "en": "Degrees and Education"
    },
    "formations.item1.title": {
        "fr": "Développeur Concepteur logiciel",
        "en": "Software Designer Developer "
    },
    "formations.item1.details": {
        "fr": "<span class='compagny'>Openclassrooms </span>Paris/ mai 2022 - mai 2024",
        "en": "<span class='compagny'>Openclassrooms </span>Paris/ May 2022 - May 2024"
    },
    "formations.item2.title": {
        "fr": "Développeur Web",
        "en": "Web Developer"
    },
    "formations.item2.details": {
        "fr": "<span class='compagny'>Openclassrooms </span>Paris/ mars 2021 - septembre 2021",
        "en": "<span class='compagny'>Openclassrooms </span>Paris/ March 2021 - September 2021"
    },
    "formations.item3.title": {
        "fr": "BPJEPS Sports de Contact et Disciplines Associées",
        "en": "BPJEPS Contact Sports and Associated Disciplines"
    },
    "formations.item3.details": {
        "fr": "<span class='compagny'>CREPS IDF </span>Châtenay-Malabry/ 2022",
        "en": "<span class='compagny'>CREPS IDF </span>Châtenay-Malabry/ 2022"
    },
    "formations.item4.title": {
        "fr": "Préparation Physique et Réathlétisation",
        "en": "Physical Preparation and Rehab"
    },
    "formations.item4.details": {
        "fr": "<span class='compagny'>Université d'Evry </span>Evry/ septembre 2017 - août 2018",
        "en": "<span class='compagny'>University of Evry </span>Evry/ September 2017 - August 2018"
    },
    "formations.item5.title": {
        "fr": "Ostéopathe",
        "en": "Osteopath"
    },
    "formations.item5.details": {
        "fr": "<span class='compagny'>École d'Ostéopathie de Paris </span>Paris/ septembre 2011 - septembre 2016",
        "en": "<span class='compagny'>Paris School of Osteopathy </span>Paris/ September 2011 - September 2016"
    },
    "formations.item6.title": {
        "fr": "Naturopathe",
        "en": "Naturopath"
    },
    "formations.item6.details": {
        "fr": "<span class='compagny'>C.I.E.S </span>Montpellier/ septembre 2008 - octobre 2009",
        "en": "<span class='compagny'>C.I.E.S </span>Montpellier/ September 2008 - October 2009"
    },
    "formations.item7.title": {
        "fr": "Baccalauréat Général",
        "en": "High School Diploma"
    },
    "formations.item7.details": {
        "fr": "<span class='compagny'>Lycée Villaroy </span>Guyancourt/ septembre 2004 - juillet 2007",
        "en": "<span class='compagny'>Villaroy High School </span>Guyancourt/ September 2004 - July 2007"
    },
    "driving-license": {
        "fr": "<i class='fas fa-road'></i><span>Permis de conduire</span>",
        "en": "<i class='fas fa-road'></i><span>Driving License</span>"
    },
    "mobility": {
        "fr": "<i class='fas fa-plane-departure'></i><span style='margin-left: -4px'>Mobilité Internationale</span>",
        "en": "<i class='fas fa-plane-departure'></i><span style='margin-left: -4px'>International Mobility</span>"
    },
    "technologies.title": {
        "fr": "Technologies",
        "en": "Technologies"
    },
    "technologies.backend": {
        "fr": "Back-end",
        "en": "Back-end"
    },
    "technologies.frontend": {
        "fr": "Front-end",
        "en": "Front-end"
    },
    "technologies.server": {
        "fr": "Gestion de serveur",
        "en": "Server management"
    },
    "technologies.databases": {
        "fr": "Gestion de base de données",
        "en": "Database management"
    },
    "technologies.cloud": {
        "fr": "Services Cloud",
        "en": "Cloud services"
    },
    "technologies.programminglanguages": {
        "fr": "Langages de programmation",
        "en": "Programming languages"
    },
    "technologies.os": {
        "fr": "OS & Commandes",
        "en": "OS & Command Prompts"
    },
    "technologies.datatools": {
        "fr": "Outils de gestion de données",
        "en": "Data Management Tools"
    },
    "technologies.tools": {
        "fr": "Outils de collaboration",
        "en": "Collaboration Tools"
    },
    "languages.title": {
        "fr": "Langues",
        "en": "Languages"
    },
    "languages.french": {
        "fr": "Maternel",
        "en": "Native"
    },
    "languages.english": {
        "fr": "Affaires",
        "en": "Business"
    },
    "languages.spanish": {
        "fr": "Débutant",
        "en": "Beginner"
    },
    "languages.japanese": {
        "fr": "Débutant",
        "en": "Beginner"
    },
    "languages.proficiency": {
        "fr": "Maîtrise",
        "en": "Proficiency"
    },
    "hobbies.title": {
        "fr": "Centres d'intérêt",
        "en": "Hobbies"
    },
    "hobbies": {
        "fr": "Sport, voyage, jeux vidéos, spiritualité",
        "en": "Sport, travel, video games, spirituality"
    }
};


translatePage();