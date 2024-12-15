import React,{useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo'
const style={
bg:'h-screen w-screen p-4 bg-graditent-to-r from-[#2F89ED] to-[#1CB5E0]',
container:'bg=slate-100 mac-w-[500px] w-full m-auto rounded-md shadow-xl p-4',
heading:'text-3xl font-bold text-center text-gray-800 p-2',
form:'flex justify-between',
input:'border p-2 w-full text-xl',
button: 'border p-4 ml-2 bg-purple-500 text-slate-100',
count:'text-center p-2',
}
function App() {
  const[todos,setTodos]=useState['Finish This','Do Calculus']
  return (
    <div className={style.bg} >
      <div className={style.container}>
        <h3 className={style.heading}>Todo list</h3>
        <form className={style.form}>
          <input className={style.input} type='text' placeholder='Add what to do'/>
          <button className={style.button}><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {todos.map((todo, index)=> (
            <Todo key={index} todo={todo}/>
          ))}
          
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
