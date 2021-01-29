import React, { useCallback, useEffect, useState } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { VscError } from 'react-icons/vsc';

import { useSelector } from 'react-redux';
import { useTransition } from 'react-spring';
import { Container, ToastAlert, Content, Icon } from './styles';
import { IState } from '../../store';
import { IToastState } from '../../store/toast/reducer/types';

const Toast: React.FC = () => {
  const [messages, setMessages] = useState<IToastState[]>([]);
  const toastState = useSelector<IState, IToastState>(state => state.toast);
  const messagesTransition = useTransition(messages, message => message.id, {
    from: { right: '-120%' },
    enter: { right: '0%' },
    leave: { right: '-120%' },
  });

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  useEffect(() => {
    if (toastState.id !== '')
      setMessages(prevState => [...prevState, toastState]);
  }, [toastState]);

  useEffect(() => {
    messages.map(el => {
      const timer = setTimeout(() => {
        removeToast(el.id);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    });
  }, [messages, removeToast]);

  return (
    <Container>
      {messagesTransition.map(({ item, key, props }) => (
        <ToastAlert type={item.type} key={key} style={props}>
          <Icon>
            {item.type === 'info' ? (
              <FiAlertCircle size={30} />
            ) : item.type === 'success' ? (
              <AiOutlineCheckCircle size={30} />
            ) : (
              <VscError size={30} />
            )}
          </Icon>
          <Content>
            <strong>{item.title}</strong>
            <p>{item.message}</p>
          </Content>
          <button
            type="button"
            onClick={() => removeToast(item.id)}
            data-testid="button"
          >
            <FiXCircle size={18} />
          </button>
        </ToastAlert>
      ))}
    </Container>
  );
};

export default Toast;
