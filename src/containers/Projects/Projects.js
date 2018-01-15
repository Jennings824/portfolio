import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ImageButton } from './Projects.style'

class Projects extends Component {

  render() {

    return (
      <div className="Projects">
      <Zoomy
        imageUrl={require('../../assets/computer.jpeg')}
        renderThumbnail={({ showImage }) =>
        <ImageButton onClick={showImage}>
          <img src={require('../../assets/computer2.jpeg')} alt="computer with glasses"/>
        </ImageButton>
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
