import { ClipboardText, PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Task } from '../Task/Task';
import styles from './Tasks.module.css';

interface Content {
  id: number;
  content: string;
  isComplete: boolean;
}

interface TaskProps {
  content: Content[];
}

export function Tasks({ content }: TaskProps) {
  const [tasks, setTask] = useState<Content[]>(content);

  const [newTask, setNewTask] = useState({} as Content);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTask([...tasks, newTask]);
    setNewTask({ content: '' } as Content);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewTask({
      id: tasks.length + 1,
      content: event.target.value,
      isComplete: false,
    });
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteTask(taskToDelete: number) {
    const commentWithoutDeleteOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTask(commentWithoutDeleteOne);
  }

  function isCompleteTask() {
    return tasks.filter((task) => task.isComplete === true);
  }

  const checkedTask = (idTask: number) => {
    const selectedTask = tasks.filter(
      (taskSelect) => taskSelect.id === idTask
    )[0];

    const removeCompletedTask = tasks.filter((task) => {
      return task.id !== idTask;
    });

    setTask([
      ...removeCompletedTask,
      {
        isComplete: !selectedTask.isComplete,
        content: selectedTask.content,
        id: selectedTask.id,
      },
    ]);
  };

  return (
    <div className={styles.global}>
      <form onSubmit={handleCreateNewTask} className={styles.boxAddText}>
        <textarea
          name="comment"
          placeholder="Adicione uma nova tarefa"
          value={newTask.content}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <div>
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </div>
      </form>
      <div className={styles.boxTasks}>
        <div className={styles.headerTasks}>
          <div className={styles.tarefaCriada}>
            <p>Tarefas Criadas</p>
            <p className={styles.pTarefa}>{tasks.length}</p>
          </div>
          <div className={styles.tarefaConcluida}>
            <p>Concluídas</p>
            <p className={styles.pTarefa}>
              {isCompleteTask().length} de {tasks.length}
            </p>
          </div>
        </div>
        {tasks.length === 0 && (
          <div className={styles.noTasks}>
            <div>
              <ClipboardText size={32} />
            </div>
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
        {tasks.map((task) => {
          return (
            <div className={styles.listTasks}>
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                onDeleteTask={deleteTask}
                isComplete={task.isComplete}
                onCompleteTask={(id: number) => checkedTask(id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
