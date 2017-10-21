import React, {Component} from 'react';
import {Link} from 'react-router';
class App extends Component {
    render() {
        return <div>
            <Link to='/home'>
                Home</Link>|<Link to='/about'>About</Link>|
            <div>{this.props.children}</div>
        </div>;
    }
}

export default App
