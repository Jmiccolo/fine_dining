import styles from "../styles/calendar.module.css"

const CalendarControl = ({minusYear, minusMonth, plusYear, plusMonth, setCalendar, handleJump, showMonth})=>{
    const {year, month} = showMonth
    console.log(year);
    return (
        <div className={styles.calendarControl}>
            <h1 className={styles.calendarControl_header}>{new Date(year, month).toLocaleString('default', { month: 'long' })}</h1>
            <div className={styles.calendarControl_controller}>
                <button onClick={minusYear}>&lt;&lt;</button>
                <button onClick={minusMonth}>&lt;</button>
                <select name="month" id="month" value={month} onChange={setCalendar}>
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                </select>
                <input type="number" min={1900} max={2100} value={year} name="year" onChange={setCalendar} />
                <button onClick={plusMonth}>&gt;</button>
                <button onClick={plusYear}>&gt;&gt;</button>
                <button className={styles.calendarControl_jump} onClick={handleJump}>Jump to Today</button>
            </div>
        </div>
    );
};

export default CalendarControl;