import React from 'react';
import Project from '../../components/Project/Project';
import './ProjectMap.scss';
import { ProjectMapProps } from './types';

export default function ProjectMap({ projects }: ProjectMapProps) {
    return (
        <div className="projects">
            {projects.map(project => (
                <Project project={project} key={project.id} />
            ))}
        </div>
    );
}
