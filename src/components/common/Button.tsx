import React from 'react';

type Props = {
  bgColor?: string;
  fullWidth?: boolean;
  title: string;
  size?: string;
};

function Button({ bgColor, fullWidth, title, size }: Props): JSX.Element {
  const containerClasses = ['btn'];
  if (bgColor) {
    containerClasses.push(`btn-${bgColor}`);
  } else {
    containerClasses.push('btn-primary');
  }
  if (size) {
    containerClasses.push(`btn-${size}`);
  }
  if (fullWidth) {
    containerClasses.push('btn--full-width');
  }

  return (
    <button type="button" className={containerClasses.join(' ')}>
      {title}
    </button>
  );
}

Button.defaultProps = {
  bgColor: '',
  fullWidth: '',
  size: '',
};

export default Button;
