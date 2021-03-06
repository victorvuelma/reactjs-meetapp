import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 315px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 42px;
    height: 42px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100%;

    input {
      margin-bottom: 10px;
      height: 50px;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 0.5);
      padding: 0 15px;
      font-size: 16px;
    }

    span {
      color: #f94d6a;
      font-weight: bold;
      margin: 0 0 10px;
      align-self: flex-start;
    }

    button {
      margin-top: 5px;
      height: 50px;
      font-weight: bold;
      background: #f94d6a;
      border: 0;
      color: #fff;
      border-radius: 4px;
      font-size: 18px;
      transition: background 0.2s;

      &:disabled {
        opacity: 0.6;
      }

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }
  }

  a {
    color: rgba(255, 255, 255, 0.6);
    font-weight: bold;
    margin-top: 20px;
  }
`;
