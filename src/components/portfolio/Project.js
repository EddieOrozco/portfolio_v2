import React from 'react';
// import Modal from '../modal/Modal';

const Project = ({ title, des, imageUrl, id }) => (
  <React.Fragment>
    <div className='col-lg-4 col-sm-6 mb-4'>
      <div className='portfolio-item'>
        {/* onClick on A tag */}
        {/* This a tag */}
        <a
          className='portfolio-link'
          data-toggle='modal'
          href='#portfolioModal'
        >
          {/* <div className='portfolio-hover'>
            <div className='portfolio-hover-content'></div>
          </div> */}
          <img className='img-fluid' src={`${imageUrl}`} alt='' />
        </a>
        <div className='portfolio-caption'>
          <div className='portfolio-caption-heading'>{title}</div>
          <div className='portfolio-caption-subheading text-muted'>{des}</div>
          <button type='button' class='btn btn-primary btn-sm mr-2'>
            GitHub
          </button>
          <button type='button' class='btn btn-primary btn-sm'>
            Project
          </button>
        </div>
      </div>
    </div>
    {/* <Modal key={id} title={title} des={des} imageUrl={imageUrl} /> */}
  </React.Fragment>
);

export default Project;
