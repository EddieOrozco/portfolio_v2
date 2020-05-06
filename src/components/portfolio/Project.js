import React from 'react';

const Project = ({ title, des }) => (
  <div className='col-lg-4 col-sm-6 mb-4'>
    <div className='portfolio-item'>
      <a className='portfolio-link' data-toggle='modal' href='#portfolioModal'>
        <div className='portfolio-hover'>
          <div className='portfolio-hover-content'>
            <i className='fas fa-plus fa-3x'></i>
          </div>
        </div>
        <img
          className='img-fluid'
          src='assets/img/portfolio/01-thumbnail.jpg'
          alt=''
        />
      </a>
      <div className='portfolio-caption'>
        <div className='portfolio-caption-heading'>{title}</div>
        <div className='portfolio-caption-subheading text-muted'>{des}</div>
      </div>
    </div>
  </div>
);

export default Project;
