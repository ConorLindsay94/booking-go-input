import 'babel-polyfill';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import InputForm from './InputForm';
import Location from '../Location/Location';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Input Form component', () => {
  test('component renders', () => {
    const wrapper = shallow(<InputForm />);

    expect(wrapper.exists()).toBe(true);
  });

  test('correct location type is returned', () => {
    const wrapper = shallow(<InputForm />);
    const instance = wrapper.instance();

    expect(instance.determineType('T')).toBe('Station');
  });

  test('searchText state is set when input has been typed in', () => {
    const wrapper = shallow(<InputForm />);

    expect(wrapper.state('searchText')).toBe('');
    wrapper.find('input').simulate('change', { target: { value: 'L' } });
    expect(wrapper.state('searchText')).toBe('L');
  });

  test('getResults function is fired when searchText length is 2 or more', () => {
    const wrapper = shallow(<InputForm />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, "getResults");

    wrapper.find('input').simulate('change', { target: { value: 'Li' } });
    expect(wrapper.state('searchText')).toBe('Li');
    expect(spy).toBeCalled();
  });
  
  test('stagedLocation is set when location is clicked', () => {
    const inputWrapper = shallow(<InputForm />);
    const inputInstance = inputWrapper.instance();
    const determineType = jest.spyOn(inputInstance, "determineType");
    const stageLocation = jest.spyOn(inputInstance, "stageLocation");
    const locationWrapper = mount(
      <Location 
        result={{
          name: 'Liverpool',
          city: 'Liverpool',
          country: 'United Kingdom',
          placeType: 'P'
        }}
        determineType={determineType}
        stageLocation={stageLocation}
      />
    );

    expect(inputWrapper.state('stagedLocation')).toBe(undefined);
    locationWrapper.find('.search-input__results-result').simulate('click');
    expect(stageLocation).toBeCalled();
    expect(inputWrapper.state('stagedLocation')).toBeDefined();
  });
});