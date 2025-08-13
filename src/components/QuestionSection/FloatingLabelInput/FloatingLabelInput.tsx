import { useState, useRef, InputHTMLAttributes, ChangeEvent } from 'react';
import styles from './FloatingLabelInput.module.scss';
import clsx from 'clsx';

interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

const FloatingLabelInput = ({ labelText, ...otherProps }: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <div className={styles['input-container']}>
      <input
        {...otherProps}
        ref={inputRef}
        className={styles['floating-input']}
        type='text'
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        className={clsx(styles['floating-label'], { [styles['floating-label--active']]: isFocused })}
        onClick={() => inputRef?.current?.focus()}
      >
        {labelText}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
