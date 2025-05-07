'use client';

import { useTodo } from '@/context/TodoContext';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No todos yet. Add one above!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <div className="text-sm text-gray-500 text-right">
        {todos.length} item{todos.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
}