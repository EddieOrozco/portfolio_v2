import React, { Component } from 'react';

import Project from './Project';
import Modal from '../modal/Modal';

export default class Portfolio extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: 'Blog',
        des: 'this pro1',
        imageUrl:
          'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png',
      },
      {
        id: 2,
        title: 'pro2',
        des: 'this pro2',
        imageUrl:
          'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png',
      },
      {
        id: 3,
        title: 'pro3',
        des: 'this pro3',
        imageUrl:
          'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png',
      },
      {
        id: 4,
        title: 'pro4',
        des: 'this pro4',
        imageUrl:
          'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png',
      },
      {
        id: 5,
        title: 'pro5',
        des: 'this pro5',
        imageUrl:
          'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png',
      },
      {
        id: 6,
        title: 'pro6',
        des: 'this pro6',
        imageUrl:
          'https://cdn2.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png',
      },
    ],
  };

  // ModalMethod = () => {
  //   if (this.state.projects) {
  //     return [
  //       <div className='row justify-content-center'>
  //         {this.state.projects.map(({ title, des, id, imageUrl }) => {
  //           return (
  //             <div>
  //               <Modal key={id} title={title} des={des} imageUrl={imageUrl} />
  //             </div>
  //           );
  //         })}
  //       </div>,
  //     ];
  //   }
  // };

  render() {
    this.state.projects.map((project) => {
      console.log(project.id);
    });

    const { projects } = this.state;
    return (
      // Portfolio Grid
      <React.Fragment>
        <section className='page-section bg-light' id='portfolio'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Portfolio</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            {/* Project Loop */}
            <div className='row'>
              {projects.map(({ title, des, id, imageUrl }) => (
                <Project key={id} title={title} des={des} imageUrl={imageUrl} />
              ))}
            </div>
          </div>
        </section>
        <div>
          <div
            className='portfolio-modal modal fade'
            id='portfolioModal'
            key={this.state.projects.id}
            tabIndex='-1'
            role='dialog'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='close-modal' data-dismiss='modal'>
                  <img src='assets/img/close-icon.svg' alt='' />
                </div>
                <div className='container'>
                  <div className='row justify-content-center'>
                    {projects.map((project) => (
                      <Modal
                        key={project.id}
                        title={project.title}
                        des={project.des}
                        imageUrl={project.imageUrl}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
