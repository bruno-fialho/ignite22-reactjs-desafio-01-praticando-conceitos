import { PlusCircle } from 'phosphor-react';

import { Button } from './Button';
import { Input } from './Input';

import styles from './ToDos.module.css';

export function ToDos() {
  return (
    <div className={styles.container}>
      <form className={styles.inputContainer}>
        <Input 
          placeholder="Adicione uma nova tarefa"
        />
        <Button>
          Criar
          <PlusCircle size={16} />
        </Button>
      </form>
      
    </div>
  )
}