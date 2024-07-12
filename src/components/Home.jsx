import { useEffect, useRef, useState } from "react";
import TaskCard from "./TaskCard";

function Home() {
    const TaskInput = useRef()
    const [todo, setTodo]= useState([])
    const add_todo= useRef()
    const [showTask, setshowTask] = useState(false)

    const TaskButtonHandler = () => {
        let task={
            title: TaskInput.current.value
        }
        setTodo([...todo, task])
        // TaskInput.current.value= ' '
        // console.log(todo);
    }
    useEffect(() => {
        console.log(todo)
    }, [todo])

    function hideButtonHandler() {
        setshowTask(prevshowTask => !prevshowTask)
    }
    return(
        <>
            <div className="todos">
                <h1>Mange your all task here</h1>
                <div className="add">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, porro!</p>
                    <button ref={add_todo} className="add-btn" onClick={hideButtonHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>
                    </button>
                </div>
                {/* {showTask && ( */}
                <div id="todo" className={`adding-task ${showTask ? '' : 'd-none'}`}>
                    <input ref={TaskInput} type="text" className="input" placeholder="Enter todos" />
                    <button onClick={TaskButtonHandler} className="btn">Add Task</button>              
                </div>
                
                <TaskCard todo={todo} title={todo.title} setTodo={setTodo}/>
                
                
            </div>
        </>
    )
}
export default Home;