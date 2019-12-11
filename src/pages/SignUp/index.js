import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('É necessário informar o nome'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('É necessário informar o e-mail'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no minimo 6 caracteres.')
    .required('É necessário informar a senha'),
});

export default function SignUp() {
  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(signUpRequest(data));
  }

  return (
    <>
      <img src={logo} alt="Logo do Meetapp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Criando sua conta...' : 'Criar conta'}
        </button>
      </Form>

      <Link to="/">Já tenho login</Link>
    </>
  );
}
