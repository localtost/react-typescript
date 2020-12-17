import React, {
    FC,
    MouseEvent
} from "react";
import {TodoItem} from "../types";

interface Props {
    array: Array<TodoItem>,
    removeItem: (id: number) => void;

    toggleItem(id: number): void
}

const TodoList: FC<Props> = ({array, removeItem, toggleItem}) => {
    const toggleRemove = (event: MouseEvent<HTMLElement>, id: number): void => {
        event.preventDefault();
        removeItem(id)
    }
    return (
        <ul>
            {array.map((el: TodoItem) => {
                    const classes = ['todolist-item']
                    if (el.completed) {
                        classes.push('completed')
                    }
                    return <li
                        className={classes.join(' ')}
                        key={el.id}>
                        <label>
                            <input
                                checked={el.completed}
                                type="checkbox"
                                onChange={toggleItem.bind(null, el.id)}
                            />
                            <span>{el.title}</span>
                            <i
                                onClick={(event) => toggleRemove(event, el.id)}
                                className='material-icons red-text'
                            >delete</i>
                        </label>
                    </li>
                }
            )}
        </ul>
    )
}
export default TodoList
