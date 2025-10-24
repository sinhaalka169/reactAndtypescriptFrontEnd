import React, {useState} from 'react';
import { signUp } from '../services/api';


const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignUp = async() => {
        try {
            await signUp(email, password);
            setMessage('Signup sucessfully! you can now login')
        } catch (err: any){
            return err.response?.data?.error || 'Signup Faild'
        }
    };

    return (
        <div>
            <h2>SignUp</h2>
            <input type='email' placeholder='email' value ={email} onChange={e => setEmail(e.target.value)} />
            <input type='password' placeholder='password' value = {password} onChange={e=> setPassword(e.target.value)} />
            <button onClick={handleSignUp}>SignUp</button>
        </div>
    )
};

export default SignupForm;