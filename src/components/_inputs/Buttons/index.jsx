import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const SolidButton = ({ text, color, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cx('text-lg rounded-lg py-1 px-2', {
        ['bg-accent-blue text-primary-light']: color === 'blue',
        ['bg-accent-yellow text-primary']: color === 'yellow',
        ['bg-accent-red text-primary-light']: color === 'red',
        ['bg-accent-green text-primary']: color === 'green',
      })}
    >
      {text}
    </button>
  );
};

SolidButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.element,
};
