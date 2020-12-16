import React, {useState} from "react";
import TodoList
    from "../components/Todolist";
import TodoFrom
    from "../components/Form";
import {TodoItem} from "../types";


const TodoPages: React.FC = () => {
    const [todos, setTodo] = useState<Array<TodoItem>>([])

    const handlerChange = (title: string): void => {
        const item: TodoItem = {
            title,
            id: Date.now(),
            completed: false
        }
        setTodo((prevState): any => [...prevState, item])
    }
    const removeItem = (id: number) => {
        const shoudRemove: boolean = window.confirm('Вы уверенны что хотите удлать элемент?')
        shoudRemove && setTodo(prev => prev.filter(el => el.id !== id))
    }
    const toggleItem = (id: number) => {
        setTodo(todos.map(el => {
            if (el.id === id) {
                el.completed = !el.completed;
            }
            return el;
        }))
    }
    return (
        <React.Fragment>
            <TodoFrom
                handlerChange={handlerChange}/>
            <TodoList
                toggleItem={toggleItem}
                removeItem={removeItem}
                array={todos}/>
        </React.Fragment>

    )
}
export default TodoPages
