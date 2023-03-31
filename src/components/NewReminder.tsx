import React, {useState} from 'react';
import Reminder from "../models/reminder";

interface NewReminderProp {
    addReminder:(reminder:Reminder) =>void
}

function NewReminder({addReminder}:NewReminderProp) {
    const [title, setTitle]=useState("")

    const handleForm = (event:React.FormEvent) =>{
        event.preventDefault()
        addReminder({
            id:Date.now(),
            title:title
        })
        setTitle("")

    }
    return (
        <div>
            <form action="" className="p-4" onSubmit={handleForm}>
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={event => setTitle(event.target.value)}/>
                <button className="btn btn-primary rounded-pill m-2" type="submit">Add New</button>
            </form>
        </div>
    );
}

export default NewReminder;