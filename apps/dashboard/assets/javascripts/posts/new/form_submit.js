import React from 'react';

const SubmitPostButton = (props) => {
  let submitClass = 'disabled';
  if (props.enabled) {
    submitClass = '';
  }

  return <button className={"btn btn-primary " + submitClass} type="submit" disabled={!props.enabled}>Save</button>;
}

export default SubmitPostButton;
