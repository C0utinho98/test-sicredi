import React from 'react';
import { FaDragon } from 'react-icons/fa';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/auth/reducer/actions';
import {
  Container,
  Content,
  Wrapper,
  LeftContent,
  WrapperLogo,
  WrapperUser,
} from './styles';
import Button from '../button';
import { IState } from '../../store';

const Header: React.FC = ({ children }) => {
  const name = useSelector<IState, string>(state => state.auth.name);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
  };

  const history = useHistory();
  return (
    <>
      <Container>
        <Content>
          <LeftContent>
            <WrapperLogo
              onClick={() => history.push('/main')}
              data-testid="redirectMain"
            >
              <FaDragon size={50} />
              <span>The Dragons</span>
            </WrapperLogo>
            <WrapperUser>
              <span>Bem vindo,</span>
              <span style={{ color: '#FF9000' }}>{name}</span>
            </WrapperUser>
          </LeftContent>
          <Wrapper>
            <Button onClick={() => history.push('/create')}>
              Cadastrar Dragão
            </Button>
            <AiOutlinePoweroff
              size={40}
              onClick={handleSignOut}
              data-testid="logout"
            />
          </Wrapper>
        </Content>
      </Container>
      {children}
    </>
  );
};

export default Header;
