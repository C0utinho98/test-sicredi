import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #d8e1e9;
  padding: 0 30px;
  color: #254e70;
  height: 100px;

  svg {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    height: 150px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 100%;
  button {
    max-width: 200px;
  }
  svg {
    transition: color 0.2s;

    &:hover {
      color: #ff9000;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      width: 100px;
    }

    margin-left: 20px;
    svg {
      height: 35px;
    }
  }
`;

export const LeftContent = styled.div`
  display: flex;
  height: 100%;
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

export const WrapperUser = styled.div`
  display: flex;
  margin-left: 40px;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 500px) {
    display: none;
  }
`;
