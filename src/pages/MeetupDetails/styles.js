import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-top: 50px;
    width: 940px;
    height: 300px;
    border-radius: 4px;
  }

  p {
    margin-top: 25px;
    width: 100%;
    font-size: 16px;
    color: #fff;
  }

  ul {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;

    li {
      color: rgba(255, 255, 255, 0.6);
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
      }

      & + li {
        margin-left: 30px;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }

  div {
    display: flex;

    button {
      padding: 12px 20px;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-right: 10px;
      }

      &:first-child {
        margin-right: 15px;
        background: #4dbaf9;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#4bdaf9')};
        }
      }

      &:last-child {
        background: #d44059;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#d44059')};
        }
      }
    }
  }
`;
