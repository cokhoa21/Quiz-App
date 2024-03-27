import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: 'Co Huy Khoa',
//         address: 'Hoi Dan IT',
//         age: 21
//     };
//     handleOnChangeName(event) {
//         this.setState({
//             name: event.target.value
//         })
//         console.log(event.target.value);
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state);
//         this.props.handleAddUser({
//             id: "hardcode",
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     handleOnChangeAge(event) {
//         this.setState({
//             age: event.target.value
//         })
//         console.log(event.target.value);
//     }
//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I'm {this.state.age};
//                 <form>
//                     <label>Your name:</label>
//                     <input
//                         value={this.state.name}
//                         type='text'
//                         onChange={(event) => this.handleOnChangeName(event)}></input>

//                     <label>Your age:</label>
//                     <input
//                         value={this.state.age}
//                         type='text'
//                         onChange={(event) => this.handleOnChangeAge(event)}></input>
//                     <button onClick={(event) => this.handleOnSubmit(event)}>Submit</button>
//                 </form>
//             </div >
//         )
//     }
// }

const AddUserInfor = (props) => {
    // state = {
    //     name: 'Co Huy Khoa',
    //     address: 'Hoi Dan IT',
    //     age: 21
    // };
    const [name, setName] = useState('')
    const [address, setAddress] = useState('so 73 ngo Tan Lac')
    const [age, setAge] = useState('21')

    const handleOnChangeName = (event) => {
        // this.setState({
        //     name: event.target.value
        // })
        // console.log(event.target.value);
        setName(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }

    const handleOnChangeAge = (event) => {
        // this.setState({
        //     age: event.target.value
        // })
        // console.log(event.target.value);
        setAge(event.target.value)
    }

    return (
        <div>
            My name is {name} and I'm {age};
            <form>
                <label>Your name:</label>
                <input
                    value={name}
                    type='text'
                    onChange={(event) => handleOnChangeName(event)}></input>

                <label>Your age:</label>
                <input
                    value={age}
                    type='text'
                    onChange={(event) => handleOnChangeAge(event)}></input>
                <button onClick={(event) => handleOnSubmit(event)}>Submit</button>
            </form>
        </div >
    )
}

export default AddUserInfor;