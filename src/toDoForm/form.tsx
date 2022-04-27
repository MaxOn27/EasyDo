import React, {FormEvent, useState} from 'react';

import './form.css';

interface AddTodoFormProps {
    addTodo: AddTodo
}

const Form: React.FC<AddTodoFormProps> = ({addTodo}) => {
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(description);
        setDescription("");
    };

    return (
        <form className="newChallenge">
            <input
                type="text"
                value={description}
                onChange={event => setDescription(event.target.value)}
            />
            <button type='submit' onClick={handleSubmit} className="add-task-btn">Add Todo</button>
        </form>
    );
};

export default Form;