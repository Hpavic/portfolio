import { useCallback, useState } from 'react';
import { shuffleArray } from '../utils/arrayUtils';

const useShuffledProjects = (initialProjects) => {
    const [projects, setProjects] = useState(initialProjects);

    const shuffleSkillsInProjects = useCallback(() => {
        const shuffledProjects = projects.map(project => ({
            ...project,
            skills: project.skills ? shuffleArray([...project.skills]) : []
        }));
        setProjects(shuffledProjects);
    }, [projects]);

    return [projects, shuffleSkillsInProjects];
};

export default useShuffledProjects;
