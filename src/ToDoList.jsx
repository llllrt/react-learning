import React from 'react';
import { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["结束react基础教程", "练背+有氧训练", "晚上11点半上床睡觉"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(tasks => [...tasks, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {    
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (<div className='to-do-list'>
        <h1>待办事项清单</h1>

        <div>
            <input type='text' value={newTask} placeholder='请输入待办事项' onChange={handleInputChange} />
            <button className='add-button' onClick={addTask}>添加</button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button'
                        onClick={() => deleteTask(index)}>Delete</button>
                    {/* onClick={deleteTask(index)} | 一个函数引用，等点了再执行 | 组件渲染时就先跑 deleteTask(index)，把返回值（大多是 undefined）塞给 onClick，真正点击时什么也不会发生。
onClick={() => deleteTask(index)} | 把 箭头函数 作为引用交给 React | 渲染阶段只创建函数，不执行；等用户点了才调用，里面再带着 index 去删 */}
                     <button className='move-button'
                        onClick={() => moveTaskUp(index)}>👆</button>
                    <button className='move-button'
                        onClick={() => moveTaskDown(index)}>👇</button>
                </li>
            )}
        </ol>
        
    </div>);
}

export default ToDoList;