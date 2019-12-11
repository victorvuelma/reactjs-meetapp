import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, ...user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');

    toast.success('Autenticado com sucesso.');
  } catch (err) {
    yield put(signFailure());

    toast.error('Erro na autenticação. Verifique seus dados.');
  }
}

export function signOut() {
  history.push('/');

  toast.success('Até a próxima!');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
