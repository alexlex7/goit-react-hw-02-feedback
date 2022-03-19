import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ value, handleFeedback }) {
  return (
    <button type="button" className={s.btn} onClick={handleFeedback}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleFeedback: PropTypes.func.isRequired,
};

export default Button;
