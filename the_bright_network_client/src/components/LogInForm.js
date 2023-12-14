import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom";

const LogInForm = ({setLoginInUser}) => {

    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [password,setPassword] = useState();

    

    const validateUser = async (password) => {
        try{
        const response = await fetch(`http://localhost:8080/users/${password}`);
        const jsonData = await response.json();
        if(jsonData.name === name){
            setLoginInUser(password);
            navigate("/main-page");
        }else{
            throw new Error("Invalid");
        }
        } catch (error){
            throw new Error("Invalid");
        }
    }

    const updateUserName = (event) => {
        setName(event.target.value);
    }

    const updateUserPassword = (event) => {
        setPassword(event.target.value);
    }

    const handleFormSubmit = (event) => {
        
        if(!name || !password){
            alert("Need to provide all details")
            return;
        } else {
            validateUser(password).catch((error) => {
                alert("Invalid details");
              });
        }

        event.preventDefault();
        const newUser = {
            name: name,
            password: password,
        }

        setName("");
        setPassword("");
        // onNewUserSubmission(newUser);
        console.log(newUser);
    }

    return ( 

    <section className="login-form">
        <Outlet />
        <div className="login-title">
        <h2>Log in to chatroom:</h2>
        </div>
        <div className="form-container">
            <form className="login" onSubmit={(event) => handleFormSubmit(event)}>
                <label htmlFor="name-input">Name:</label>
                <input
                    type="text"
                    id= "name-input"
                    onInput={(event) => updateUserName(event)}
                    value={name}
                    placeholder="Username"
                    className="username-login"
                />
                <label htmlFor="password-input">Password:</label>
                <input
                    type="password"
                    id="password-input"
                    onInput={(event) => updateUserPassword(event)}
                    value={password}
                    placeholder="Password"
                />
                <input type="submit" value={"Log in"}/>
            </form>
        </div>
        </section>
        );
}
 
export default LogInForm;