import React, { Component } from 'react';
import Modal from './Modal';
// import Projects from './data/Projects';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          title: 'pro1',
          des: 'this pro1',
        },
        {
          id: 2,
          title: 'pro2',
          des: 'this pro2',
        },
        {
          id: 3,
          title: 'pro3',
          des: 'this pro3',
        },
        {
          id: 4,
          title: 'pro4',
          des: 'this pro4',
        },
        {
          id: 5,
          title: 'pro5',
          des: 'this pro5',
        },
        {
          id: 6,
          title: 'pro6',
          des: 'this pro6',
        },
      ],
    };
    this.projectLoop = this.projectLoop.bind(this);
  }

  projectLoop() {
    return this.state.projects.map((project, id) => {
      return (
        <div className='col-lg-4 col-sm-6 mb-4' key={id}>
          <div className='portfolio-item'>
            <a
              className='portfolio-link'
              data-toggle='modal'
              href='#portfolioModal'
            >
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
              <div className='portfolio-caption-heading'>{project.title}</div>
              <div className='portfolio-caption-subheading text-muted'>
                {project.des}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      //  Portfolio Grid
      <section className='page-section bg-light' id='portfolio'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>Portfolio</h2>
            <h3 className='section-subheading text-muted'>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>

          <div className='row'>{this.projectLoop()}</div>
        </div>
        <Modal />
      </section>
    );
  }
}
