import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GiDragonHead } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';
import { GiSeaDragon, GiDragonOrb } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { openToast } from '../../store/toast/reducer/actions';

import { Input, Button } from '../../components';
import api from '../../services/api';
import { Form, Icon, Circle, WrapperButtons } from './styles';

interface Dragon {
  name: string;
  type: string;
}

interface Params {
  id: string;
}

const CreateOrUpdate: React.FC = () => {
  const { id } = useParams<Params>();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setValue } = useForm();
  useEffect(() => {
    if (id) {
      api
        .get<Dragon>(`/dragon/${id}`)
        .then(response => {
          const { name, type } = response.data;
          setValue('name', name);
          setValue('type', type);
        })
        .catch(() => {
          dispatch(
            openToast({
              title: 'Erro',
              message: 'Erro ao encontrar Dragão!',
              type: 'error',
            }),
          );
          history.push('/main');
        });
    } else {
      setValue('name', '');
      setValue('type', '');
    }
  }, [id]);

  const onSubmit = handleSubmit((data: Dragon): void => {
    setLoading(true);
    if (id) {
      api
        .put(`/dragon/${id}`, data)
        .then(() => {
          dispatch(
            openToast({
              title: 'Sucesso',
              message: 'Dragão atualizado com sucesso!',
              type: 'success',
            }),
          );
          history.push('/main');
        })
        .catch(() => {
          dispatch(
            openToast({
              title: 'Erro',
              message: 'Erro ao atualizar!',
              type: 'error',
            }),
          );
          setLoading(false);
        });
    } else {
      api
        .post('/dragon', data)
        .then(() => {
          setLoading(false);
          dispatch(
            openToast({
              title: 'Sucesso',
              message: 'Dragão cadastrado com sucesso!',
              type: 'success',
            }),
          );
          history.push('/main');
        })
        .catch(() => {
          dispatch(
            openToast({
              title: 'Erro',
              message: 'Erro ao cadastrar!',
              type: 'error',
            }),
          );
          setLoading(false);
        });
    }
  });

  const handleDelete = useCallback(
    (idDragon: string) => {
      api
        .delete(`/dragon/${idDragon}`)
        .then(() => {
          setLoading(false);
          dispatch(
            openToast({
              title: 'Excluído',
              message: 'Dragão excluído com sucesso!',
              type: 'success',
            }),
          );
          history.push('/main');
        })
        .catch(() => {
          openToast({
            title: 'Erro',
            message: 'Erro ao excluir Dragão!',
            type: 'error',
          });
          setLoading(false);
        });
    },
    [dispatch, history],
  );

  const validateSpace = (value: string) => {
    return value.trim().length !== 0;
  };

  return (
    <Form autoComplete="off" onSubmit={onSubmit}>
      <IoIosArrowBack
        size={30}
        onClick={() => history.push('/main')}
        data-testid="back-button-test"
      />
      <Icon>
        <Circle error={errors.name || errors.type}>
          <GiDragonHead size={100} color="#d8e1e9" />
        </Circle>
      </Icon>
      <Input
        name="name"
        placeholder="Nome do Dragão"
        inputRef={register({
          required: true,
          validate: value => validateSpace(value),
        })}
        msgError="Nome do dragão é obrigatório"
        error={errors.name}
        icon={GiSeaDragon}
      />
      <Input
        name="type"
        placeholder="Tipo do Dragão"
        inputRef={register({
          required: true,
          validate: value => validateSpace(value),
        })}
        msgError="Tipo do dragão é obrigatório"
        error={errors.type}
        icon={GiDragonOrb}
      />
      {!id ? (
        <Button type="submit" loading={loading}>
          Cadastrar
        </Button>
      ) : (
        <WrapperButtons>
          <Button
            type="button"
            color="#ff6961"
            disabled={loading}
            onClick={() => handleDelete(id)}
          >
            Excluir
          </Button>
          <Button type="submit" loading={loading} disabled={loading}>
            Editar
          </Button>
        </WrapperButtons>
      )}
    </Form>
  );
};

export default CreateOrUpdate;
