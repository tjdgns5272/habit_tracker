import React, { memo } from 'react';

const HabitInput = memo (props => {

    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name)
        inputRef.current.value = ''
    }
    return (
        <form className="habit-input" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Please enter your Habit!"/>
            <button className="habit-add" >ADD</button>
        </form>
    );
});

export default HabitInput;