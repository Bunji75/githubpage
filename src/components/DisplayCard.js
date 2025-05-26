import "./DisplayCard.css"

const projects = {
  name: 'Portfolio Website',
  description: 'This was a project that I just started developing.',
  imageUrl: 'https://placehold.co/600x400',
}

export default function DisplayCard() {
  return (
    <div className="displayCard">
      <span>
        <h2 className="cardH1">
          {projects.name}
        </h2>
        <p className="cardP">
          {projects.description}
        </p>
      </span>
      <img className="cardImg" src={projects.imageUrl} alt="Project thumbnail" />
    </div>
  );
}
