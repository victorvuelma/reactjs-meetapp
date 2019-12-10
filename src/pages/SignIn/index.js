import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('É necessário informar o e-mail'),
  password: Yup.string().required('É necessário informar a senha'),
});

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Logo do Meetapp" />

      <Form schema={schema}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Entrar</button>
      </Form>

      <Link to="/signup">Criar conta grátis</Link>
    </>
  );
}
