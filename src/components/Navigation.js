import "./Navigation.css"

function Navigation() {
  return (
    <div className="Nav">
      <nav className="Nav-header">

        <ul className="NavigationList">

          <li className="NavTitle">
            <h1>This is the Nav Bar</h1>
          </li>
          <li className="NavItem">
            <a href="githubpages/#/About" className="NavItem">About page</a>
          </li>
          <li className="NavItem">
            <a href="githubpage/">Projects page</a>
          </li>
          <li className="NavItem" i>
            <a href="githubpage/#/Resume">Resume page</a>
          </li>
        </ul>

      </nav>
    </div>
  );
}

export default Navigation;
