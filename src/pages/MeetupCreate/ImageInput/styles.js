import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  overflow: hidden;

  input {
    display: none;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.image}) no-repeat center center fixed;
`;

export const Select = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  opacity: 0.3;

  color: #fff;

  p {
    margin-top: 10px;
    font-weight: bold;
    font-size: 22px;
  }
`;
