import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import { ThemeProvider } from 'styled-components'
import theme from '../../../../styles/theme';
import Input from '../index';

configure({ adapter: new Adapter() });


describe('Render Input Component', () => {
  it('render correctly input component', () => {
    const InputComponent = renderer.create(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    ).toJSON();
    expect(InputComponent).toMatchSnapshot();
  });

  it('render correctly with default value of props', () => {
    const defaultProps = {};
    const InputComponent = mount(
      <ThemeProvider theme={theme}>
        <Input {...defaultProps} />
      </ThemeProvider>
    ).find(Input).first();
    expect((InputComponent).prop('id')).toEqual('input-id');
    expect((InputComponent).prop('type')).toEqual('text');
    expect((InputComponent).prop('name')).toEqual('input-name');
    expect((InputComponent).prop('placeholder')).toEqual('');
    expect((InputComponent).prop('value')).toEqual('');
    expect((InputComponent).prop('fontSize')).toEqual('small');
    expect((InputComponent).prop('fontWeight')).toEqual('normal');
  });

  it('render correctly with null values of props', () => {
    const nullProps = {
      id: null,
      type: null,
      name: null,
      placeholder: null,
      onChange: null,
      value: null,
      fontSize: null,
      fontWeight: null,
    };
    const InputComponent = mount(
      <ThemeProvider theme={theme}>
        <Input {...nullProps} />
      </ThemeProvider>
    ).find(Input).first();
    expect((InputComponent).prop('id')).toEqual(null);
    expect((InputComponent).prop('type')).toEqual(null);
    expect((InputComponent).prop('name')).toEqual(null);
    expect((InputComponent).prop('placeholder')).toEqual(null);
    expect((InputComponent).prop('value')).toEqual(null);
    expect((InputComponent).prop('fontSize')).toEqual(null);
    expect((InputComponent).prop('fontWeight')).toEqual(null);
  });

  it('render correctly with normal value of props', () => {
    const props = {
      id: "search-bar-input",
      type: "text",
      name: "search-characters-input",
      placeholder: "Search characters",
      value: 'tests',
      fontSize: "mediumSmall",
      fontWeight: "bold",
    };
    const InputComponent = mount(
      <ThemeProvider theme={theme}>
        <Input {...props} />
      </ThemeProvider>
    ).find(Input).first();
    expect((InputComponent).prop('id')).toEqual("search-bar-input");
    expect((InputComponent).prop('type')).toEqual("text");
    expect((InputComponent).prop('name')).toEqual("search-characters-input");
    expect((InputComponent).prop('placeholder')).toEqual("Search characters");
    expect((InputComponent).prop('value')).toEqual("tests");
    expect((InputComponent).prop('fontSize')).toEqual("mediumSmall");
    expect((InputComponent).prop('fontWeight')).toEqual("bold");
  });

  it('check onChange callback', () => {
    const onChange = jest.fn();
    const props = {
      onChange: onChange,
    };
    const InputComponent = mount(
      <ThemeProvider theme={theme}>
        <Input {...props} />
      </ThemeProvider>
    ).find(Input).first();
    InputComponent.simulate('change', { target: { value: 'Onchange Test' } });
    expect(onChange).toHaveBeenCalledWith('Onchange Test');
  });

});