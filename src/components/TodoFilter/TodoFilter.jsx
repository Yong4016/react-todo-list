import React, { useContext } from 'react';
import styles from './TodoFilter.module.css';
import ThemeContext from '../../context/ThemeContext';
import { LuMoon, LuSun } from 'react-icons/lu';

const TodoFilter = ({ filters, currentFilter, onFilterChange }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleTheme}>
        {theme === 'light' ? <LuMoon /> : <LuSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((filter, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${currentFilter === filter && styles.selected}`}
              onClick={() => {
                onFilterChange(filter);
              }}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default TodoFilter;
