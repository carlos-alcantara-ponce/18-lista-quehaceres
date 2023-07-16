import React, { useState } from 'react';



const Input = (props) => {

    const { taskList, setTaskList } = props;
    const [taskName, setTaskName] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        let newTask = {
            name: taskName,
            isComplete: false
        }
        setTaskList([...taskList, newTask]);
        setTaskName("");
    };


    const onChange = (e) => {

        setTaskName(e.target.value);
    };

    return (

        <div className='my-3'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type="text" className="form-control" onChange={onChange} name="task"
                        value={taskName} />
                </div>
                <div>
                    <input type="submit" className='btn btn-primary' value="Add" />
                </div>
            </form >


        </div >

    )

}













export default Input;