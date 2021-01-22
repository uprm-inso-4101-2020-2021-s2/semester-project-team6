import { useEffect, useRef, useState } from 'react';

/**
 * This function detects if the component should be rendered if you clicked outside of the element.
 *
 * @param initialIsVisible will start the component rendered based on this parameter.
 */

function useVisible(initialIsVisible: boolean) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}

export default useVisible;
