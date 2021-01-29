import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  strong {
    font-size: 50px;
    color: #ff9000;
  }

  span {
    cursor: pointer;
    transition: color 0.2s;
    margin-top: 10px;
    &:hover {
      color: #ff9000;
    }
  }
`;

export const LinkTo = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
  margin-top: 10px;
  &:hover {
    color: #ff9000;
  }
`;
