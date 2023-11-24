import {
  useRef,
  useEffect,
  MutableRefObject,
} from 'react';

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

    const eventTypes = ['click', 'touchstart'];

    eventTypes.forEach((type) => {
      document.addEventListener(type, handleClick, true);
    });

    return () =>
      eventTypes.forEach((type) => {
        document.removeEventListener(type, handleClick, true);
      });
  }, []);

  return null;
};

export default useOutsideClick;
