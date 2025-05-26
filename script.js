function showSection(id) {
      document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
      document.getElementById(id).classList.add('active');

      document.querySelectorAll('.nav a').forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
    }

    const projectData = {
      spotify: {
        title: 'Spotify Now',
        description: 'A real-time music dashboard using React and the Spotify API. Built with dynamic data fetching and sleek UI elements.'
      },
      portfolio: {
        title: 'Portfolio Builder',
        description: `A lightweight, responsive tool designed to help users quickly build and customize personal portfolios. I developed a sample portfolio template using HTML, CSS, and JavaScript, and the source code is publicly accessible for reference and use.\n <br><a href="https://github.com/viniba23/template_design.git" target="_blank" style="color:white;">Template  Link</a>`
      },
      uikit: {
        title: 'Students Details Management System',
        description: 'The Student Details Management System is a web-based application built with Angular that provides an efficient way to manage student information in educational institutions.\n <br><a href="https://github.com/viniba23/develop1.git" target="_blank" style="color:white;">Project GitHub Link</a>'
      }
    };

    document.querySelectorAll('.project-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const key = this.getAttribute('data-project');
        const project = projectData[key];
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-description').innerHTML = project.description;
        document.getElementById('project-list').style.display = 'none';
        document.getElementById('project-details').style.display = 'block';
      });
    });

    function hideProjectDetails() {
      document.getElementById('project-list').style.display = 'block';
      document.getElementById('project-details').style.display = 'none';
    }

    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Message sent successfully!');
      this.reset();
    });