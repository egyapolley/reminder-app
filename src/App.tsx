import React, {useEffect, useState} from 'react';
import './App.css';
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import ReminderService from "./services/reminderService";
import 'bootstrap/dist/css/bootstrap.css'
import reminderService from "./services/reminderService";
import NewReminder from "./components/NewReminder";



//const items:Reminder[] = []

function App() {

  const [reminders, setReminder] = useState<Reminder[]>([]);

  useEffect(() =>{
    loadReminders()

  }, [])

    const loadReminders = async () =>{
    const data = await ReminderService.getReminders();
    setReminder(data)
    }

    const removeReminder = (id: number) => {
    setReminder(reminders.filter(value => value.id !== id))
    }

    const addReminder = (reminder:Reminder) =>{
    setReminder([reminder, ...reminders])
    }




  return (
    <div className="App">
      <NewReminder addReminder={addReminder}/>
      <ReminderList items={reminders} onDeleteReminder={removeReminder} />
    </div>
  );
}

export default App;
