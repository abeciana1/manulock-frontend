import React from 'react';
import { FaBell } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Notification = ({ count = 5 }) => {
  return (
    <div className="relative">
      <FaBell size={30} />
      {count > 0 && (
        <div className="absolute bg-accent-red text-primary-light rounded-full px-1 text-sm -top-2 -right-3">
          {count > 9 ? '9+' : count}
        </div>
      )}
    </div>
  );
};

Notification.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Notification;
