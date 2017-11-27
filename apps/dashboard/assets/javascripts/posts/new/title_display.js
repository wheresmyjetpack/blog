import React from 'react';

const TitleDisplay = (props) => {
  return (
    <div>
      <span className="display-4" onClick={props.foreground}>{props.postTitle}</span>
    </div>
  );
}

export default TitleDisplay;
