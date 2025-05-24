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
        description: 'A minimalist portfolio site generator built with HTML/CSS/JS. Users can create and deploy their own sites easily.'
      },
      uikit: {
        title: 'UI Kit',
        description: 'A reusable design system used for building consistent UI components efficiently.'
      }
    };

    document.querySelectorAll('.project-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const key = this.getAttribute('data-project');
        const project = projectData[key];
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-description').textContent = project.description;
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