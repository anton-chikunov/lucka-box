import React from 'react';
import sprite from '../../assets/img/icons.svg';

type Props = {
  children: JSX.Element;
};

function AuthContainer({ children }: Props): JSX.Element {
  return (
    <div className="auth">
      <div className="logo logo--auth">
        <svg className="icon icon--logo" fill="currentColor">
          <use href={`${sprite}#logo`} />
        </svg>
      </div>
      {children}
    </div>
  );
}

export default AuthContainer;
