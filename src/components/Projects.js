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
    new project(1, 'Portfolio Website', 'This was a project that I just started developing.', './portfolioWebsite.PNG'),
    new project(2, 'Algorithm Visualiser', 'This was a project that I just started developing.', 'https://placehold.co/600x400'),
    new project(3, 'Online Audio Converter', 'I built this application to learn AWS and some of it\'s different services', './OnlineAudioConverter.PNG'),
    new project(4, 'Duress Alarm', 'I built a duress alarm, using ElectronJS, that could was configure', './DuressAlarm.PNG'),
    new project(5, 'C# Pathfinder application', 'A maze solver that has a collection of different obstacles that must be navigated', 'https://placehold.co/600x400'),
  ]

  return (
    <div className="App">
      <header className="App-header">

        <h1 className="Header1">
          Welcome to My Projects
        </h1>
        <p>
          These are some of the projects that I have developed.
        </p>
        {projects.map((project) => (
          <DisplayCard project={project} />
        ))}
      </header>
    </div>
  );
}

export default Projects;



