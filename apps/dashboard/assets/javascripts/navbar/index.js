import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './base';

let root = document.getElementById('nav-root');
let requestUri = window.location.pathname;

ReactDOM.render(
  <NavBar currentPage={requestUri}
          homePath={root.getAttribute('home-path')}
          newPostPath={root.getAttribute('new-post-path')} />,
  root
);
