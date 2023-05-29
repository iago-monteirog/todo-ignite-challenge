import { PlusCircle } from '@phosphor-icons/react';
import styles from './TaskForm.module.css';
import { Task } from '../Task/Task';
import { EmptyTask } from '../EmptyTasks/EmptyTasks';
import { ChangeEvent, FormEvent, useState } from 'react';

export function TaskForm() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTextTask, setNewTextTask] = useState<string>('');
    const [completedTasksCount, setCompletedTasksCount] = useState<number>(0);

    function handleNewTextTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');

        setNewTextTask(event.target.value);
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, newTextTask]);

        setNewTextTask('');
    }

    function handleDeleteTask(task: string) {
        const filterDeletedTask = tasks.filter(element => element !== task);

        setTasks(filterDeletedTask);
    }

    function handleTaskCompletion(isCompleted: boolean) {
        if (isCompleted) {
            setCompletedTasksCount(completedTasksCount + 1);
        } else {
            setCompletedTasksCount(completedTasksCount - 1);
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleCreateNewTask} className={styles.form}>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder='Adicione uma nova tarefa'
                    required
                    value={newTextTask}
                    onChange={handleNewTextTaskChange}
                />
                <button type='submit'>
                    <span>Criar</span>
                    <PlusCircle size={20} />
                </button>
            </form>

            <div className={styles.status}>
                <p>Tarefas criadas <span>{tasks.length}</span></p>
                <p>Concluidas <span>{completedTasksCount} de {tasks.length}</span></p>
            </div>

            <div className={styles.taskList}>
                {tasks.length === 0 && (
                    <EmptyTask />
                )}

                {tasks.map((task, index) => {
                    if (tasks.length > 0) {
                        return <Task
                            key={task}
                            id={index}
                            content={task}
                            onDeleteTask={handleDeleteTask}
                            onTaskCompletion={handleTaskCompletion}
                        />
                    } else {
                        return <></>
                    }
                })}

            </div>
        </div>
    )
}
