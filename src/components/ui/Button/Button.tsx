import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  rounded = false,
  className,
  children,
  ...otherProps
}: ButtonProps) => {
  const classname: string = clsx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles['button--rounded']]: rounded,
    },
    className,
  );

  return (
    <button {...otherProps} className={classname}>
      {children}
    </button>
  );
};

export default Button;
