import React from 'react';
import ProjectMap from '../../containers/ProjectMap/ProjectMap';
import { projects } from '../../data';
import Button from '../../components/Button/Button';
import Header from '../../containers/Header/Header';

export default function Projects() {
    return (
        <div className="content">
            <Header title="Проекты">
                <Button>
                    <p>+</p>
                </Button>
            </Header>

            <ProjectMap projects={projects} />
        </div>
    );
}
