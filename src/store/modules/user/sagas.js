import { takeLatest, all, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { signUpSuccess, signUpFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

function* signUp({ payload }) {
  try {
    yield call(api.post, 'users', payload);

    yield put(signUpSuccess());

    history.push('/');

    toast.success('Conta criada com sucesso! Informe seus dados para login.');
  } catch (err) {
    yield put(signUpFailure());

    toast.error('Erro ao tentar cadastrar. Verifique seus dados.');
  }
}

export default all([takeLatest('@user/SIGN_UP_REQUEST', signUp)]);
