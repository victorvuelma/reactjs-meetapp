import React from 'react';

import { Container, Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
