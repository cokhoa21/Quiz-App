import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: 'Co Huy Khoa',
        address: 'Hoi Dan IT',
        age: 21
    };
    handleOnChangeName(event) {
        this.setState({
            name: event.target.value
        })
        console.log(event.target.value);
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.handleAddUser({
            id: "hardcode",
            name: this.state.name,
            age: this.state.age
        });
    }

    handleOnChangeAge(event) {
        this.setState({
            age: event.target.value
        })
        console.log(event.target.value);
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age};
                <form>
                    <label>Your name:</label>
                    <input
                        value={this.state.name}
                        type='text'
                        onChange={(event) => this.handleOnChangeName(event)}></input>

                    <label>Your age:</label>
                    <input
                        value={this.state.age}
                        type='text'
                        onChange={(event) => this.handleOnChangeAge(event)}></input>
                    <button onClick={(event) => this.handleOnSubmit(event)}>Submit</button>
                </form>
            </div >
        )
    }
}

export default AddUserInfor;