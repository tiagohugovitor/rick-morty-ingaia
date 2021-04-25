import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import { ThemeProvider } from 'styled-components'
import theme from '../../../../styles/theme';
import Text from '../index';

configure({ adapter: new Adapter() });

describe('Render Text Component', () => {
  it('render correctly Text component', () => {
    const TextComponent = renderer.create(
      <ThemeProvider theme={theme}>
        <Text />
      </ThemeProvider>
    ).toJSON();
    expect(TextComponent).toMatchSnapshot();
  });

  it('render correctly with default value of props', () => {
    const defaultProps = {};
    const TextComponent = mount(
      <ThemeProvider theme={theme}>
        <Text {...defaultProps} />
      </ThemeProvider>
    ).find(Text).first();
    expect((TextComponent).prop('text')).toEqual('');
    expect((TextComponent).prop('color')).toEqual('white');
    expect((TextComponent).prop('size')).toEqual('small');
    expect((TextComponent).prop('fontWeight')).toEqual('normal');
  });

  it('render correctly with null values of props', () => {
    const nullProps = {
      text: null,
      color: null,
      size: null,
      fontWeight: null,
    };
    const TextComponent = mount(
      <ThemeProvider theme={theme}>
        <Text {...nullProps} />
      </ThemeProvider>
    ).find(Text).first();
    expect((TextComponent).prop('text')).toEqual(null);
    expect((TextComponent).prop('color')).toEqual(null);
    expect((TextComponent).prop('size')).toEqual(null);
    expect((TextComponent).prop('fontWeight')).toEqual(null);
  });

  it('render correctly with normal value of props', () => {
    const props = {
      text: "Testing text",
      color: "grey",
      size: "medium",
      fontWeight: "bold",
    };
    const TextComponent = mount(
      <ThemeProvider theme={theme}>
        <Text {...props} />
      </ThemeProvider>
    ).find(Text).first();
    expect((TextComponent).prop('text')).toEqual('Testing text');
    expect((TextComponent).prop('color')).toEqual('grey');
    expect((TextComponent).prop('size')).toEqual('medium');
    expect((TextComponent).prop('fontWeight')).toEqual('bold');
  });

});