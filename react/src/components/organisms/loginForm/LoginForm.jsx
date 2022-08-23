import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { TextField } from "../../atoms/textField/TextField";
import "./style.scss"

export const LoginForm = ({onLogin}) => {
      
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-form">
            <TextField label="Enter your username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
            <TextField label="Enter your password" type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}/>
            <Button variant="secondary" onClick={() => onLogin({username, password})}>Sign In</Button>
        </div>
    );
}