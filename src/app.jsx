import React, {Component} from "react";
import './app.css';
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import HabitInput from "./components/habitInput";

class App extends Component {
    state = {
        habit_list: [
            {id: 0, name: 'Reading', count: 0},
            {id: 1, name: 'Running', count: 0},
            {id: 2, name: 'Coding', count: 0},
        ],
    }

    handleIncrement = habit => {
        const habit_list = this.state.habit_list.map(item => {
            if (item.id === habit.id) {
                return {...habit, count: habit.count + 1};
            }
            return item;
        });
        this.setState({habit_list})
    };

    handleDecrement = habit => {
        const habit_list = this.state.habit_list.map(item => {
            if(habit.id === item.id) {
                return {...habit, count : item.count > 0? item.count - 1:0}
            }
            return item;
        })
        this.setState({habit_list})
    };

    handleDelete = habit => {
        const habit_list = this.state.habit_list.filter(list => list.id !== habit.id);
        this.setState({habit_list});
        console.log(this.state.habit_list)
    };

    handleAdd = name => {
        const habit_list = [...this.state.habit_list, {id: Date.now(), name, count: 0} ];
        this.setState({habit_list})
    }
    handleReset = () => {
        const habit_list = this.state.habit_list.map(habit => {
            if (habit.count !== 0) {
                return {...habit, count: 0}
            }
            return habit
        })
        this.setState({habit_list})
    };
    render() {
        const habits = this.state.habit_list;
        const totalCount = this.state.habit_list.filter(list => list.count > 0).length
        return (
            <div> 3
                <Navbar
                    totalCount={totalCount}
                />
                <HabitInput
                    onAdd={this.handleAdd}
                />
                <Habits
                    habits={habits}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onAdd={this.handleAdd}
                />
                <button className="habit-reset habit-button" onClick={this.handleReset}>Reset All</button>
            </div>
        );
    }
}

export default App;
