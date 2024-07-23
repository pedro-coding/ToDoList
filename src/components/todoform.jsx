import { useState } from "react"

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value || !category) return
    addTodo(value, category)
    setValue('')
    setCategory('')
  }

  return <div className="todo-form">
    <h2>Criar Tarefa</h2>
    <form onSubmit={handleSubmit}>
      {/* Cada vez que o formulário é enviado o onSubmit dispara a handleSubmit */}
      <input
        type="text"
        placeholder='Digite o titulo'
        value={value}
        onChange={(e) => setValue(e.target.value)}  /* Mudança de valores quando o usuário digita */
      /* (e) é o evento, target é o input, value é o valor do input */
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}> {/* Mudança de valores quando o usuário muda uma opção */}
        <option value="">Selecione uma categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudos">Estudos</option>
      </select>
      <button type='submit'>Criar tarefa</button>
    </form>
  </div>


}

export default TodoForm