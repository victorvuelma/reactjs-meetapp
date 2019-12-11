import React from 'react';

import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de Senha"
        />

        <button type="submit">
          <MdAddCircleOutline color="#FFF" size={20} />
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
