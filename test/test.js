import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Image from '../src/index.js';

describe('<Image />', () => {
  it('should render div and image tag', () => {
    const wrapper = shallow(
      <Image
        src="path/to/image.jpg"
        width={120}
        height={120}
      />
    );
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('div img')).to.have.length(1);
  });

  it('should render right image path', () => {
    const wrapper = shallow(
      <Image
        src="path/to/image.jpg"
        width={120}
        height={120}
        alt="apples in the bowl"
      />
    );
    expect(wrapper.find('img[src="path/to/image.jpg"]')).to.have.length(1);
  });

  it('should render no image path', () => {
    const wrapper = mount(
      <Image
        src="path/to/404"
        noImageSrc="path/to/noImage.jpg"
        width={120}
        height={120}
        alt="apples in the bowl"
      />
    );
    const img = wrapper.find('img');
    img.simulate('error');
    expect(wrapper.find('img[src="path/to/noImage.jpg"]')).to.have.length(1);
  });
});
