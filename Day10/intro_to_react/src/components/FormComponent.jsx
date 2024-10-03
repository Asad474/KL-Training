import { useState } from "react";

const FormComponent = ({ submitHandler }) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (name.length === 0 || email.length === 0 || password.length === 0){
            alert('Input fields should not be empty.');
            return;
        }

        const obj = { name, email, password }
        submitHandler(obj);
    }

    return (
        <form 
            action="" 
            className="form-handler"
            onSubmit={onSubmit}
        >
            <div className = 'input-style'>
                <label for="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className = 'input-style'>
                <label for="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className = 'input-style'>
                <label for="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default FormComponent;