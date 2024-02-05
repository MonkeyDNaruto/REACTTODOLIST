import React, { useState } from 'react'
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState([])
  return (
    <div className='home'>
        <h1>Todo List</h1>
        <div>
        <Create />
        {
            todos.length === 0
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo => {
                <div>
                    {todo}
                </div> 
            })
        }
        </div>
    </div>
  )
}

export default Home