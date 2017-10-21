import React, {Component} from 'react'
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {sampleMessage: state.sampleData}
}
function mapDispatchToProps(dispatch) {
    return {
        updateMessage : ()=>{
            dispatch({type:'SAMPLE'})
        }
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                Welcome to React!!!.
                <button onClick={this.props.updateMessage}>Click me</button>
                <span>{this.props.sampleMessage.message}</span>

            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);