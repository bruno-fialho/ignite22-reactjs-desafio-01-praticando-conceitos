import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';

import emptyListImg from './assets/emptyListImg.svg';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { ToDoList } from './components/ToDoList';

import styles from './App.module.css';

import './global.css';

export interface ToDoProps {
  id: string;
  content: string;
  isOpen: boolean;
}

function App() {
  const [toDoList, setToDoList] = useState<ToDoProps[]>([]);
  const [newCreatedToDo, setNewCreatedToDo] = useState('');
  const [toDoTotal, setToDoTotal] = useState<number>();
  const [closedToDoTotal, setClosedToDoTotal] = useState<number>();

  useEffect(() => {
    setToDoTotal(toDoList.length);

    setClosedToDoTotal(toDoList.reduce(
      (previousValue, currentValue) => {
        if (!currentValue.isOpen) {
          previousValue++;
        }
        return previousValue;
      },
      0
    ));
  }, [toDoList]);

  function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
    // event.target.setCustomValidity("");
    setNewCreatedToDo(event.target.value);
  }

  function handleAddToDo(event: FormEvent) {
    event.preventDefault();

    const newToDo = {
      id: uuidv4(),
      content: newCreatedToDo,
      isOpen: true
    }

    setToDoList([newToDo, ...toDoList]);
    setNewCreatedToDo('');
  }

  function toggleIsOpenToDo(id: string) {
    const updatedToDoList = toDoList;

    const index = updatedToDoList.findIndex(toDo => toDo.id === id);

    if (index !== -1) {
      updatedToDoList[index].isOpen = !updatedToDoList[index].isOpen;
    }

    setToDoList(updatedToDoList);
  }

  function deleteToDo(id: string) {
    const toDoListWithoutDeletedOne = toDoList.filter(toDo => 
      toDo.id !== id
    );
    
    setToDoList(toDoListWithoutDeletedOne);
  }

  const iNewCreatedToDoEmpty = newCreatedToDo.length === 0;

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.main}>
        <form onSubmit={handleAddToDo} className={styles.inputContainer}>
          <Input 
            placeholder="Adicione uma nova tarefa"
            value={newCreatedToDo}
            onChange={handleNewToDoChange}
          />
          <Button disabled={iNewCreatedToDoEmpty}>
            Criar
            <PlusCircle size={16} />
          </Button>
        </form>

        <div className={styles.toDoContent}>
          <div className={styles.toDoinfo}>
            <p className={styles.createdText}>
              Tarefas criadas <span className={styles.createdNumber}>
                {toDoTotal}
              </span>
            </p>
            <p className={styles.finishedText}>
              Concluídas
              <span className={styles.finishedNumber}>
                {toDoTotal === 0 ? '0' : `${closedToDoTotal} de ${toDoTotal}`}
              </span>
            </p>
          </div>

          {toDoList.length === 0 
            ? (
              <div className={styles.emptyContainer}>
                <img src={emptyListImg} className={styles.emptyImage} />
                <p className={styles.emptyTitle}>
                  Você ainda não tem tarefas cadastradas
                </p>
                <p className={styles.emptySubtitle}>
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div>
            ) : (
              <ToDoList 
                toDoList={toDoList} 
                onDeleteToDo={deleteToDo} 
                onToggleIsOpenToDo={toggleIsOpenToDo}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
