import React from 'react';
import { GiSpikedDragonHead } from 'react-icons/gi';
import { Container, LinkTo } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <GiSpikedDragonHead size={100} />
      <strong>404</strong>
      <h1>PAGE NOT FOUND</h1>
      <LinkTo to="/main">Voltar para página principal</LinkTo>
    </Container>
  );
};

export default NotFound;
