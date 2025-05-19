import "./Navigation.css"

function Navigation() {
  return (
    <div className="Nav">
      <header className="Nav-header">

        <h1>
          This is the Nav bar
        </h1>

        <ul className="NavigationList">

          <li className="NavItems">
            <a href="/#/About" className="NavItems">About page</a>
          </li>
          <li>
            <a href="/">Projects page</a>
          </li>
          <li>
            <a href="/#/Resume">Resume page</a>
          </li>
        </ul>

      </header>
    </div>
  );
}

export default Navigation;
