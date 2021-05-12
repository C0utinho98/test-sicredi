import React, { useEffect, useState } from 'react';
// import { format } from 'date-fns';
// import ptBr from 'date-fns/locale/pt';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Pagination, Button, Accordion } from '../../components';
import api from '../../services/api';
import { Dragon } from '../../store/dragons/reducer/types';
import { getDragonsRequest } from '../../store/dragons/reducer/actions';
import { openToast } from '../../store/toast/reducer/actions';
import { IState } from '../../store';
import { Container, Content } from './styles';

const Main: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  const dragons = useSelector<IState, [Dragon[]]>(
    state => state.dragon.dragons,
  );

  useEffect(() => {
    api
      .get('/dragon')
      .then(response => dispatch(getDragonsRequest(response.data as Dragon[])))
      .catch(() =>
        dispatch(
          openToast({
            title: 'Erro',
            message: 'Erro ao retornar lista',
            type: 'error',
          }),
        ),
      );
  }, [dispatch]);

  // const displayDays = (date: Date) => {
  //   const localDate = new Date(date);
  //   return format(localDate, "'Dia' dd 'de' MMMM 'de' yyyy", { locale: ptBr });
  // };

  return (
    <Container>
      <div style={{ minHeight: '600px' }}>
        {dragons[page] &&
          dragons[page].map(el => (
            <Accordion title={el.name} key={el.id}>
              <Content>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Data de criação:</span>
                  <span>{`Nome: ${el.name}`}</span>
                  <span>{`Tipo: ${el.type}`}</span>
                </div>
                <Button
                  onClick={() => history.push(`/update/${el.id}`)}
                  data-testid={el.name}
                >
                  Editar
                </Button>
              </Content>
            </Accordion>
          ))}
      </div>
      {dragons[page] && (
        <Pagination
          size={dragons.length}
          page={page + 1}
          changePage={changePage => setPage(changePage - 1)}
        />
      )}
    </Container>
  );
};

export default Main;
