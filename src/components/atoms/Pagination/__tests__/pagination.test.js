import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import { ThemeProvider } from 'styled-components'
import theme from '../../../../styles/theme';
import Pagination from '../index';

configure({ adapter: new Adapter() });

describe('Render Pagination Component', () => {
  it('render correctly Pagination component', () => {
    const PaginationComponent = renderer.create(
      <ThemeProvider theme={theme}>
        <Pagination />
      </ThemeProvider>
    ).toJSON();
    expect(PaginationComponent).toMatchSnapshot();
  });

  it('render correctly with default value of props', () => {
    const defaultProps = {};
    const PaginationComponent = mount(
      <ThemeProvider theme={theme}>
        <Pagination {...defaultProps} />
      </ThemeProvider>
    ).find(Pagination).first();
    expect((PaginationComponent).prop('page')).toEqual(1);
    expect((PaginationComponent).prop('pages')).toEqual(1);
  });

  it('render correctly with null values of props', () => {
    const nullProps = {
      page: null,
      pages: null,
      onChangePage: null,
    };
    const PaginationComponent = mount(
      <ThemeProvider theme={theme}>
        <Pagination {...nullProps} />
      </ThemeProvider>
    ).find(Pagination).first();
    expect((PaginationComponent).prop('page')).toEqual(null);
    expect((PaginationComponent).prop('pages')).toEqual(null);
    expect((PaginationComponent).prop('onChangePage')).toEqual(null);
  });

  it('render correctly with normal value of props', () => {
    const onChangePage = jest.fn();
    const props = {
      page: 10,
      pages: 20,
      onChangePage: onChangePage,
    };
    const PaginationComponent = mount(
      <ThemeProvider theme={theme}>
        <Pagination {...props} />
      </ThemeProvider>
    ).find(Pagination).first();
    expect((PaginationComponent).prop('page')).toEqual(10);
    expect((PaginationComponent).prop('pages')).toEqual(20);
    expect((PaginationComponent).prop('onChangePage')).toEqual(onChangePage);
  });

});