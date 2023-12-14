import { Multiselect } from "multiselect-react-dropdown/dist/multiselect-react-dropdown.cjs.development";
import { useState } from "react"

const AddUserForm = ({postUser, usersNotInChatRoom}) => {

    const [usersToBeAdded, setUsersToBeAdded] = useState([])

    const handleChange = (event) => {
        event.preventDefault()

        const addingUsers = usersToBeAdded.map((user) => {
            postUser(user.id);
            console.log(user);
        })   
    }

    const updateAddedUser = (event) => {
        
        setUsersToBeAdded([...event])
       
    }

    const userOptions = usersNotInChatRoom.map((user) => {
        
        return {
            name: user.name,
            id: user.id
        };

       
    })


    return (
        <form className="add-user-form" onSubmit={(event) => handleChange(event)}>
            <h3>Add user to chatroom:</h3>
        <div className="adding-user-multiselect">
            <Multiselect 
                isObject = {true}
                className= "multiselect"
                options = {userOptions}
                selectedValues={{}} 
                onSelect={updateAddedUser}
                onRemove={updateAddedUser}
                displayValue="name" 
                placeholder="Click here..."
            />
        </div>

            <input className="input-user" type="submit" value={"Add user"}/> 
        </form>


    );
}
 
export default AddUserForm;