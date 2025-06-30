import { RefObject, useEffect } from 'react';

export function useClickOutside({
  ref,
  onClickOutside,
}: {
  ref: RefObject<HTMLElement | null>;
  onClickOutside: () => void;
}) {
  useEffect(() => {
    const handleClick = (clickEvent: MouseEvent) => {
      if (!ref.current) return;

      const clickedElement = clickEvent.target as HTMLElement | null;
      if (!clickedElement) return;

      if (ref.current.contains(clickedElement)) return;

      onClickOutside();
    };

    document.addEventListener('click', handleClick, {
      capture: true,
    });
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onClickOutside, ref]);
}
