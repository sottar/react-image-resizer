# react-image-resizer

[![Build Status](https://travis-ci.org/sottar/react-image-resizer.svg?branch=master)](https://travis-ci.org/sottar/react-image-resizer)
[![npm version](https://badge.fury.io/js/react-image-resizer.svg)](https://badge.fury.io/js/react-image-resizer)

`react-image-resizer` is a React component that resizes the image to be nice.

## Installation

```sh
# use npm
$ npm install -D react-image-resizer

# use yarn
$ yarn add -D react-image-resizer
```

## Usage

```javascript
import React from 'react';
import Image from 'react-image-resizer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Image
          src="path/to/image.jpg"
          alt="image description"
          height={100}
          width={100}
        />
      </div>
    );
  }
}
```

## Options

name | required | type | default | description
---|---|---|---|---
src | true | String |  | Path to your image
alt | false | String |  | Image description
height | true | Number | 0 | Height after resize (px only)
width | true | Number | 0 | Width after resize (px only)
backgroundColor | false | String |  | Background color of wrap image
noImageSrc | false | String |  | Path when image could not be acquired
noImageAlt | false | String | 'noimage' | description when image could not be acquired


## License

[MIT](https://github.com/sottar/react-image-resizer/blob/master/LICENSE)
