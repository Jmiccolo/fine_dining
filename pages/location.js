import Layout from "../components/layout"
import styles from "../styles/location.module.css"
import {useEffect, useState} from "react";
import getMapbox from "../lib/mapbox";


export default function location(){
    const  [loading, setLoading] = useState(true);
    useEffect(function(){
        getMapbox().then(res=> setLoading(false));
    },[]);
    return (
        <Layout>
        <section className={styles.section}>
            <div className={styles.section_div}>
                <article className={styles.section_article}>
                 <div id="map" className={styles.section_map}>
                 {loading ? (<h4>Map could not be loaded</h4>) : null}
                 </div>

                </article>
                <article className={`${styles.section_article} ${styles.section_hours}`}>
                    <h3>Location:</h3>
                    <p>8201 Bridgerton Ave.,<br/> New York, New York 10024</p>
                    <h3>Hours:</h3>
                    <p>
                        Lunch:
                        <br/>
                        Monday-Friday: 11:00AM-3:00PM
                        <br/>
                        <br/>
                        Dinner:
                        <br/>
                        Sunday-Thursday: 5:00PM-12:00AM
                        <br/>
                        Friday-Saturday: 5:00PM-2:00AM
                        <br/>
                        <br/>
                        Brunch:
                        <br/>
                        Saturday-Sunday: 11:00AM-3:00PM
                    </p>
                </article>  
            </div>    
        </section>
        </Layout>);
};