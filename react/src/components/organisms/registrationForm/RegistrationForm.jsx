import { useState } from "react";
import { Button } from "../../atoms/button/Button";
import { TextField } from "../../atoms/textField/TextField";
import "./style.scss"

export const RegistrationForm = ({onRegister}) => {
      
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    return (
        <div className="login-form">
            <TextField label="Create your username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
            <TextField label="Create your password" type="password" value={password} name="password" onChange={e => setPassword(e.target.value)}/>
            <TextField label="Repeat your password" type="password" value={passwordRepeat} name="password" onChange={e => setPasswordRepeat(e.target.value)}/>
            <Button variant="secondary" onClick={() => onRegister({username, password, passwordRepeat})}>Register</Button>
        </div>
    );
}