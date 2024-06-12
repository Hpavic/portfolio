import { useMemo } from 'react';
import { shuffleArray } from '../utils/arrayUtils';

const useShuffledSkills = (skills) => {
    return useMemo(() => {
        return skills.length > 0 ? shuffleArray(skills) : [];
    }, [skills]);
};

export default useShuffledSkills;