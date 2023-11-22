import React from 'react';
import cx from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text?: string | undefined;
}

const ErrorText = ({ text, className = '', ...defaultProps }: Props) => {
  if (!text) return null;
  return (
    <div className={cx('text-red-400', className)} {...defaultProps}>
      {text}
    </div>
  );
};

export default ErrorText;
