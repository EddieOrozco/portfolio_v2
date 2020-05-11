import React from 'react';

const Modal = ({ title, des, id, imageUrl }) => {
  return (
    //  Modal
    <React.Fragment>
      {/* Modal Loop */}
      <div className='col-lg-8'>
        <div className='modal-body' key={id}>
          {/* <!-- Project Details Go Here--> */}
          <h2 className='text-uppercase'>{title}</h2>
          <p className='item-intro text-muted'>{des}</p>
          <img
            className='img-fluid d-block mx-auto'
            src={`${imageUrl}`}
            alt=''
          />
          <p>
            Use this area to describe your project. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
            minus dignissimos deserunt repellat aperiam quasi sunt officia
            expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis
            facere nemo!
          </p>

          <button
            className='btn btn-primary'
            data-dismiss='modal'
            type='button'
          >
            <i className='fas fa-times mr-1'></i>Close Project
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
