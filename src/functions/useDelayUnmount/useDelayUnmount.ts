import { useEffect, useState } from 'react';

/*
  -----[Solution Source]-----
  https://stackoverflow.com/questions/40064249/react-animate-mount-and-unmount-of-a-single-component
  https://medium.com/@tomaszferens/delay-unmounting-of-the-component-in-react-8d6f6e73cdc
*/

/**
 * @param isMounted This is the state that will control if the value is mounted or not
 * @param delayTime Time in ms that should be waited before the component actually unmounts.
 */

export function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !shouldRender) setShouldRender(true);
    else if (!isMounted && shouldRender)
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);

    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}
