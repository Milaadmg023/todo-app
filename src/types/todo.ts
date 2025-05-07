export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export type TodoContextType = {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
};