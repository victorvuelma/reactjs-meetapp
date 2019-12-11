import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { MdDeleteForever, MdEdit, MdEvent, MdPlace } from 'react-icons/md';

import api from '~/services/api';

import { Container, Header } from './styles';

export default function MeetupDetails() {
  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(true);

  const { meetupId } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${meetupId}`);

      const data = {
        ...response.data,
        formattedDate: format(
          parseISO(response.data.date),
          "dd 'de' MMMM', às' HH'h'",
          {
            locale: ptBR,
          }
        ),
      };

      setMeetup(data);
      setLoading(false);
    }
    loadMeetup();
  }, [meetupId]);

  return (
    <Container>
      {loading ? (
        'Carregando...'
      ) : (
        <>
          <Header>
            <h1>{meetup.title}</h1>
            <div>
              <button type="button">
                <MdEdit color="#fff" size={20} />
                Editar
              </button>
              <button type="button">
                <MdDeleteForever color="#fff" size={20} />
                Cancelar
              </button>
            </div>
          </Header>
          <img src={meetup.image.url} alt={meetup.title} />
          <p>{meetup.description}</p>
          <ul>
            <li>
              <MdEvent size={20} />
              {meetup.formattedDate}
            </li>
            <li>
              <MdPlace size={20} />
              {meetup.location}
            </li>
          </ul>
        </>
      )}
    </Container>
  );
}
