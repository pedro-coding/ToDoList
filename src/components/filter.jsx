

const Filter = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}> 
                        <option value="all">Todas</option>
                        <option value="completed">Completas</option> 
                        <option value="incomplete">Incompletas</option>
                    </select>
                </div>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort('Asc')}>Asc</button>
                <button onClick={() => setSort('Desc')}>Desc</button>
            </div>
        </div>
    )
}

export default Filter