import React from 'react';

import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo do Meetapp" />

        <aside>
          <Profile>
            <strong>Victor Vuelma</strong>
            <Link to="/profile">Meu perfil</Link>
          </Profile>
          <button type="button">Sair</button>
        </aside>
      </Content>
    </Container>
  );
}
