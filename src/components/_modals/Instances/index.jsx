import React from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { clearInstance } from '../../../../redux/slices/instanceSlice';
import LoadingInstance from '../LoadingInstance';
// import { AiOutlineClose } from 'react-icons/ai';

const Instances = () => {
  Modal.setAppElement('#modals');
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);
  const instanceState = useSelector((state) => state.instance);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: '9999',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '0.5rem',
      border: '2px solid #343434',
      width: 'auto',
      maxHeight: '100vh',
    },
  };

  const closeModal = () => {
    dispatch(clearInstance());
  };

  return (
    <>
      {isLoading && instanceState.display === false && (
        <LoadingInstance isLoading={isLoading} />
      )}
      {instanceState.display && isLoading === false && !!instanceState.data && (
        <Modal
          isOpen={instanceState.display}
          onRequestClose={closeModal}
          style={customStyles}
          shouldCloseOnEsc={false}
          shouldCloseOnOverlayClick={false}
        >
          <div className="flex justify-end"></div>
        </Modal>
      )}
    </>
  );
};

export default Instances;
