import styled, { css } from 'styled-components';

interface StyleProps {
  open: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const AccordionItem = styled.div<StyleProps>`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  padding: 0 40px;
  border-radius: 4px;
  margin-top: 10px;
  transition: all 0.2s ease-in;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #ff9000;
    }
  }

  ${props =>
    !props.open &&
    css`
      svg {
        transform: rotate(0);
        transition: transform 0.2s linear;
      }
    `}

  ${props =>
    props.open &&
    css`
      svg {
        transform: rotate(180deg);
        transition: transform 0.2s linear;
      }
    `}
`;

export const WrapperItem = styled.div<StyleProps>`
  ${props =>
    props.open
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}

  background: #d8e1e9;
  color: #254e70;
  padding: 0 40px;
  height: 150px;
  align-items: center;
  border-radius: 0 0 4px 4px;
`;
