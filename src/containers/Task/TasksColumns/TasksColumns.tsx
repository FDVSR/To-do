import React from 'react';
import './TasksColumns.scss';
import TaskColumn from '../TaskColumn/TasksColumn';
import { TaskColumnsProps } from './types';

export default function TasksColumns({
    projectId,
    columns,
    tasks,
}: TaskColumnsProps) {
    return (
        <div className="columns">
            {columns.map(column => (
                <TaskColumn
                    column={column}
                    tasks={tasks.filter(
                        item =>
                            item.projectId === projectId &&
                            item.column === column.id
                    )}
                    key={column.id}
                />
            ))}
        </div>
    );
}
