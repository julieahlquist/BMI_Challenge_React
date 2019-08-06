import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import MethodSelect from '../Components/MethodSelect'

describe('<MethodSelect />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MethodSelect />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has two methods to choose from', () => {
    const component = mount(<MethodSelect />);
    const selector = component.find('#method').instance();
    expect(selector.options.length).toEqual(2)
  }
)})