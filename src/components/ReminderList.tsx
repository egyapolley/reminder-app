import React from 'react';
import Reminder from "../models/reminder";

interface ReminderListProp {
    items: Reminder[]
    onDeleteReminder : (id:number) =>void
}

function ReminderList({items,onDeleteReminder}:ReminderListProp) {
    return (
        <div>
            <ul>
                {items.map(item => <li key={item.id}>{item.title} <button onClick={() =>onDeleteReminder(item.id)} className="btn btn-outline-danger m-2 rounded-pill">Delete</button></li>)}
            </ul>
        </div>
    );
}

export default ReminderList;