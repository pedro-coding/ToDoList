import { useState } from 'react'
import './App.css';
import Todo from './components/todo';
import TodoForm from './components/todoform';
import Search from './components/search';
import Filter from './components/filter';





function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade X no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir para academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
  ])

  const [search, setSearch] = useState('')

  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

  const addTodo = (text, category) => {

    const newTodos = [
      ...todos, {
        id: Math.floor[Math.random() * 1000],
        text,
        category,
        isCompleted: false,
      }
    ]
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    )
    setTodos(filteredTodos)


  }

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='todo-list'>
        {todos
        .filter((todo) => 
          filter === 'All' ? true : filter === 'completed' ? todo.isCompleted : !todo.isCompleted)
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
        ) // O filter passa por todos os todos e vai fazer uma comparação do texto do todo e vai ver se o texto inclui o que foi pesquisado          
        .sort((a, b) => sort === 'Asc'
        ? a.text.localeCompare(b.text) 
        : a.text.localeCompare(a.text))
        .map((todo) => ( // (todo) se refere a cada item do array
          <Todo 
          key={todo.id} 
          todo={todo} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo} />
        ))}
        
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )


}

export default App
