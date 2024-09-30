import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const SolidButton = ({
  text,
  color,
  onClick,
  icon: Icon,
  iconFirst = false,
}) => {
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
      <span className="flex items-center gap-2">
        {iconFirst && Icon && <Icon />}
        {text && text}
        {!iconFirst && Icon && <Icon />}
      </span>
    </button>
  );
};

SolidButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  iconFirst: PropTypes.bool,
};
