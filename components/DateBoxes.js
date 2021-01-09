import styles from "../styles/calendar.module.css"

const DateBoxes = ({date, handleDate})=>{
    const {year, month, day} = date;
    const DateBox = [];
    const days = new Date(year, month, 0).getDate();
    const startDay = new Date(year, month-1, 1).getDay();
    const lastDay = new Date(year, month-1, days).getDay();

    if(startDay !== 0){
        const pastmonthdays = new Date(year, month - 1, 0).getDate();
        for(var i = startDay-1; i >= 0; i--)
        {
            DateBox.push(new Date(year, month-2, pastmonthdays-i));
        }
    }
    for(var j = 1; j <= days; j++){
        DateBox.push(new Date(year, month-1, j));
    }
    if(lastDay !== 6){
        for(var k = 1; k <= 6-lastDay; k++)
        {
            DateBox.push(new Date(year, month, k));
        }
    }
    const Boxes = DateBox.map((val, index) => {
                const value = JSON.stringify({day:val.getDate(), month:val.getMonth()+1, year:val.getFullYear()})
                return (<div className={(day.day === val.getDate() && day.month-1 === val.getMonth() && day.year === val.getFullYear())? `${styles.date} ${styles.selected}`: (val.getMonth() !== month-1)?  `${styles.date} ${styles.disabled}` : (val.getDate() < new Date().getDate() || val.getMonth() < new Date().getMonth() || val.getYear() < new Date().getYear() )? `${styles.date} ${styles.past}` : styles.date} data-value={value} data-name="day" onClick={(val.getMonth() === month-1 && val.getDate() >= new Date().getDate())?handleDate:null} key={val}>
            <h4>{val.getDate()}</h4>
            </div>)
    })
    return (
        <div className={styles.dateBox}>
            <div className={styles.weekHeader}>Sun</div>
            <div className={styles.weekHeader}>Mon</div>
            <div className={styles.weekHeader}>Tues</div>
            <div className={styles.weekHeader}>Wed</div>
            <div className={styles.weekHeader}>Thur</div>
            <div className={styles.weekHeader}>Fri</div>
            <div className={styles.weekHeader}>Sat</div>
            {Boxes}
        </div>
    );
};

export default DateBoxes;