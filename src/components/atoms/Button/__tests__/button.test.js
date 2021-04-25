import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import { ThemeProvider } from 'styled-components'
import theme from '../../../../styles/theme';
import Button from '../index';

configure({ adapter: new Adapter() });

describe('Render Button Component', () => {
  it('render correctly button component', () => {
    const ButtonComponent = renderer.create(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    ).toJSON();
    expect(ButtonComponent).toMatchSnapshot();
  });

  it('render correctly with default value of props', () => {
    const defaultProps = {};
    const ButtonComponent = mount(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} />
      </ThemeProvider>
    ).find(Button).first();
    expect((ButtonComponent).prop('label')).toEqual('');
    expect((ButtonComponent).prop('id')).toEqual('button-id');
    expect((ButtonComponent).prop('name')).toEqual('button-name');
    expect((ButtonComponent).prop('fontSize')).toEqual('small');
    expect((ButtonComponent).prop('fontWeight')).toEqual('normal');
    expect((ButtonComponent).prop('disabled')).toEqual(false);
  });

  it('render correctly with null values of props', () => {
    const defaultProps = {
      label: null,
      id: null,
      name: null,
      onClick: null,
      fontSize: null,
      fontWeight: null,
      disabled: null,
    };
    const ButtonComponent = mount(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} />
      </ThemeProvider>
    ).find(Button).first();
    expect((ButtonComponent).prop('label')).toEqual(null);
    expect((ButtonComponent).prop('id')).toEqual(null);
    expect((ButtonComponent).prop('name')).toEqual(null);
    expect((ButtonComponent).prop('fontSize')).toEqual(null);
    expect((ButtonComponent).prop('fontWeight')).toEqual(null);
    expect((ButtonComponent).prop('disabled')).toEqual(null);
  });

  it('render correctly with normal value of props', () => {
    const props = {
      label: "Search",
      id: "search-bar-button",
      name: "search-characters-button",
      disabled: false,
      fontSize: "mediumSmall",
      fontWeight: "bold"
    };
    const ButtonComponent = mount(
      <ThemeProvider theme={theme}>
        <Button {...props} />
      </ThemeProvider>
    ).find(Button).first();
    expect((ButtonComponent).prop('label')).toEqual('Search');
    expect((ButtonComponent).prop('id')).toEqual('search-bar-button');
    expect((ButtonComponent).prop('name')).toEqual('search-characters-button');
    expect((ButtonComponent).prop('fontSize')).toEqual('mediumSmall');
    expect((ButtonComponent).prop('fontWeight')).toEqual('bold');
    expect((ButtonComponent).prop('disabled')).toEqual(false);
  });

  it('check onClick callback', () => {
    const onClick = jest.fn();
    const props = {
      onClick: onClick
    };
    const ButtonComponent = mount(
      <ThemeProvider theme={theme}>
        <Button {...props} />
      </ThemeProvider>
    ).find(Button).first();
    ButtonComponent.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

});
