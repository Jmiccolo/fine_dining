import {useState} from 'react';
import styles from '../styles/calendar.module.css'
import CalendarControl from "./CalendarControl";
import DateBoxes from "./DateBoxes";

const Calendar = ({date, setDate, today}) => {
    // set Date in date control
    function handleDate(e){
        if(e.target.dataset.name !== "day"){ 
            setDate({...date, [e.target.name]:parseInt(e.target.value)})
        }
        else {
            setDate({...date, day:JSON.parse(e.target.dataset.value)})
        }
    }
    function handleJump(){
        setDate({year:today[2], month:today[0], day:{month:today[0], day:today[1], year: today[2]}})
    }
    function minusYear() {
        setDate({...date, year:date.year-1})
    }
    function plusYear() {
        setDate({...date, year:date.year+1})
    }
    function minusMonth() {
        date.month !== 1 ? setDate({...date, month:date.month-1}):setDate({...date, year:date.year-1, month:12});
    }
    function plusMonth() {
        date.month !== 12 ? setDate({...date, month:date.month+1}):setDate({...date, year:date.year+1, month:1});
    }
    return (<div className={styles.calendar}>
        <CalendarControl 
            date = {date}
            minusYear = {minusYear}
            plusYear = {plusYear}
            minusMonth = {minusMonth}
            plusMonth = {plusMonth}
            handleDate = {handleDate}
            handleJump = {handleJump}
        />
        <DateBoxes
            today={today}
            date={date}
            handleDate={handleDate}
        />
    </div>)
}

export default Calendar;