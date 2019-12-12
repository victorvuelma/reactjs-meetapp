import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;

  > button {
    border: 0;
    background: none;
    color: #999;
    font-weight: bold;
    align-self: flex-end;
    margin-bottom: 5px;
  }
`;

export const Actions = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    transition: background 0.2s;
    border-radius: 4px;
    padding: 10px 20px;
    font-weight: bold;
    color: #fff;
    font-size: 15px;

    &:first-child {
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
`;
