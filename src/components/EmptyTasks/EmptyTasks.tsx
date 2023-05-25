import styles from './EmptyTasks.module.css';
import clipboard from '../../assets/clipboard.svg'

export function EmptyTask() {
    return (
        <div className={styles.emptyBox}>
            <img src={clipboard} alt="Clipboard image" />
            <div className={styles.paragraph}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}