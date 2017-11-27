import React from 'react';

const TitleDisplay = (props) => {
  return (
    <div className="mt-3 mb-4">
      <span className="h2" onClick={props.foreground}>{props.postTitle}</span>
      <input type="hidden" value={props.textValue} name="post[title]" />
    </div>
  );
}

export default TitleDisplay;
