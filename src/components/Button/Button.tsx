import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import './Button.css';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className="button" type="button">
      {children}
    </button>
  );
};
