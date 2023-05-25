import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react';

interface TaskProps {
    content: string;
}

export function Task({ content }: TaskProps) {
    return (
        <div className={styles.taskBox}>
            <div className={styles.content}>
                <div>
                    <input type="checkbox" name="taskCheckbox" />
                    <label htmlFor="taskCheckbox" />
                </div>

                <p>{content}</p>
            </div>

            <button>
                <Trash size={24} />
            </button>
        </div>
    )
}