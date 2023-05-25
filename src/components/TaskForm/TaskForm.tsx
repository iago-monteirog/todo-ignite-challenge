import { PlusCircle } from '@phosphor-icons/react';
import styles from './TaskForm.module.css';
import { Task } from '../Task/Task';
import { EmptyTask } from '../EmptyTasks/EmptyTasks';
import { useState } from 'react';

interface Task {
    id: number;
    content: string;
}


export function TaskForm() {
    const [tasks, setTasks] = useState<Task[]>([]);

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" name="task" id="task" placeholder='Adicione uma nova tarefa' />
                <button type='submit'>
                    <span>Criar</span>
                    <PlusCircle size={20} />
                </button>
            </form>

            <div className={styles.status}>
                <p>Tarefas criadas <span>0</span></p>
                <p>Concluidas <span>0</span></p>
            </div>

            <div className={styles.taskList}>
                {tasks.length > 0 && (
                    tasks.map(task => {
                        return <Task key={task.id} content={task.content} />
                    })
                )}

                <EmptyTask />
            </div>
        </div>
    )
}
