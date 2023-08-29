import { ITask } from '../../data';

export interface TaskProps {
    card: ITask;
    style: 'state-green' | 'state-grey' | 'state-red';
}
