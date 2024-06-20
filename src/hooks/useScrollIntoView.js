import { useEffect } from 'react';
import { willElementExpandOutOfView } from '../utils/willElementExpandOutOfView';

const useScrollIntoView = (ref, isOpen) => {
  useEffect(() => {
    if (isOpen && ref.current) {
      if (willElementExpandOutOfView(ref.current)) {
        const rect = ref.current.getBoundingClientRect();
        const cardTop = rect.top + window.scrollY;
        const cardHeight = ref.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const offset = cardTop - (windowHeight / 2) + (cardHeight / 2);
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  }, [isOpen, ref]);
};

export default useScrollIntoView;
