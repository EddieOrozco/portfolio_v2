import React from 'react';

export default function Modal({ title, des }) {
  return (
    //  Modal
    <div className='modal-content'>
      <div className='close-modal' data-dismiss='modal'>
        <img src='assets/img/close-icon.svg' alt='' />
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='modal-body'>
              {/* <!-- Project Details Go Here--> */}
              <h2 className='text-uppercase'>{title}</h2>
              <p className='item-intro text-muted'>des</p>
              <img
                className='img-fluid d-block mx-auto'
                src='assets/img/portfolio/01-full.jpg'
                alt=''
              />
              <p>
                Use this area to describe your project. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Est blanditiis dolorem culpa
                incidunt minus dignissimos deserunt repellat aperiam quasi sunt
                officia expedita beatae cupiditate, maiores repudiandae,
                nostrum, reiciendis facere nemo!
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
        </div>
      </div>
    </div>
  );
}
