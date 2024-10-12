import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './loading-instance.css';

const LoadingInstance = ({ isLoading }) => {
  Modal.setAppElement('#loading');
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      zIndex: '9999',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: 'auto',
      maxHeight: '100vh',
      backgroundColor: 'transparent',
      border: 'none',
    },
  };

  return (
    <Modal
      isOpen={isLoading}
      style={customStyles}
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
    >
      <section className="loading-container">
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
      </section>
    </Modal>
  );
};

LoadingInstance.propTypes = {
  isLoading: PropTypes.bool,
};

export default LoadingInstance;
