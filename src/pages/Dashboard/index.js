import React from 'react';

import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

import { Container, MeetupList, Meetup } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <div>
        <h1>Meus meetups</h1>
        <button type="button">
          <MdAddCircleOutline color="#fff" size={30} /> Novo Meetup
        </button>
      </div>
      <MeetupList>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de junho</span>
            <button type="button">
              <MdChevronRight color="#fff" size={30} />
            </button>
          </div>
        </Meetup>
        <Meetup>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de junho</span>
            <button type="button">
              <MdChevronRight color="#fff" size={30} />
            </button>
          </div>
        </Meetup>
      </MeetupList>
    </Container>
  );
}
