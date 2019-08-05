import React from 'react';
import { shallow } from 'enzyme';
import MethodSelect from '../Components/MethodSelect'

describe('<MethodSelect />', () => {
  it('has two methods to choose from', () => {
    const component = shallow(<MethodSelect />);
    const selector = component.find('#method').instance()
    expect(selector.options.length).toEqual(2)
  }
)})