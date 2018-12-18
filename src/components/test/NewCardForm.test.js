import React from 'react';
import NewCardForm from '../NewCardForm';
import { shallow } from 'enzyme';

describe('NewCardForm', () => {
  it('will match the NewCardForm snapshot', () => {

    const wrapper = shallow(
      <NewCardForm/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
