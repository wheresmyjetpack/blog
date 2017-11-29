import React from 'react';

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href={props.homePath}>Dashboard</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-supported-content">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navbar-supported-content" className="collapse navbar-collapse">
        <div className="navbar-nav mr-auto">
          <NavItem uri={props.newPostPath} anchor="Write"
                   currentPage={props.currentPage} />
          <NavItem uri={props.draftsPath} anchor="Drafts"
                   currentPage={props.currentPage} />
        </div>
      </div>
    </nav>
  );
}

const NavItem = (props) => {
  let classNames = 'nav-item ';
  if (props.currentPage === props.uri) {
    classNames += ' active';
  }

  return (
    <li className={classNames}>
      <a href={props.uri} className="nav-link">{props.anchor}</a>
    </li>
  );
}

export default Nav;
