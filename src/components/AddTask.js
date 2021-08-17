import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const validateData = (e) => {

        e.preventDefault()
        if(!text){
            alert('Please enter task')
            return;
        }
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

    }
    return (
        <form className="add-form" onSubmit={validateData} >
            <div className="form-control">
                <label>Task</label>
                <input 
                type="text" 
                placeholder="Add task" 
                value={text} 
                onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day</label>
                <input 
                type="text" 
                placeholder="Add day"
                value={day}
                onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input 
                type="checkbox"
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Add task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
