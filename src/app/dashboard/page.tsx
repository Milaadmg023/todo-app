import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { TodoProvider } from '@/context/TodoContext';

export default function Dashboard() {
  return (
    <TodoProvider>
      <main className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Todo App
          </h1>
          <TodoInput />
          <TodoList />
        </div>
      </main>
    </TodoProvider>
  );
}
