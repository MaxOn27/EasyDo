export interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
    removeTodo: RemoveTodo;
}

export interface AddTodoFormProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    removeTodo: RemoveTodo;
}

export interface IBtnProps {
    val: string;
    onClick: any;
    className: string;
}

export interface IInputProps {
    id?: string;
    className?: string;
    type: string;
    placeholder?: string;
    val?: string;
    onChange?: any;
    checked?: any;
}