import styles from "../styles/reservation.module.css"
const ResForm = ({date, setDate, timeSlots, handleSubmit, user, handleInput, setShowMonth}) => {
    const {name, email} = user;
    let day = date.day;
    let month = date.month + 1;
    let times = timeSlots[date.month].dates[day];
    let displayTimes = []
    for(let time in times){
        displayTimes.push(<option key={time} value={`${time}`}>{`${time}:00PM`}</option>)
    }
    function handleDateInput(e){
        let newDate = e.target.value.split("-")
        newDate = {
            year: parseInt(newDate[0]),
            month: parseInt(newDate[1])-1,
            day: parseInt(newDate[2]),
        }
        setDate(newDate);
        setShowMonth({year:newDate.year, month:newDate.month});
    }
    const formDate = `${date.year}-${month.toString().padStart(2, "0")}-${date.day.toString().padStart(2, "0")}`;
    return (
        <>
            <form onSubmit={handleSubmit} className={styles.resForm}>
                <h3>Schedule a Reservation:</h3>
                <label htmlFor="email">Email:</label>
                <input name="email" id="email" type="email" value={email} onChange={handleInput} required/>
                <label htmlFor="name">Name:</label>
                <input name="name" id="name" type="name" value={name} onChange={handleInput} required/>
                <label htmlFor="date">Date:</label>
                <input name="date" id="date" type="date" value={formDate} onChange={handleDateInput} required/>
                <label htmlFor="party">Party Size:</label>
                <select name="party" id="party" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <label htmlFor="time">Time:</label>
                {times?(
                <select name="time" id="time" required>
                    {displayTimes}
                </select>
                ):(
                    <p>Sorry, no times available</p>
                )}
                <label htmlFor="instructions">Special Instructions:</label>
                <textarea name="message" id="instructions" cols="30" rows="5">
                </textarea>
                <button disabled={times? false : true}>Submit</button>
            </form>
    </>
    );
};

export default ResForm;