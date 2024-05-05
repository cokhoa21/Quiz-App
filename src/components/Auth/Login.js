import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async () => {
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
        let data = await postLogin(email, password);
        console.log(data.EM);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet ?</span>
                <button onClick={() => { navigate('/register') }}>Sign up</button>
            </div>
            <div className="title col-4 mx-auto">
                Co Huy Khoa's Quiz App
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, who's this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input type={"email"} className="form-control" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type={"password"} className="form-control" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <span className="forgot-password">Forgot password?</span>
                <div>
                    <button className="btn-submit" onClick={() => handleLogin()}>Login to Co Huy Khoa's Quiz App</button>
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

export default Login;