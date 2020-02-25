import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {userName:''}
    onChangeHandler = (event)=>{
        this.setState({userName:event.target.value})
    }
    render() {
        return (
            <div>
                <form>
                    <h3>User Name</h3>
                    <input onChange={this.onChangeHandler} type="text"></input>
                </form>
            </div>
        )
    }
}
