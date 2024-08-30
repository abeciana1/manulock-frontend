import React from 'react';
import cx from 'classnames';

export const Heading1 = ({ text, color = 'primary' }) => {
  return (
    <h1
      className={cx('text-5xl font-bold', {
        ['text-primary']: color === 'primary',
        ['text-primary-light']: color === 'light',
        ['text-accent-red']: color === 'red',
        ['text-accent-yellow']: color === 'yellow',
        ['text-accent-green']: color === 'green',
        ['text-accent-blue']: color === 'blue',
      })}
    >
      {text}
    </h1>
  );
};
