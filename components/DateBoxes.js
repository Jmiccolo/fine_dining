import styles from "../styles/calendar.module.css"

const DateBoxes = ({showMonth, date, handleDate, today})=>{
    const {year, month} = showMonth;
    const DateBox = [];
    const days = new Date(year, month+1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month, days).getDay();

    if(startDay !== 0){
        const pastmonthdays = new Date(year, month - 1, 0).getDate();
        for(var i = startDay-1; i >= 0; i--)
        {
            DateBox.push(new Date(year, month-2, pastmonthdays-i));
        }
    }
    for(var j = 1; j <= days; j++){
        DateBox.push(new Date(year, month, j));
    }
    if(lastDay !== 6){
        for(var k = 1; k <= 6-lastDay; k++)
        {
            DateBox.push(new Date(year, month+1, k));
        }
    }
    console.log(today.getDate());
    const Boxes = DateBox.map((val, index) => {
        let currentDate = {day:val.getDate(), month:val.getMonth(), year:val.getFullYear()};
        let past = val < today && val.toDateString() !== today.toDateString();
        let disabled = currentDate.month !== showMonth.month
        let selected = currentDate.day === date.day && currentDate.month === date.month && currentDate.year === date.year;
        const value = JSON.stringify({day:val.getDate(), month:val.getMonth(), year:val.getFullYear()})
        return (
            <div className={selected? `active ${styles.date} ${styles.selected}`: disabled?  `${styles.date} ${styles.disabled}` : past? `${styles.date} ${styles.past}` : `active ${styles.date}`} data-value={value} data-name="day" key={val}>
                <h4>{val.getDate()}</h4>
            </div>
        )
    })
    return (
        <div className={styles.dateBox} onClick={handleDate}>
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