import "./DisplayCard.css"

function DisplayCard() {
  return (
    <div className="displayCard">
      <span>
        <h2 className="cardH1">
          Project 1
        </h2>
        <p className="cardP">
          This was a project that I just started developing.
        </p>
      </span>
      <img src="https://placehold.co/600x400" alt="Project image" />
    </div>
  );
}

export default DisplayCard;
