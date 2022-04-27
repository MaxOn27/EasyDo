import React, {FC, FormEvent} from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import {AddTodoFormProps} from "../../interface";
import "./listItem.css";

const ListItem: FC<AddTodoFormProps> = ({todo, toggleTodo, removeTodo}) => {
    const removeHandler = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        removeTodo(todo);
        localStorage.removeItem("todo");
    }

    return (
        <li className="listItem">
            <div
                className={todo.complete ? "complete" : undefined}
            >
                {todo.text}
                <div className='btn-wrapper'>
                    <input type="checkbox"
                           id="check"
                           className='toggle'
                           checked={todo.complete}
                           onChange={() => toggleTodo(todo)}
                    />
                    <button onClick={removeHandler} className="delete_btn">
                        <FaTrashAlt className="dlt-button" />
                    </button>
                </div>
            </div>
        </li>

    );
};

export default ListItem;