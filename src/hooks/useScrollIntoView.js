import { useEffect } from 'react';
import { getExpandedHeight } from '../utils/getExpandedHeight';

const useScrollIntoView = (ref, isOpen) => {
  useEffect(() => {
    if (isOpen && ref.current) {
      const expandedHeight = getExpandedHeight(ref.current);
      const rectTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (rectTop + expandedHeight > windowHeight) {
        const cardTop = rectTop + window.scrollY;
        const offset = cardTop - (windowHeight / 2) + (expandedHeight / 2);
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  }, [isOpen, ref]);
};

export default useScrollIntoView;
