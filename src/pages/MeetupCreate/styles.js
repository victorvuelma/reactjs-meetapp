import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100%;

    input,
    textarea {
      margin-top: 10px;
      width: 100%;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 0.5);
      padding: 0 15px;
      font-size: 16px;
    }

    > div:first-child {
      margin-bottom: 10px;
    }

    textarea {
      padding: 15px 15px;
      max-width: 100%;
      min-width: 100%;
      min-height: 130px;
    }

    input {
      height: 50px;
    }

    span {
      color: #f94d6a;
      font-weight: bold;
      margin: 10px 0 0;
      align-self: flex-start;
    }

    > button {
      align-self: flex-end;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 20px;
      padding: 0 20px;
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
  }
`;
