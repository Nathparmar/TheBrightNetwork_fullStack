import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const SignUpForm = ({postNewUserSignUp, allUsers}) => {
    
    const [newUser,setNewUser] = useState({
        name : "",
        age : 0,
        role : "student"
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

    <section>
        <Outlet />
        <h2>Create an Account!:</h2>
        <form onSubmit={(event) => handleFormSubmit(event)}>
            <label htmlFor="name-input">Name:</label>
            <input
                type="text"
                id= "name"
                onInput={(event) => handleChange(event)}
                value={newUser.name}
                placeholder="Username"
            />
            <label htmlFor="age-input">Age:</label>
            <input
                type="number"
                id= "age"
                onInput={(event) => handleChange(event)}
                value={newUser.age}
                placeholder="Age"
            />
            {/* <label htmlFor="role-input">Name:</label>
            <input
                type="text"
                id= "role"
                onInput={(event) => handleChange(event)}
                value={newUser.role}
                placeholder="Role"
            /> */}
            
            
            <input type="submit" value={"Log in"}/>
        </form>
        </section>
        );
    

    return (null  );
}
 
export default SignUpForm;