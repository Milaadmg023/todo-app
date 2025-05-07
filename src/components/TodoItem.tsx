'use client';

import { useState } from 'react';
import { Todo } from '@/types/todo';
import { useTodo } from '@/context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const { toggleTodo, deleteTodo, editTodo } = useTodo();

  const handleEdit = () => {
    if (editedTitle.trim() !== todo.title) {
      editTodo(todo.id, editedTitle.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditedTitle(todo.title);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="w-5 h-5 border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:ring-2"
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyDown}
          className="flex-1 px-2 py-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.title}
        </span>
      )}
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}