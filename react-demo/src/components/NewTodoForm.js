import React, {useState} from "react";

function NewTodoForm(props) {

    const [assigned, setAssigned] = useState("");
    const [description, setDescription] = useState("");

    // const assignedChange = (event) => {
    //     console.log("assigned", event.target.value);
    //     setAssigned(event.target.value);
    // }

    // event.target.value is what the user is typing in
    const descriptionChange = (event) => {
        console.log("description", event.target.value);
        setDescription(event.target.value)
    }

    const submitTodo = () => {
        if (description !== "" && assigned !== "") {
            props.addTodo(description, assigned);
            setAssigned("");
            setDescription("");
        }
    }


    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className='form-label'>Assigned</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        required
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                    >

                    </input>
                </div>

                <div className="mb-3">
                    <label className='form-label'>Description</label>
                    <textarea 
                        type="text" 
                        className="form-control" 
                        rows={3} 
                        required
                        // while user is typling. always call the descriptionChange method
                        onChange={descriptionChange}
                        value={description}
                    >
                    </textarea>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary mt-3"
                    onClick={submitTodo}    
                >Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm