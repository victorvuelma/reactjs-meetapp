import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 92px;
  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 940px;
  width: 100%;

  img {
    width: 32px;
    height: 32px;
  }

  aside {
    display: flex;
    align-items: center;

    button {
      width: 71px;
      height: 42px;
      border: 0;
      border-radius: 4px;
      background: #d44059;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#d44059')};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 30px;

  strong {
    color: #fff;
  }

  a {
    margin-top: 5px;
    color: #999;
  }
`;
