import React, { useState, useEffect } from 'react';

import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '~/services/api';
import history from '~/services/history';

import { Container, MeetupList, Message, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      setMeetups(
        response.data.map(meetup => ({
          ...meetup,
          formattedDate: format(
            parseISO(meetup.date),
            "dd 'de' MMMM', às 'hh'h",
            {
              locale: ptBR,
            }
          ),
        }))
      );
      setLoading(false);
    }
    loadMeetups();
  }, []);

  function handleMeetupCreate() {
    history.push('/meetup/create');
  }

  function handleMeetupDetails(id) {
    history.push(`/meetup/${id}`);
  }

  return (
    <Container>
      <div>
        <h1>Meus meetups</h1>
        <button type="button" onClick={handleMeetupCreate}>
          <MdAddCircleOutline color="#fff" size={30} /> Novo Meetup
        </button>
      </div>
      <MeetupList>
        {loading ? (
          <Message>Carregando...</Message>
        ) : meetups.length > 0 ? (
          meetups.map(meetup => (
            <Meetup key={meetup.title}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.formattedDate}</span>
                <button
                  type="button"
                  onClick={() => handleMeetupDetails(meetup.id)}
                >
                  <MdChevronRight color="#fff" size={30} />
                </button>
              </div>
            </Meetup>
          ))
        ) : (
          <Message>Nenhum meetup encontrado.</Message>
        )}
      </MeetupList>
    </Container>
  );
}
