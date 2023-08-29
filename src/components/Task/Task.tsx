import React from 'react';
import { ReactComponent as EditIcon } from '../../assets/img/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/img/delete.svg';
import './Task.scss';
import '../../App.scss';
import Button from '../Button/Button';
import { TaskProps } from './types';

export default function Task({ card, style }: TaskProps) {
    return (
        <div className={`task ${style} card-shadow`}>
            <h3>{card.name}</h3>
            <div className="task__actions">
                <div className="task__date">{card.date}</div>
                <div className="task__buttons">
                    <Button>
                        <EditIcon />
                    </Button>

                    <Button>
                        <DeleteIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}
