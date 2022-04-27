import React from 'react';

import ListItem from './toDoListItem/listItem';
import {TodoListProps} from "../interface";
import './list.css'

const List: React.FC<TodoListProps> = ({todos, toggleTodo, removeTodo}) => {
    return (
        <ul>
            {todos.map(todo => {
                return <ListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
            })}
        </ul>
    );
};

export default List;