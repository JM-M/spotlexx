import { useRef, useEffect, MutableRefObject } from 'react';

const useOutsideClick = ({
  onOutsideClick,
  elRef,
}: {
  onOutsideClick: Function;
  elRef: MutableRefObject<any>;
}) => {
  const callback = useRef(onOutsideClick);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        elRef.current &&
        !elRef.current.contains(event.target) &&
        typeof callback.current === 'function'
      ) {
        callback.current();
      }
    };

    const eventType = 'click';

    document.addEventListener(eventType, handleClick, true);

    return () => document.removeEventListener(eventType, handleClick, true);
  }, [elRef]);

  return null;
};

export default useOutsideClick;
