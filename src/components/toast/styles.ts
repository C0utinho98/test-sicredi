/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'info' | 'error';
}


const toasType = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 80px;
  padding: 30px;
  overflow: hidden;
`;

export const ToastAlert = styled(animated.div) <ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 5px;

  & + div{
    margin-top: 16px;
  }

  ${props => toasType[props.type || 'info']}

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;

export const Content = styled.div`
  margin-left: 10px;
  p {
    margin-top: 10px;
    font-size: 14px;
    opacity: 0.8;
  }
  height: 100%;

`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
