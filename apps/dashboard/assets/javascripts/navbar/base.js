import React from 'react';
import Nav from './nav';

class BaseNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav currentPage={this.props.currentPage}
           homePath={this.props.homePath}
           newPostPath={this.props.newPostPath} />
    );
  }
}

export default BaseNav;
