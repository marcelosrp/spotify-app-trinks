import React from 'react'
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -65%)',
    width: '70rem',
    height: '50rem'
  }
}

export default function ModalLyrics({ handleCloseModal, modalIsOpen, lyrics }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Modal Lyrics"
      ariaHideApp={false}
    >
      <button onClick={handleCloseModal} title="Fechar modal">
        <FaTimes />
      </button>
      <p>{lyrics}</p>
    </Modal>
  )
}
