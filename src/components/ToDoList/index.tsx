import styles from './ToDoList.module.css';

import { ToDoProps } from '../../App';
import { ToDo } from './ToDo';

interface Props {
  toDoList: ToDoProps[];
  onToggleIsOpenToDo: (id: string) => void;
  onDeleteToDo: (id: string) => void;
}

export function ToDoList({ toDoList, onToggleIsOpenToDo, onDeleteToDo }: Props) {
  return (
    <div className={styles.list}>
      {toDoList.map(toDo => (
        <ToDo 
          key={toDo.id}
          toDo={toDo}
          onToggleIsOpenToDo={onToggleIsOpenToDo}
          onDeleteToDo={onDeleteToDo}
        />
      ))}
    </div>
  )
}
