import {useState} from 'react';
import styles from '../styles/calendar.module.css'
import CalendarControl from "./CalendarControl";
import DateBoxes from "./DateBoxes";

const Calendar = ({date, setDate, today, showMonth, setShowMonth, setCalendar}) => {
    // set Date in date control
    function handleDate(e){
    if(e.target.className.includes("active")) {
            setDate({...JSON.parse(e.target.dataset.value)})
        }
    }
    function handleJump(){
        setShowMonth({year:today.getFullYear(), month:today.getMonth()})
    }
    function minusYear() {
        setShowMonth({...showMonth, year:showMonth.year-1})
    }
    function plusYear() {
        setShowMonth({...showMonth, year:showMonth.year+1})
    }
    function minusMonth() {
        showMonth.month !== 0 ? setShowMonth({...showMonth, month:showMonth.month-1}):setShowMonth({year:showMonth.year-1, month:11});
    }
    function plusMonth() {
        showMonth.month !== 11 ? setShowMonth({...showMonth, month:showMonth.month+1}):setShowMonth({year:showMonth.year+1, month:0});
    }
    return (<div className={styles.calendar}>
        <CalendarControl 
            showMonth = {showMonth}
            setCalendar = {setCalendar}
            minusYear = {minusYear}
            plusYear = {plusYear}
            minusMonth = {minusMonth}
            plusMonth = {plusMonth}
            handleJump = {handleJump}
        />
        <DateBoxes
            today={today}
            date={date}
            handleDate={handleDate}
            showMonth = {showMonth}
        />
    </div>)
}

export default Calendar;