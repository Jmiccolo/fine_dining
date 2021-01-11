import {useState} from "react"
import axios from "axios";
import styles from '../styles/reservation.module.css'

export default function Contact(){
    const [user, setUser] = useState({"from_name":"", "reply_to":"", "message":""})
    const [response, setResponse] = useState("");
    function clearForm(){
        setUser({"from_name":"", "reply_to":"", "message":""})
    }

    function handleSubmit (e) {
        e.preventDefault()
        const data = JSON.stringify(user);
        axios({url: "https://0duco5f1l2.execute-api.us-east-1.amazonaws.com/default",
        method: 'POST', data:data, headers:{"Content-Type":"application/json"}
        })
            .then(res=>{
                if(res.status === 200){
                    setResponse({color:"black", text:`Thank you for your Email ${name}`});
                    clearForm();
                }
                else{
                    setResponse({color:"red", text:"Sorry, something went wrong"});
                    clearForm();
                }
            })
            .catch(err=>{
                setResponse({color:"red", text:"Sorry, something went wrong"});
                clearForm();
            })
    }
    function handleChange(e){
        const {name, value} = e.target;
        e.preventDefault();
        setUser({...user, [name]:value })
    }
    return (
        <div className={`${styles.reservation_contact} ${styles.reservation_div}`}>
                    {response ? <h3 style={{color:response.color}}>{response.text}</h3> : null}
                        <h2>Contact Us</h2>
                        <form className={styles.resForm} id="contact" onSubmit={handleSubmit}>
                            <label htmlFor="from_name">Name</label>
                            <input value={user.name} type="text" required id="from_name" name="from_name" onChange={handleChange}/>
                            <label htmlFor="reply_to">Email</label>
                            <input value={user.email} type="email" required id="reply_to" name="reply_to" onChange={handleChange}/>
                            <label htmlFor="message">Message</label>
                            <textarea value={user.message} placeholder="Leave me a message here!" required name="message" cols="30" rows="10" id="message" onChange={handleChange}></textarea>
                            <button>Submit</button>
                        </form>
        </div>)
}