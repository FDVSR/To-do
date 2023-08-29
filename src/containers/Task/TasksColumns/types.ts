import { IColumn, ITask } from '../../../data';

export interface TaskColumnsProps {
    projectId: number;
    columns: IColumn[];
    tasks: ITask[];
}
