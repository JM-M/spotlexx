import React, { useRef, useLayoutEffect } from 'react';
import autosize from 'autosize';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  autogrow?: boolean;
}

const Textarea = ({ autogrow, ...defaultProps }: Props) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (autogrow && ref.current) autosize(ref.current);
  }, [autogrow, ref.current]);

  return <textarea ref={ref} {...defaultProps} />;
};

export default Textarea;
