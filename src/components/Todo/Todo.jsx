import React from 'react';
import { FiDelete } from 'react-icons/fi';
import styles from './Todo.module.css';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { id, task, status } = todo;
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? 'completed' : 'todo' });
  };
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <li className={styles.todo}>
      <input className={styles.checkbox} type='checkbox' name={id} id={id} checked={status === 'completed'} onChange={handleChange} />
      <label className={styles.text} htmlFor={id} style={{ textDecoration: status === 'completed' ? 'line-through' : 'none' }}>
        {task}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FiDelete />
        </button>
      </span>
    </li>
  );
};

export default Todo;
