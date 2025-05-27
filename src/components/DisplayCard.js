import "./DisplayCard.css"


export default function DisplayCard(props) {

  // function deconstructProps(props) {
  //
  //   let i = props.length;
  //   let projects = []
  //   while (i > 0) {
  //     generator(i, projects)
  //
  //   }
  //   function generator(index, list) {
  //
  //     list = props[i]
  //     return list
  //   }
  //
  // }

  let style;

  if (props.project.projectId % 2) {
    style = '#167937';
  }
  else {
    style = '#168747';
  }

  return (
    <div className="displayCard" style={{ background: style }}>
      <span>
        <h2 className="cardH1">
          {props.project.projectName}
        </h2>
        <p className="cardP" >
          {props.project.projectDescription}
        </p>
      </span>
      <img className="cardImg" src={props.project.projectImageUrl} alt="Project thumbnail" />
    </div>
  );
}
