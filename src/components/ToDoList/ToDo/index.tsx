import { useState } from 'react';
import { CheckCircle, Circle, Trash } from 'phosphor-react';

import { ToDoProps } from '../../../App';

import styles from './ToDo.module.css';

interface Props {
  toDo: ToDoProps;
  onToggleIsOpenToDo: (id: string) => void;
  onDeleteToDo: (id: string) => void;
}

export function ToDo({ toDo, onToggleIsOpenToDo, onDeleteToDo }: Props) {
  const { id, content, isOpen: initialIsOpen } = toDo;

  const [isOpen, setIsOpen] = useState(initialIsOpen);
  
  function handleToggleIsOpenToDo() {
    onToggleIsOpenToDo(id);
    setIsOpen(!isOpen);
  }

  function handleDeleteToDo() {
    onDeleteToDo(id);
  }

  return (
    <div className={styles.container}>
      <button 
        type="button" 
        onClick={handleToggleIsOpenToDo}
        className={styles.customCheckbox}
      >
        {isOpen ? (
          <div className={styles.circleBox}>
            <Circle size={24} />
          </div>
        ) : (
          <div className={styles.checkedBox}>
            <CheckCircle size={24} weight="fill" />
          </div>
        )}
      </button>

      <p className={styles.text}>
        {content}
      </p>

      <button 
        type="button" 
        onClick={handleDeleteToDo}
        className={styles.customDeleteButton}
      >
        <Trash size={16} />
      </button>
    </div>
  )
}
