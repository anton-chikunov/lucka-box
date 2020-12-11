import React, { useRef, useState } from 'react';
import sprite from '../../assets/img/icons.svg';

type InputType = "text" | "password" | "email" | "number" | "search" | "tel";

type Props = {
  type: InputType,
  icon: string,
  label: string,
  value?: string,
  error?: string | null
};

function TextInput({ type, icon ,label, value, error }: Props) {
  const isPassword = type === 'password';
  const refInput = useRef<HTMLInputElement>(null);

  const [currentType ,setType] = useState(type);
  const [toggleIcon ,setToggleIcon] = useState('eye');
  const [defaultValue ,setValue] = useState(value);
  const [focused ,setFocus] = useState(false);
  const [filled ,setFilled] = useState(false);
  const [currentError ,setError] = useState(error);

  const handleFocus = () => {
    setFocus(true);
  }

  const handleBlur = () => {
    setFocus(false);
  }
  
  const handleChange = () => {
    setValue(refInput.current?.value);
    setError(null);
    if (refInput.current?.value) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }
  
  const togglePassword = () => {
    if (currentType === 'password') {
      setType('text');
      setToggleIcon('eye-off');
    } else {
      setType('password');
      setToggleIcon('eye');
    }
  }  

  return (
    <div className={`input ${isPassword ? "input--password" : ""} ${focused ? "input--focused" : ""} ${filled ? "input--filled" : ""}  ${currentError ? "input--error" : ""}`}>
      <div className="input__icon input__icon--left">
        <svg className="icon icon--input" fill="currentColor">
          <use href={sprite + "#" + icon} />
        </svg>
      </div>

      <input 
        type={currentType} 
        className="input__control" 
        placeholder={label} 
        ref={refInput}
        value={defaultValue} 
        onFocus={handleFocus} 
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <div className="input__line"></div>
      {isPassword ? 
        <button type="button" className={`input__btn ${currentType === 'text' ? "input__btn--off" : ""}`} onClick={togglePassword}>
          <svg className={`icon icon--${toggleIcon}`} fill="currentColor">
            <use href={sprite + "#" + toggleIcon} />
          </svg>
        </button>
      : null}
    </div>
  );
}

export default TextInput;