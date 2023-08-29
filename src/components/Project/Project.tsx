import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as EditIcon } from '../../assets/img/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/img/delete.svg';
import './Project.scss';
import '../../App.scss';
import Button from '../Button/Button';
import { IProjectProps } from './types';

export default function Project({ project }: IProjectProps) {
    return (
        <div className="project-container">
            <Link to={`/tasks/${project.id}`}>
                <div className="project card-shadow">
                    <h6>{project.name}</h6>
                    <p>{project.description}</p>
                </div>
            </Link>
            <div>
                <Button>
                    <EditIcon />
                </Button>
                <Button>
                    <DeleteIcon />
                </Button>
            </div>
        </div>
    );
}
