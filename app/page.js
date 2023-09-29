"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const deleteHandler = (i) => {
    let copy = [...mainTask]
    copy.splice(i,1)
    setmainTask(copy)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, {title,desc}])
    // console.log(mainTask)
    setTitle("")
    setDesc("")
    
  }
  const [mainTask, setmainTask] = useState([])
  let renderTask = <h2>No task available</h2>
  if(mainTask.length > 0) {
  
  renderTask = mainTask.map((t,i) => {
    return <li key = {i} className='flex justify-between items-center mb-5'>
      <div className='flex justify-between w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-2xl font-semibold'>{t.desc}</h6>
    </div>
    <button onClick= {() => {
      deleteHandler(i)
    }} className='bg-pink-400 text-white m-2 px-4 py-2 rounded font-bold'>DELETE</button>
      </li>
  })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-semibold text-center'>To Do List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter task here' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
          // console.log(e.target.value)
        }}
        />
        <input type='text' placeholder='Enter description here' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
        value={desc}
        onChange = { 
          e => setDesc(e.target.value) 
        }
        />
        <button className='bg-black text-white px-4 py-3 text-22xl font-bold rounded m-5'>Add Task</button>
      </form>
      <hr />
      <div className='bg-slate-200 px-8'>
        <ul>
          {renderTask}
        </ul>
      </div>

    </>
  )
}

export default page