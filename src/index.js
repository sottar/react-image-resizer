import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { m } from './utils';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      isNoImage: false,
    };
    this.resizeImage = this.resizeImage.bind(this);
    this.showNoImage = this.showNoImage.bind(this);
  }

  resizeImage() {
    if (ReactDOM.findDOMNode(this.refs.image) == null) {
      return;
    }
    const originalWidth = ReactDOM.findDOMNode(this.refs.image).naturalWidth;
    const originalHeight = ReactDOM.findDOMNode(this.refs.image).naturalHeight;
    const widthRatio = this.props.width / originalWidth;
    const heightRatio = this.props.height / originalHeight;
    if (widthRatio < heightRatio) {
      this.setState({
        width: originalWidth * widthRatio,
        height: originalHeight * widthRatio,
      });
    } else {
      this.setState({
        width: originalWidth * heightRatio,
        height: originalHeight * heightRatio,
      });
    }
  }

  showNoImage() {
    if (this.props.noImageSrc == undefined) {
      return;
    }
    this.setState({
      isNoImage: true,
    });
  }

  render() {
    const style = {
      wrapper: {
        position: 'relative',
        width: this.props.width,
        height: this.props.height,
        backgroundColor: this.props.backgroundColor,
      },
      image: {
        position: 'absolute',
        display: 'block',
        left: (this.props.width - this.state.width) / 2,
        top: (this.props.height - this.state.height) / 2,
        width: this.state.width,
        height: this.state.height,
      },
    };
    if (this.state.isNoImage) {
      return (
        <div style={m(this.props.style, style.wrapper)}>
          <img
            ref="image" src={this.props.noImageSrc} alt={this.props.noImageAlt || 'noimage'} style={style.image}
            onLoad={this.resizeImage}
          />
        </div>
      );
    } else {
      return (
        <div style={m(this.props.style, style.wrapper)}>
          <img
            ref="image" src={this.props.src} alt={this.props.alt} style={style.image}
            onLoad={this.resizeImage}
            onError={this.showNoImage}
          />
        </div>
      );
    }
  }
}

Image.PropTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  noImageSrc: PropTypes.string,
  noImageAlt: PropTypes.string,
};
