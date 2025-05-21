import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  padding-left: var(--gutter-mobile);
  padding-right: var(--gutter-mobile);

  max-width: var(--max-content-width);

  @media (min-width: 501px) {
    padding-left: var(--gutter-tablet);
    padding-right: var(--gutter-tablet);
  }

  @media (min-width: 1025px) {
    padding-left: var(--gutter-desktop);
    padding-right: var(--gutter-desktop);
  }

  @media (min-width: 1441px) {
    padding-left: calc((100vw - var(--max-content-width)) / 2);
    padding-right: calc((100vw - var(--max-content-width)) / 2);
  }
`;

export default Container;