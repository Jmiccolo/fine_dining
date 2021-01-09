import styles from "../styles/calendar.module.css"

const CalendarControl = ({minusYear, minusMonth, plusYear, plusMonth, handleDate, handleJump, date})=>{
    const {year, month} = date
    return (
        <div className={styles.calendarControl}>
            <h1 className={styles.calendarControl_header}>{new Date(year, month - 1).toLocaleString('default', { month: 'long' })}</h1>
            <div className={styles.calendarControl_controller}>
                <button onClick={minusYear}>&lt;&lt;</button>
                <button onClick={minusMonth}>&lt;</button>
                <select name="month" id="month" value={month} onChange={handleDate}>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <input type="number" min={1900} max={2100} value={year} name="year" onChange={handleDate} />
                <button onClick={plusMonth}>&gt;</button>
                <button onClick={plusYear}>&gt;&gt;</button>
                <button className={styles.calendarControl_jump} onClick={handleJump}>Jump to Today</button>
            </div>
        </div>
    );
};

export default CalendarControl;