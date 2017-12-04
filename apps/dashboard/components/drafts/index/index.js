import React from 'react';
import ReactDOM from 'react-dom';
import DraftsList from './drafts_list';

class BaseDraftsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DraftsList list={JSON.parse(this.props.drafts)} />
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(
  <BaseDraftsList drafts={root.getAttribute('drafts')}/>,
  root
);
