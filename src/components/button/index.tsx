import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  loading,
  children,
  ...rest
}) => {
  return (
    <Button type="button" {...rest} disabled={rest.disabled || loading}>
      {loading ? 'Carregando...' : children}
    </Button>
  );
};

export default CustomButton;
