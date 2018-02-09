// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import m from './utils';

type Props = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  backgroundColor?: string;
  style?: Object;
  noImageSrc?: string;
  noImageAlt?: string;
}

type State = {
  width: number;
  height: number;
  isNoImage: boolean;
}

export default class Image extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      isNoImage: false,
    };
  }

  resizeImage = () => {
    const target = ReactDOM.findDOMNode(this.refs.image);
    if (target === null) {
      return;
    }
    const originalWidth = target instanceof HTMLImageElement ? target.naturalWidth : 0;
    const originalHeight = target instanceof HTMLImageElement ? target.naturalHeight : 0;
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

  showNoImage = () => {
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
    const wrapperStyle = this.props.style ? m(this.props.style, style.wrapper) : style.wrapper;
    if (this.state.isNoImage) {
      return (
        <div style={wrapperStyle}>
          <img
            ref="image" src={this.props.noImageSrc} alt={this.props.noImageAlt || 'noimage'} style={style.image}
            onLoad={this.resizeImage}
          />
        </div>
      );
    } else {
      return (
        <div style={wrapperStyle}>
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
