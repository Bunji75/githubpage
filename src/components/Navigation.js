import "./Navigation.css"

function Navigation() {
  return (
    <div className="Nav">
      <nav className="Nav-header">

        <ul className="NavigationList">

          <li className="NavTitle">
            <h1>Dayne's Github Page's</h1>
          </li>
          <li className="NavItem">
            <a href="/githubpage/#/">Projects page</a>
          </li>
          <li className="NavItem" >
            <a href="/githubpage/#/Resume">Resume page</a>
          </li>
        </ul>

      </nav>
    </div>
  );
}

export default Navigation;
