import React from 'react';
import { useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('É necessário informar o nome'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('É necessário informar o e-mail'),
  password: Yup.string().test(
    'password',
    'A senha precisa ter 6 caracteres',
    val => !val || val.length >= 6
  ),
  oldPassword: Yup.string().when('password', (password, field) =>
    password
      ? field.required('Infore sua senha anterior para altera-lá')
      : field.notRequired()
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field.oneOf([Yup.ref('password')], 'As senhas não coincidem')
      : field.notRequired()
  ),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
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
