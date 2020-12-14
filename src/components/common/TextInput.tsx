import React, { useRef, useState } from 'react';
import sprite from '../../assets/img/icons.svg';

type InputType = 'text' | 'password' | 'email' | 'number' | 'search' | 'tel';

type Props = {
  type: InputType;
  icon: string;
  label: string;
  value?: string;
  error?: string | null;
};

function TextInput({ type, icon, label, value, error }: Props): JSX.Element {
  const isPassword = type === 'password';
  const refInput = useRef<HTMLInputElement>(null);

  const [currentType, setType] = useState(type);
  const [toggleIcon, setToggleIcon] = useState('eye');
  const [currentValue, setValue] = useState(value || '');
  const [focused, setFocus] = useState(false);
  const [filled, setFilled] = useState(false);
  const [currentError, setError] = useState(error);

  const containerClasses = ['input'];
  if (isPassword) {
    containerClasses.push('input--password');
  }
  if (focused) {
    containerClasses.push('input--focused');
  }
  if (filled) {
    containerClasses.push('input--filled');
  }
  if (currentError) {
    containerClasses.push('input--error');
  }

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = () => {
    setValue(refInput.current?.value ? refInput.current?.value : '');
    setError(null);
    if (refInput.current?.value) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  };

  const togglePassword = () => {
    if (currentType === 'password') {
      setType('text');
      setToggleIcon('eye-off');
    } else {
      setType('password');
      setToggleIcon('eye');
    }
  };

  return (
    <div className={containerClasses.join(' ')}>
      <div className="input__icon input__icon--left">
        <svg className="icon icon--input" fill="currentColor">
          <use href={`${sprite}#${icon}`} />
        </svg>
      </div>

      <input
        type={currentType}
        className="input__control"
        placeholder={label}
        ref={refInput}
        value={currentValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <div className="input__line" />
      {isPassword ? (
        <button
          type="button"
          className={`input__btn ${currentType === 'text' ? 'input__btn--off' : ''}`}
          onClick={togglePassword}
        >
          <svg className={`icon icon--${toggleIcon}`} fill="currentColor">
            <use href={`${sprite}#${toggleIcon}`} />
          </svg>
        </button>
      ) : null}
    </div>
  );
}

TextInput.defaultProps = {
  value: '',
  error: null,
};

export default TextInput;
