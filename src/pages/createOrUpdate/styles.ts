import styled, { css } from 'styled-components';

interface PropsError {
  error?: boolean;
}

export const Form = styled.form`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  button {
    margin-top: 20px;
  }

  > svg {
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #ff9000;
    }
  }
`;

export const Icon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Circle = styled.div<PropsError>`
  height: 150px;
  width: 150px;
  border: 2px solid #d8e1e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: border-color 0.2s;
    border-color: #ff9000;
  }

  ${props =>
    props.error &&
    css`
      border-color: #c53030;
    `}
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 45%;
  }
`;
