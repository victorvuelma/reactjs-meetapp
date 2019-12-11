import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
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
      align-self: flex-end;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 10px;
      width: 170px;
      height: 45px;
      font-weight: bold;
      background: #f94d6a;
      border: 0;
      color: #fff;
      border-radius: 4px;
      font-size: 18px;
      transition: background 0.2s;

      svg {
        margin-right: 10px;
      }

      &:disabled {
        opacity: 0.6;
      }

      &:hover {
        background: ${darken(0.03, '#f94d6a')};
      }
    }

    hr {
      margin: 20px 0;
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;
