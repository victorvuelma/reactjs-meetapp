import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 175px;
      height: 45px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const MeetupList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const Meetup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 65px;
  background: rgba(0, 0, 0, 0.1);
  padding: 0 20px 0 30px;
  border-radius: 4px;

  & + div {
    margin-top: 10px;
  }

  strong {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
    }

    button {
      margin-left: 32px;
      border: 0;
      background: none;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 65px;
  background: rgba(0, 0, 0, 0.1);
  padding: 0 20px 0 30px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
