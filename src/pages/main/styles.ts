import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3% 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  button {
    width: 110px;
    height: 40px;
  }
`;
