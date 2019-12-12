import React from 'react';

import { Form, Input, Textarea } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';

import DatePicker from '~/components/DatePicker';

import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string()
    .required('É necessário informar o título')
    .min(10, 'O título precisa ter pelo menos 10 caracteres'),
  description: Yup.string()
    .required('É necessário informar a descrição')
    .min(30, 'A descrição precisa ter pelo menos 30 caracteres'),
  date: Yup.date()
    .required('É necessário informar a data')
    .min(new Date(), 'A data precisa ser superior a atual'),
  location: Yup.string()
    .required('É necessário informar a localização')
    .min(5, 'A localização precisa ter pelo menos 5 caracteres'),
});

export default function MeetupCreate() {
  return (
    <Container>
      <Form schema={schema} onSubmit={() => {}}>
        <Input type="text" name="title" placeholder="Título do Meetup" />
        <Textarea name="description" placeholder="Descrição completa" />
        <DatePicker
          name="date"
          showTimeSelect
          minDate={new Date()}
          dateFormat={"dd 'de' MMMM', às 'HH:mm'h'"}
          placeholderText="Data do Meetup"
        />
        <Input type="text" name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline color="#fff" size={24} />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
