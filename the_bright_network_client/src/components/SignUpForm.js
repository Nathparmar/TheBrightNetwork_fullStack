import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const SignUpForm = ({postNewUserSignUp}) => {
    
    const [newUser,setNewUser] = useState({
        name : "",
        age : 0,
        role : "Student"
    });


    const navigate = useNavigate();

    const handleChange = (event) => {
        
        let propertyName = event.target.id;
        let copiedUser = {...newUser};
        copiedUser[propertyName] = event.target.value;

        
        setNewUser(copiedUser);

    }

    const handleFormSubmit = (event) => {

        event.preventDefault();
        
        if(!newUser.name || !newUser.age){
            alert("Please complete all details");
            return;
        } 

        postNewUserSignUp(newUser);

        setNewUser({
            name : "",
            age : 0,
            role : "student"
        });

        navigate("/main-page")
    }

    return ( 

    <section className="login-form">
        <Outlet />
        <div className="login-title">
            <h2>Create an Account</h2>
        </div>
        <div className="form-container">
            <form className="login" onSubmit={(event) => handleFormSubmit(event)}>
            <div className="username-login">
                <label className="signup-label" htmlFor="name-input">Name:</label>
                <input
                    type="text"
                    id= "name"
                    onInput={(event) => handleChange(event)}
                    value={newUser.name}
                    placeholder="Username"
                    className="name-input"
                />
            </div>
                <div className="username-login">
                    <label className="signup-label" htmlFor="age-input">Age:</label>
                    <input
                        type="number"
                        id= "age"
                        onInput={(event) => handleChange(event)}
                        value={newUser.age}
                        placeholder="Age"
                        className="name-input"
                    />
                </div>
            
                
                
                <input className="login-button" type="submit" value={"Sign up"}/>
            </form>
        </div>
        </section>
    );
    

    
}
 
export default SignUpForm;