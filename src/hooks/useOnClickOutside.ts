import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        !ref.current ||
        !event.target ||
        !(event.target instanceof HTMLElement) ||
        event.target.dataset.type === 'figure-image'
      ) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
