import React, { useState } from 'react';




const Task = props => {
    const { index, taskList, setTaskList } = props;

    let selectedTask = taskList[index];
    let taskComplete = taskList[index].isComplete;

    let textNonComplete = { textDecoration: "none" }
    let textComplete = { textDecoration: "line-through" }

    const onChange = (e) => {

        taskList[index].isComplete = !taskList[index].isComplete;
        setTaskList([...taskList])

    };

    const onSubmit = (e) => {

        e.preventDefault();

        let filteredList = taskList.filter(task => taskList.indexOf(task) !== index);
        setTaskList(filteredList);
    };


    return (
        <div>
            <form onSubmit={onSubmit}  >
                <input className='' type="checkbox" checked={textComplete} onChange={onChange} />
                <p className='d-inline-block mb-1 mx-2'
                    style={taskComplete ? textComplete : textNonComplete}>
                    {selectedTask.name}
                </p>
                <input className='btn btn-danger btn-sm py-0 align-top' type="submit" value="Delete"
                />



            </form>


        </div>


    )


}












export default Task;