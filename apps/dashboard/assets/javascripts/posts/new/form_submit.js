import React from 'react';

const SubmitPostButton = (props) => {
  const feedbackClasses = ['text-success', 'post-feedback'];
  const spinnerClasses = ['fa-spin', 'fa', 'fa-lg', 'fa-spinner'];
  const buttonClasses = ['btn', 'btn-primary', 'mr-3'];

  if (props.hide) { feedbackClasses.push('hide'); }
  if (!props.showLoading) { spinnerClasses.push('d-none'); }
  if (!props.enabled) {
    let index = buttonClasses.indexOf('btn-primary');
    buttonClasses.splice(index, 1);
    buttonClasses.push('btn-outline-secondary');
  }

  return (
    <div>
      <button className={buttonClasses.join(' ')} type="submit" disabled={!props.enabled} onClick={props.savePost}>
        <i className="fa fa-save"></i> Save
      </button>
      <i className={spinnerClasses.join(' ')}></i>
      <small className={feedbackClasses.join(' ')}>{props.postAlert}</small>
    </div>
  );
}

export default SubmitPostButton;
