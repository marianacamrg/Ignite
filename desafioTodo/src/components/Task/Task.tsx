import { Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css';

interface TaskProps {
  id: number;
  content: string;
  isComplete: boolean;
  onDeleteTask: (comment: number) => void;
  onCompleteTask: (id: number) => void;
}

export function Task({
  content,
  onDeleteTask,
  id,
  isComplete,
  onCompleteTask,
}: TaskProps) {
  const [checked, setChecked] = useState(isComplete);

  const handleChange = (id: number) => {
    onCompleteTask(id);
    setChecked((prev) => !prev);
  };

  function handleDeleteTask(id: number) {
    onDeleteTask(id);
  }

  return (
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleChange(id)}
        />

        <p>{content}</p>

        <button onClick={() => handleDeleteTask(id)} title="Deletar task">
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
