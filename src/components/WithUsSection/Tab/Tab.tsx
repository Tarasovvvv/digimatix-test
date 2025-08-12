import styles from './Tab.module.scss';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface TabProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'active' | 'inactive';
  title: string;
}

const Tab = ({ variant = 'inactive', title, className, ...otherProps }: TabProps) => {
  const classname = clsx(styles.tab, {
    [styles['tab--active']]: variant === 'active',
  });

  return (
    <span {...otherProps} className={classname}>
      {title}
    </span>
  );
};

export default Tab;
