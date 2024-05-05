import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.scss';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSignUp = async () => {
        //validate 

        const isValidEmail = validateEmail(email);

        //validate email
        if (!isValidEmail) {
            toast.error('Invalid email');
            return;
        }

        //validate password
        if (!password) {
            toast.error('Invalid password');
        }
        //submit apis
        let data = await postRegister(email, password, username);
        console.log("check data", data);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login');
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    const navigate = useNavigate();

    return (
        <div className="register-container">
            <div className="header">
                <span>Already have an account?</span>
                <button onClick={() => { navigate('/login') }}>Log in</button>
            </div>
            <div className="title col-4 mx-auto">
                Co Huy Khoa's Quiz App
            </div>
            <div className="welcome col-4 mx-auto">
                Start your journey?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className="form-group pass-group">
                    <label>Password</label>
                    <input type={isShowPassword ? "text" : "password"} className="form-control" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                    {isShowPassword ?
                        <span className='icons-eye' onClick={() => setIsShowPassword(false)}>
                            <VscEye></VscEye>
                        </span>
                        :
                        <span className='icons-eye' onClick={() => setIsShowPassword(true)}>
                            <VscEyeClosed></VscEyeClosed>
                        </span>
                    }
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type={"text"} className="form-control" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div>
                    <button className="btn-submit" onClick={() => handleSignUp()}>Create my free account</button>
                </div>
                <div className="text-center">
                    <span className='back'
                        onClick={() => { navigate('/') }}> &#60; &#60;Go to Homepage</span>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
export default Register;