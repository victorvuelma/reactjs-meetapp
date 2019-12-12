import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { MdDeleteForever, MdEdit, MdEvent, MdPlace } from 'react-icons/md';
import { toast } from 'react-toastify';
import ConfirmModal from '~/components/ConfirmModal';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Header, Message } from './styles';

export default function MeetupDetails() {
  const [meetup, setMeetup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const { meetupId } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      try {
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
      } catch (err) {
        setLoading(false);
      }
      setLoading(false);
    }
    loadMeetup();
  }, [meetupId]);

  function handleModalClose() {
    setShowModal(false);
  }

  async function handleModalConfirm() {
    try {
      await api.delete(`meetups/${meetup.id}`);

      setShowModal(false);

      history.push('/dashboard');
      toast.success('Meetup cancelado com sucesso.');
    } catch (err) {
      toast.error('Não foi possível cancelar o Meetup.');
    }
  }

  function handleModalOpen() {
    setShowModal(true);
  }

  return (
    <Container>
      {loading ? (
        <Message>Carregando...</Message>
      ) : meetup ? (
        <>
          <ConfirmModal
            isOpen={showModal}
            onCancel={handleModalClose}
            onClose={handleModalClose}
            onConfirm={handleModalConfirm}
          >
            <p>Você deseja realmente cancelar o Meetup {meetup.title}?</p>
          </ConfirmModal>
          <Header>
            <h1>{meetup.title}</h1>
            <div>
              <button type="button">
                <MdEdit color="#fff" size={20} />
                Editar
              </button>
              <button type="button" onClick={handleModalOpen}>
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
      ) : (
        <Message>Meetup não encontrado</Message>
      )}
    </Container>
  );
}
