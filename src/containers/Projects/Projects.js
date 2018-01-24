import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { BrewReviewImage, DecideImage, Index } from './Projects.style'
import { A, B } from '../../theme/types';
import { Container } from '../../theme/grid/Container';

class Projects extends Component {

  render() {

    return (
      <Container>
      <Index>
        <h1>01</h1>
      </Index>
      <h1> Launch Academy Group Project: <A href="https://brewreview2.herokuapp.com/brewpubs">Brew Review</A> </h1>
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
      <h1> Launch Academy Breakable Toy: <B href="https://decide24.herokuapp.com/">Decide</B></h1>
      <Zoomy
        imageUrl={require('../../assets/Decide.png')}
        renderThumbnail={({ showImage }) =>
        <DecideImage onClick={showImage}>
          <img src={require('../../assets/Decide_small.png')} alt="computer with glasses"/>
        </DecideImage>
      }
        scale={[1.1, 1.1]}
        imageProps={{
          style: {
            width: '100vw',
            height: 'auto'
          }
        }}
      />
      </Container>
    );
  }
}

export default Projects;
