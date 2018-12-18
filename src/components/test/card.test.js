import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';


describe('card', () => {
  it('will match the Card Snapshot', () => {
    const cardTester = {
      id: 1,
      text: 'testing is fun!'
    }
    const wrapper = shallow(
      <Card card={cardTester}/>
    );

    expect(wrapper).toMatchSnapshot();
  })
});
