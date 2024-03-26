// class component
// function component

import React from 'react';
import { combineReducers } from 'redux';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    //JSX
    state = {
        listUsers: [
            { id: 1, name: "Co Huy Khoa", age: "21" },
            { id: 2, name: "Co Minh Quan", age: "18" },
            { id: 3, name: "Co Huy Khu", age: "50" },
            { id: 4, name: "Vu Thi Hien", age: "47" },
        ]
    }

    handleAddUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUsers]
        listUserClone = listUserClone.filter(item => item.id !== userId)
        this.setState({
            listUsers: listUserClone
        })
    }
    render() {
        return (
            <>
                <div className='a'>
                    <AddUserInfor
                        handleAddUser={this.handleAddUser}
                    />
                    <br></br>
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className='b'></div>
            </>
        );
    }
}

export default MyComponent;