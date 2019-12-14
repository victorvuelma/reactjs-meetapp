import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';

import DatePicker from '~/components/DatePicker';

import api from '~/services/api';
import history from '~/services/history';

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
  image: Yup.number().required('Você precisa enviar uma foto'),
});

export default function MeetupCreate() {
  const params = useParams();

  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      if (params.meetupId) {
        try {
          const response = await api.get(`meetups/${params.meetupId}`);

          setMeetup(response.data);
        } catch (err) {
          history.push('/dashboard');

          toast.error('Não foi possível encontrar o meetup informado.');
        }
      }
    }
    loadMeetup();
  }, [params.meetupId]);

  function handleSubmit({ image, title, description, date, location }) {
    async function createMeetup() {
      try {
        const data = {
          image_id: image,
          title,
          description,
          date,
          location,
        };

        let response = null;
        if (params.meetupId) {
          response = await api.put(`meetups/${params.meetupId}`, data);

          toast.success('Meetup alterado com sucesso.');
        } else {
          response = await api.post('meetups', data);

          toast.success('Meetup criado com sucesso.');
        }
        history.push(`/meetup/${response.data.id}`);
      } catch (err) {
        toast.error(
          'Não foi possível criar o Meetup. Verifique as informações.'
        );
      }
    }

    createMeetup();
  }

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <ImageInput name="image" />
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
