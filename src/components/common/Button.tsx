import React from 'react';

type Props = {
  bgColor?: string,
  fullWidth?: boolean,
  title: string,
  size?: string
};

function Button({ bgColor, fullWidth, title, size }: Props) {
  return (
    <button type="button" className={`btn btn-${bgColor ? bgColor : "primary"} btn-${size ? size : ""} ${fullWidth ? "btn--full-width" : ""}`}>{ title }</button>
  );
}

export default Button;