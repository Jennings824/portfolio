import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { BrewReviewImage } from './Projects.style'

class Projects extends Component {

  render() {

    return (
      <div className="Projects">
      <h1> Launch Academy Group Project: <a href="">Brew Review</a> </h1>
      <Zoomy
        imageUrl={require('../../assets/BrewReview.png')}
        renderThumbnail={({ showImage }) =>
        <BrewReviewImage onClick={showImage}>
          <img src={require('../../assets/BrewReview_small.png')} alt="computer with glasses"/>
        </BrewReviewImage>
      }
        scale={[1.1, 1.1]}
        imageProps={{
          style: {
            width: '100vw',
            height: 'auto'
          }
        }}
      />
      </div>
    );
  }
}

export default Projects;
