var userLanguage = navigator.language.substring(0, 2);
var currentLanguage = document.currentScript.getAttribute('data-current-language') || 'en';
var translateButton = document.getElementById('translate-button');

translateButton.addEventListener('click', toggleLanguage);

window.onload = function () {
    if(userLanguage === 'fr')
    {
        toggleLanguage();
    }
};

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
        "fr": "\"J'aide les entreprises à concevoir des logiciels efficaces et innovants, axés sur l'expérience utilisateur.\"",
        "en": "\"I help companies design efficient and innovative softwares, focused on the user experience.\""
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
        "fr": "<span class='compagny'>Salarié </span>chez <a href='https://www.d-edge.com/fr/' target='_blank' title='Site web D-Edge' class='external-link'>D-EDGE</a> (Logiciels hôteliers) Paris/ 2022 - actuellement</p>",
        "en": "<span class='compagny'>Employee </span>at <a href='https://www.d-edge.com/' target='_blank' title='D-Edge website' class='external-link'>D-EDGE</a> (Hotelier softwares) Paris/ 2022 - currently</p>"
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
        "fr": "<span class='compagny'>Cabinet privé, clinique </span>Paris/ 2011 - décembre 2021",
        "en": "<span class='compagny'>Private Practice, clinic </span>Paris/ 2011 - December 2021"
    },
    // Experience Item 1 Translations
    "experiences.item1.missions": {
        "fr": "Missions :",
        "en": "Missions :"
    },
    "experiences.item1.mission1": {
        "fr": "Conception et développement d'applications logicielles pour répondre aux attentes des clients.",
        "en": "Design and development of software applications to meet client expectations."
    },
    "experiences.item1.mission2": {
        "fr": "Collaboration étroite avec les équipes de conception pour garantir une expérience utilisateur optimale.",
        "en": "Close collaboration with design teams to ensure optimal user experience."
    },
    "experiences.item1.mission3": {
        "fr": "Collaboration étroite avec les équipes commerciales et produits pour répondre aux exigences techniques et fonctionnelles.",
        "en": "Close collaboration with business and product teams to meet technical and fonctional requirements."
    },
    "experiences.item1.mission4": {
        "fr": "Optimisation des performances de l'application pour garantir une réponse rapide.",
        "en": "Optimization of application performance to ensure a rapid response."
    },
    "experiences.item1.mission5": {
        "fr": "Examen de code et résolution de problèmes complexes.",
        "en": "Code review and resolution of complex issues."
    },
    "experiences.item1.mission6": {
        "fr": "Travail sur l'amélioration continue de TARS, le système de réservation central d'Accor (utilisé par plus de 5k hôtels dans le monde).",
        "en": "Work on the continuous improvement of TARS, Accor's central reservation system (used by more than 5k hotels worldwide)."
    },
    "experiences.item1.mission7": {
        "fr": "Développement du nouveau connecteur API HotelTonight v2 (AirBnb).",
        "en": "Development of the new HotelTonight v2 connector API (AirBnb)."
    },
    "experiences.item1.mission8": {
        "fr": "Amélioration du code et développement de fonctionnalités de certains connecteurs majeurs d'OTA (Booking.com, Expedia, Agoda, etc).",
        "en": "Code improvment and features development of some major OTA's connectors (Booking.com, Expedia, Agoda, etc)."
    },
    "experiences.item1.tools": {
        "fr": "Outils / Technologies :",
        "en": "Tools/Technologies :"
    },
    "experiences.item1.tool1": {
        "fr": "Langages de programmation : C#, F#.",
        "en": "Programming languages: C#, F#."
    },
    "experiences.item1.tool2": {
        "fr": "Frameworks : .NET, Fable.",
        "en": "Frameworks: .NET, Fable."
    },
    "experiences.item1.tool3": {
        "fr": "Gestion de base de données : MySQL, MongoDB, MSSQL.",
        "en": "Database management: MySQL, MongoDB, MSSQL."
    },
    "experiences.item1.tool4": {
        "fr": "Contrôle de version : Git & Gitlab.",
        "en": "Version Control: Git & Gitlab."
    },
    "experiences.item1.tool5": {
        "fr": "Intégration continue : Gitlab CI/CD",
        "en": "Continuous Integration: Gitlab CI/CD."
    },
    "experiences.item1.skills": {
        "fr": "Compétences développées :",
        "en": "Improved skills :"
    },
    "experiences.item1.skill1": {
        "fr": "Principes d'ingénierie logicielle et bonnes pratiques de programmation.",
        "en": "Software engineering concepts and programming best practices."
    },
    "experiences.item1.skill2": {
        "fr": "Programmation orientée objet et programmation fonctionnelle.",
        "en": "Oriented object programming and functional programming."
    },
    "experiences.item1.skill3": {
        "fr": "Patrons de conception et principes SOLID.",
        "en": "Design patterns and SOLID principles."
    },
    "experiences.item1.skill4": {
        "fr": "Méthodologies Agile et cadre Scrum.",
        "en": "Agile methodologies and Scrum framework."
    },
    "experiences.item1.skill5": {
        "fr": "Connaissance approfondie des frameworks C# (.NET).",
        "en": "In-depth knowledge of C# frameworks (.NET)."
    },
    "experiences.item1.skill6": {
        "fr": "Bonne pratique du développement et de la conception logiciels.",
        "en": "Good practices of software development and design."
    },
    "experiences.item1.skill7": {
        "fr": "Expérience dans la résolution de problèmes complexes.",
        "en": "Experience in resolving complex problems."
    },

    // Experience Item 2 Translations
    "experiences.item2.missions": {
        "fr": "Missions :",
        "en": "Missions :"
    },
    "experiences.item2.mission1": {
        "fr": "Conception et développement de sites web et applications réactives et conviviales.",
        "en": "Design and development of responsive and user-friendly websites & applications."
    },
    "experiences.item2.mission2": {
        "fr": "Implémentation de fonctionnalités sur mesure en fonction des besoins du client.",
        "en": "Implementation of custom features and functionalities based on client requirements."
    },
    "experiences.item2.mission3": {
        "fr": "Collaboration avec les clients pour comprendre et répondre à leurs besoins spécifiques et objectifs.",
        "en": "Collaboration with clients to understand and address their specific needs and goals."
    },
    "experiences.item2.tools": {
        "fr": "Outils / Technologies :",
        "en": "Tools/Technologies :"
    },
    "experiences.item2.tool1": {
        "fr": "HTML, CSS, JavaScript pour le développement front-end.",
        "en": "HTML, CSS, JavaScript for front-end development."
    },
    "experiences.item2.tool2": {
        "fr": "Expérience avec des frameworks/bibliothèques populaires tels que React, Vue.js, WordPress and Wix.",
        "en": "Experience with popular frameworks/libraries such as React, Vue.js, WordPress and Wix."
    },
    "experiences.item2.tool3": {
        "fr": "Utilisation de technologies de serveur web comme Nginx, Node.js, Wamp/Xampp.",
        "en": "Use of web server technologies like Nginx, Node.js, Wamp/Xampp"
    },
    "experiences.item2.tool4": {
        "fr": "Contrôle de version avec Git et GitHub.",
        "en": "Version control with Git and GitHub."
    },
    "experiences.item2.skills": {
        "fr": "Compétences développées :",
        "en": "Improved Skills :"
    },
    "experiences.item2.skill1": {
        "fr": "Compétent en développement front-end avec un accent sur l'expérience utilisateur.",
        "en": "Proficient in front-end development with a focus on user experience."
    },
    "experiences.item2.skill2": {
        "fr": "Capacité à traduire les exigences du client en solutions techniques.",
        "en": "Ability to translate client requirements into technical solutions."
    },
    "experiences.item2.skill3": {
        "fr": "Compétences efficaces en communication et collaboration.",
        "en": "Effective communication and collaboration skills."
    },

    // Experience Item 3 Translations
    "experiences.item3.missions": {
        "fr": "Missions :",
        "en": "Missions :"
    },
    "experiences.item3.mission1": {
        "fr": "Fournir des traitements ostéopathiques personnalisés aux patients.",
        "en": "Providing personalized osteopathic treatments for patients."
    },
    "experiences.item3.mission2": {
        "fr": "Réaliser des évaluations et examens approfondis pour diagnostiquer et traiter les problèmes musculo-squelettiques.",
        "en": "Conducting thorough assessments and examinations to diagnose and address musculoskeletal issues."
    },
    "experiences.item3.mission3": {
        "fr": "Éduquer les patients sur les mesures préventives et les modifications de style de vie.",
        "en": "Educating patients on preventive measures and lifestyle modifications."
    },
    "experiences.item3.tools": {
        "fr": "Outils / Technologies :",
        "en": "Tools/Technologies :"
    },
    "experiences.item3.tool1": {
        "fr": "Techniques ostéopathiques manuelles.",
        "en": "Manual osteopathic techniques."
    },
    "experiences.item3.tool2": {
        "fr": "Systèmes de gestion des patients pour la tenue des dossiers.",
        "en": "Patient management systems for record-keeping."
    },
    "experiences.item3.skills": {
        "fr": "Compétences développées :",
        "en": "Improved Skills :"
    },
    "experiences.item3.skill1": {
        "fr": "Connaissance approfondie des principes et techniques ostéopathiques.",
        "en": "In-depth knowledge of osteopathic principles and techniques."
    },
    "experiences.item3.skill2": {
        "fr": "Compétences interpersonnelles et communication avec les patients.",
        "en": "Interpersonal and communication skills with patients."
    },
    "experiences.item3.skill3": {
        "fr": "Capacité à analyser et diagnostiquer des conditions musculo-squelettiques.",
        "en": "Ability to analyze and diagnose musculoskeletal conditions."
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
        "fr": "Ostéopathe",
        "en": "Osteopath"
    },
    "formations.item3.details": {
        "fr": "<span class='compagny'>École d'Ostéopathie de Paris </span>Paris/ septembre 2011 - septembre 2016",
        "en": "<span class='compagny'>Paris School of Osteopathy </span>Paris/ September 2011 - September 2016"
    },
    "formations.item4.title": {
        "fr": "Enseignement général",
        "en": "General education"
    },
    "formations.item4.details": {
        "fr": "<span class='compagny'>Lycée de Villaroy </span>Guyancourt/ 2004 - 2011</p>",
        "en": "<span class='compagny'>Villaroy High School </span>Guyancourt/ 2004 - 2011</p>"
    },
    "driving-license": {
        "fr": "<i class='fas fa-road'></i><span>Permis de conduire</span>",
        "en": "<i class='fas fa-road'></i><span>Driving License</span>"
    },
    "mobility": {
        "fr": "<i class='fas fa-plane-departure'></i><span style='margin-left: -4px'>Mobilité Internationale</span>",
        "en": "<i class='fas fa-plane-departure'></i><span style='margin-left: -4px'>International Mobility</span>"
    },
    "engineering.title": {
        "fr": "Ingénierie logicielle",
        "en": "Software Engineering"
    },
    "technologies.title": {
        "fr": "Compétences",
        "en": "Skills"
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
        "fr": "Serveur web",
        "en": "Web server"
    },
    "technologies.containers": {
        "fr": "Conteneurs & VM",
        "en": "Containers & VM"
    },
    "technologies.queues": {
        "fr": "Systèmes de messages",
        "en": "Message queue systems"
    },
    "technologies.databases": {
        "fr": "Gestion de base de données",
        "en": "Database management"
    },
    "technologies.versioncontrol": {
        "fr": "Contrôle de version",
        "en": "Version control"
    },
    "technologies.cloud": {
        "fr": "Services Cloud",
        "en": "Cloud services"
    },
    "technologies.os": {
        "fr": "OS & Shells",
        "en": "OS & Shells"
    },
    "technologies.datatools": {
        "fr": "Outils de visualisations",
        "en": "Monitoring tools"
    },
    "technologies.tools": {
        "fr": "Outils de collaboration",
        "en": "Collaboration Tools"
    },
    "languages.title": {
        "fr": "Langues",
        "en": "Languages"
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
        "fr": "Sport, voyage, jeux vidéos, arts martiaux",
        "en": "Sport, travel, video games, martial arts"
    }
};