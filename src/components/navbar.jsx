import React, {PureComponent} from 'react';

class Navbar extends PureComponent {

    render() {
        const totalCount = this.props.totalCount
        return (
            <nav className="navbar">
                <i className="navbar-logo fas fa-leaf"/>
                <span>Habit Tracker</span>
                <span className="navbar-count">{totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;