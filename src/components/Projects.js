import "./Projects.css"
import DisplayCard from "./DisplayCard";




function Projects() {

  function project(id, name, description, imageUrl) {
    this.projectId = id;
    this.projectName = name;
    this.projectDescription = description;
    this.projectImageUrl = imageUrl;
  }

  // Add projects into this array and they will show on the projects page with slight alternating colours

  const projects = [
    new project(1, 'Portfolio Website', 'This was a project that I just started developing.', 'https://placehold.co/600x400'),
    new project(2, 'Algorithm Visualiser', 'This was a project that I just started developing.', 'https://placehold.co/600x400'),
    new project(3, 'Online Audio Converter', 'I built this application to learn AWS and some of it\'s different services', 'https://placehold.co/600x400'),
    new project(4, 'Duress Alarm', 'I built a duress alarm, using ElectronJS, that could was configure', 'https://placehold.co/600x400'),
    new project(5, 'Algorithm Visualiser', 'This was a project that I just started developing.', 'https://placehold.co/600x400'),
  ]

  return (
    <div className="App">
      <header className="App-header">

        <h1 className="Header1">
          This is the projects page
        </h1>
        <p>
          Edit me and fill me with projects.
        </p>
        {projects.map((project) => (
          <DisplayCard project={project} />
        ))}
      </header>
    </div>
  );
}

export default Projects;



