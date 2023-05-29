import { useState } from 'react';
import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react';

interface TaskProps {
    content: string;
    onDeleteTask: (task: string) => void;
    id: number;
    onTaskCompletion: (isCompleted: boolean) => void;
}

export function Task({ content, onDeleteTask, id, onTaskCompletion }: TaskProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    function handleDeleteTask() {
        onDeleteTask(content)
    }

    function handleCheckBoxChange() {
        const newCheckedValue = !isChecked;

        setIsChecked(!isChecked);

        onTaskCompletion(newCheckedValue);

    }

    const checkboxId = `taskCheckbox_${content}`;

    return (
        <div className={styles.taskBox}>
            <div className={styles.content}>
                <div>
                    <input
                        type="checkbox"
                        id={checkboxId}
                        name={checkboxId}
                        checked={isChecked}
                        onChange={handleCheckBoxChange}
                        value={id}
                    />
                    <label htmlFor={checkboxId} />
                </div>

                <p className={isChecked ? styles.markedContent : ''}>{content}</p>
            </div>

            <button>
                <Trash size={24} onClick={handleDeleteTask} />
            </button>
        </div>
    )
}