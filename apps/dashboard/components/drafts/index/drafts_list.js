import React from 'react';
import shortid from 'shortid';

import './index.scss'

const DraftsList = (props) => {
  const draftList = props.list.map((draft) =>
    <div key={shortid.generate()} className="my-4 card grow">
      <div class="card-body">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-11">
            <span><h4>{draft.title}</h4></span>
            <small>Last Updated: {draft.updated_at}</small>
          </div>
          <div className="col-2 col-md-2 col-lg-1">
            <a href="#" className="edit-options">
              <div className="parent-flex">
                <i className="hidden-icon fa fa-lg fa-pencil"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return <div>{draftList}</div>;
}

export default DraftsList;
