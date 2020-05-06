import React, { Component } from 'react';

import Project from './Project';
import Modal from '../modal/Modal';

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
  }

  render() {
    return (
      // Portfolio Grid
      <section className='page-section bg-light' id='portfolio'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>Portfolio</h2>
            <h3 className='section-subheading text-muted'>
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>

          <div className='row'>
            {this.state.projects.map(({ title, des, id }) => (
              <Project key={id} title={title} des={des} />
            ))}
          </div>
          <div>
            <div
              className='portfolio-modal modal fade '
              id='portfolioModal'
              tabindex='-1'
              role='dialog'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                {this.state.projects.map(({ title, des, id }) => (
                  <Modal key={id} title={title} des={des} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
