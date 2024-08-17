function initProjects() {
    const projects = [
    {id: 1,
                title: "Financial Tracker",
                date: "Present",
                tags: ["React", "JavaScript", "Firebase"],
                description: "I'm currently developing a financial tracker in react, you can check out the progress in the link below.",
                releaseLink: "https://github.com/furthestgoose/financial-tracker"
            },
            {
                id: 2,
                title: "Portfolio Website V1",
                date: "2024-08-17",
                tags: ["JavaScript", "CSS", "HTML"],
                description: "This is the first version of my portfolio website, showcasing my projects and skills and it's what you're on right now :)",
            },
            {
                id: 3,
                title: "IOS Incremental Game",
                date: "2024-07-16",
                tags: ["Swift", "SwiftUI", "Swift Data"],
                description: "Developed an incremental game based around the journey from classical to quantum computers for IOS devices using SwiftUI and Swift Data to manage game state.",
                releaseLink: "https://furthestgoose.github.io/Quantum-Clicker/"
            },
            {
                id: 4,
                title: "Media Based Matching App",
                date: "2024-05-30",
                tags: ["Swift", "SwiftUI", "Swift Data", "API Integration", "Firebase", "AdMob"],
                description: "Developed a media-based matching app using SwiftUI and Firebase to allow users to find content they both want to watch.Users connect via a friends system which is powered by firebase and then are shown various movies whose details are retrieved through the TMDB API.",
                releaseLink: "https://furthestgoose.github.io/Media-Match/"
            },
            {
                id: 5,
                title: "IOS To Do List App",
                date: "2024-05-21",
                tags: ["Swift", "SwiftUI", "Swift Data"],
                description: "Developed a to do list app using Swift and SwiftUI for IOS devices. I used Swift Data to store the data for the app and ensured compatibility with Ipads.",
                releaseLink: "https://github.com/furthestgoose/To-Do-app"
            },
            {
                id: 6,
                title: "AI Storyteller",
                date: "2024-05-11",
                tags: ["HTML","CSS","JavaScript", "Transformers.js", "GSAP"],
                description: "Developed an AI Storyteller website using a Transformers.js LLM model to create interactive stories based on user input and GSAP to create an interactive home page.",
                releaseLink: "https://furthestgoose.github.io/InkForge/"
            },
            {
                id: 7,
                title: "Discord Economy Bot",
                date: "2024-05-06",
                tags: ["Python","SQLite","Discord.py"],
                description: "Developed a discord bot that allows users to earn currency through various commands and minigames. The bot uses SQLite to store user data and discord.py to interact with the discord API.",
                releaseLink: "https://furthestgoose.github.io/Economy-Bot/"
            },
            {
                id: 8,
                title: "Dart Weather CLI App",
                date: "2024-04-07",
                tags: ["Dart", "API Integration", "Oranda"],
                description: "Developed a weather app using dart that allows you to access the weather for any city in the world through a command line tool using the WeatherAPI.com API.I also used Oranda to make a release website for this project.",
                releaseLink: "https://furthestgoose.github.io/Weather-CLI-App/"
            },
            {
                id: 9,
                title: "Pokemon Guessing Game",
                date: "2024-02-25",
                tags: ["HTML","CSS","JavaScript","API Integration","Electron","Oranda"],
                description: "Developed a Pokemon guessing game using the PokeAPI and Electron as a chance to learn how to implement Electron and leverage APIs within my projects.I also learnt how to use the static site generator Oranda for the release website for this project.",
                releaseLink: "https://furthestgoose.github.io/Who-s-that-pokemon-/"
            },
    ];

    function createProjectElement(project) {
        const projectEl = document.createElement('div');
        projectEl.className = 'project';
        projectEl.innerHTML = `
            <span class="project-date">${project.date}</span>
            <h2>${project.title}</h2>
            <div class="project-details">
                <p>${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${project.releaseLink ? `<a href="${project.releaseLink}" target="_blank">View Project</a>` : ''}
            </div>
        `;

        projectEl.addEventListener('click', () => {
            const details = projectEl.querySelector('.project-details');
            details.classList.toggle('open');
        });

        return projectEl;
    }

    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        const projectEl = createProjectElement(project);
        projectsContainer.appendChild(projectEl);
    });
}

function initCV() {
    const cvEntries = [
        {
            id: 1,
            title: "Student",
            company: "University of Leicester",
            dateRange: "20/09/2023 - Present",
            description: "I am currently studying as a second year student at the university of leicester, my first year covered a variety of topics including the usage of git, revising basics of programming through python, learning OOP through java and further improving upon my website development skills.",
        },
        {
            id: 2,
            title: "Student",
            company: "Colchester Institute",
            dateRange: "20/09/2021 - 10/06/2023",
            description: "Completed a BTEC Level 3 extended diploma in Computing achieving D*D*D. Covered several topics including but not limited to: app development in android studio, game development in unity and website development",
        },
            // Add more CV entries as needed
        ];

        function createCVElement(cv) {
            const cvEl = document.createElement('div');
            cvEl.className = 'cv-item';
            cvEl.innerHTML = `
                <span class="cv-dates">${cv.dateRange}</span>
                <h2>${cv.title}</h2>
                <div class="cv-company">${cv.company}</div>
                <div class="cv-details">
                    <p>${cv.description}</p>
                </div>
            `;
        
            cvEl.addEventListener('click', () => {
                const details = cvEl.querySelector('.cv-details');
                details.classList.toggle('open');
            });
        
            return cvEl;
        }

    const cvContainer = document.querySelector('#CV');
    cvEntries.forEach(cv => {
        const cvEl = createCVElement(cv);
        cvContainer.appendChild(cvEl);
    });
}

initProjects();
initCV();

// Mouse move effect for background
document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Calculate the radial gradient based on mouse position with toned-down light
    const gradient = `radial-gradient(circle at ${x}px ${y}px, rgba(52, 152, 219, 0.3) 0%, rgba(52, 152, 219, 0) 50%)`;
    // Apply the gradient to the light-effect div
    document.querySelector('.light-effect').style.background = gradient;
});

$(document).ready(function() {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                $('.nav a').removeClass('active');
                $(`.nav a[href="#${targetId}"]`).addClass('active');
            }
        });
    }, {
        threshold: 0.5 // Adjust the threshold if needed
    });

    // Observe each section
    $('#about, #CV, #projects').each(function() {
        observer.observe(this);
    });

    // Smooth scrolling and active link management on click
    $('.nav a').on('click', function(e) {
        const targetId = $(this).attr('href').substring(1); // Extract the section ID
        $('html, body').animate({
            scrollTop: $(`#${targetId}`).offset().top
        }, 500);
        $('.nav a').removeClass('active');
        $(this).addClass('active');
    });
});