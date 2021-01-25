import {useState, useEffect} from "react"
import axios from "axios";
import Layout from "../components/layout";
import Contact from "../components/contact"
import Calendar from "../components/Calendar"
import ResForm from "../components/ResForm"
import styles from "../styles/reservation.module.css"
import getOpenReservations from "../lib/fakeReservations"



export default function reservations(){
    const today = new Date()
    const [date, setDate] = useState(
    {
        month:today.getMonth(),
        day:today.getDate(),
        year:today.getFullYear()
    }
    );
    const [user, setUser] = useState({name: "", email:""});
    const [timeSlots, setTimeSlots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMessage, setLoadingMessage] = useState("Loading Available Reservations");
    const [showMonth, setShowMonth] = useState({month:today.getMonth(), year:today.getFullYear()})
    
    function handleSubmit(e){
        setLoadingMessage("Submitting your Request");
        setLoading(true);
        let newTimeSlots;
        if(timeSlots[date.month].dates[date.day][e.target.time.value] > 1){
            newTimeSlots = [...timeSlots];
            newTimeSlots[date.month].dates[date.day][e.target.time.value]--;
            setTimeSlots(newTimeSlots);
        }else{
            newTimeSlots = [...timeSlots];
            delete newTimeSlots[date.month].dates[date.day][e.target.time.value];
            setTimeSlots(newTimeSlots);
        }
        setTimeout(function(){
            setLoadingMessage(`Thank you ${user.name} for your reservation. An email has been sent to ${user.email} where we will update you if anything changes.`)
            setUser({email:"", name:""});
        }, 1000);
    }
    function handleInput(e){
        setUser({...user, [e.target.name]: e.target.value})
    }
    function setCalendar(e){
        setShowMonth({...showMonth, [e.target.name]: e.target.value})
    }
    useEffect(function(){
        if(timeSlots.length === 0){
        setTimeout(function(){
            setTimeSlots(getOpenReservations())
            setLoading(false);
        }, 1000)
        }
        else{
            if(loading === false){
                setLoading(true)
                setTimeout(setLoading(false), 1000)
            }         
        }
    }, [timeSlots]);
    return (
        <Layout>

            {loading ? (<section className={`${styles.reservation} ${styles.even} ${styles.loading}`}><h1>{loadingMessage}</h1></section>) : 
            (
            <section className={styles.reservation}>
            <div className={styles.reservation_div}>
            <div className={styles.resForm_container}>
                <ResForm date={date} setDate={setDate} timeSlots={timeSlots} user={user} handleInput={handleInput} handleSubmit={handleSubmit} setShowMonth={setShowMonth}/>
            </div>
                <Calendar date={date} setDate={setDate} today={today} showMonth={showMonth} setShowMonth={setShowMonth} setCalendar={setCalendar}/>
            </div>
            </section>)}
            <section className={styles.reservation}>
                <Contact/>
            </section>
        </Layout>)
};