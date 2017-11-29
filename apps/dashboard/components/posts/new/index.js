import React from 'react';
import ReactDOM from 'react-dom';
import PostForm from './form';

let root = document.getElementById('root');
ReactDOM.render(
  <PostForm token={root.getAttribute('csrf-token')}
            action={root.getAttribute('action')} />,
  root
);
