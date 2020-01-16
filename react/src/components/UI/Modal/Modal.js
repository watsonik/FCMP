import React from 'react';
import { Backdrop } from '../';
import './Modal.scss';

export const Modal = ({ show, children, toggle }) => {
  return (
    <>
      <Backdrop
        show={show}
        toggle={toggle}
      />
      <div
        className="modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}>
        {children}
      </div>
    </>
  )
}
