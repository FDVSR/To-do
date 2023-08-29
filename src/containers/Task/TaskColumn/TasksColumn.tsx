import React from 'react';
import Task from '../../../components/Task/Task';
import './TasksColumn.scss';
import { TaskColumnProps } from './types';

export default function TaskColumn({ column, tasks }: TaskColumnProps) {
    return (
        <div className="column">
            <h2>{column.name}</h2>
            <div className="column__tasks">
                {tasks.map(card => (
                    <Task card={card} style={column.style} key={card.id} />
                ))}
            </div>
        </div>
    );
}
