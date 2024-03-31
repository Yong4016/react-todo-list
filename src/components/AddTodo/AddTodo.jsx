import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

const AddTodo = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAdd({ id: uuidv4(), task: inputValue, status: 'todo' });
    setInputValue('');
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} ref={inputRef} type='text' placeholder='Add Todo...' value={inputValue} onChange={handleChange} />
      <button className={styles.button} type='submit'>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
