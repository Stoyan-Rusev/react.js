import styles from './TodoItem.module.css'

export default function TodoItem({
    _id,
    todo,
    changeStatusHandler
}) {
    const todoClassName = todo.isCompleted ? `${styles.todo} ${styles.isCompleted}` : styles.todo;


    return (
        <tr className={todoClassName}>
            <td>{todo.text}</td>
            <td>{todo.isCompleted ? 'Completed' : 'Incomplete'}</td>
            <td className={styles.todoAction}>
                <button 
                    onClick={() => changeStatusHandler(_id)}
                    className={`btn ${styles.todoBtn}`}>Change status
                </button>
            </td>
        </tr>
    );
}
