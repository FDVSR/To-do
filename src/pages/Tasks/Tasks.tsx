import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { ReactComponent as BackIcon } from '../../assets/img/back.svg';
import TasksColumns from '../../containers/Task/TasksColumns/TasksColumns';
import Button from '../../components/Button/Button';
import { columns, tasks } from '../../data';
import Header from '../../containers/Header/Header';

export default function Tasks() {
    const { project } = useParams();
    const projectId = Number(project);
    return (
        <div className="content">
            <Header title={`Задачи проекта ${projectId}`}>
                <div className="navigate">
                    <Link to="/" className="home-button">
                        <Button>
                            <BackIcon />
                        </Button>
                    </Link>
                    <Button>
                        <p>+</p>
                    </Button>
                </div>
            </Header>

            <TasksColumns
                projectId={projectId}
                columns={columns}
                tasks={tasks}
            />
        </div>
    );
}
