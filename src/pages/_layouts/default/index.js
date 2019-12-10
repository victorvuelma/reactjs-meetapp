import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Container, Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
