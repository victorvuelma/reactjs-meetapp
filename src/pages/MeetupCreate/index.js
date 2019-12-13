import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';

import DatePicker from '~/components/DatePicker';

import api from '~/services/api';

import ImageInput from './ImageInput';

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
  image_id: Yup.number().required('Você precisa enviar uma foto'),
});

export default function MeetupCreate() {
  function handleSubmit(data) {
    async function createMeetup() {
      const response = await api.post('meetups', data);
    }

    createMeetup();
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ImageInput name="image_id" />
        <Input type="text" name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
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
