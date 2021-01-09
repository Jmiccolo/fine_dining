import {useEffect} from "react"
import Layout from "../components/layout"
import styles from "../styles/about.module.css"
import {animateSection, clearObservers} from "../lib/observers"

export default function about(){
    useEffect(()=>{
    let setObserver = animateSection(styles, 0.1);
    return function cleanup(){
      clearObservers(setObserver, styles)
    };
  })
    return (
        <Layout>
            <section className={`${styles.section} ${styles.section_even}`}>
                <div className = {`${styles.section_div} ${styles.hidden}`}>
                <aside className={styles.section_aside}><img className={styles.section_img} src="/images/chef.jpg" alt="Pans stacked on the top of a range stove. Chef Ralphio preparing a dish in a skillet while flames engulf the contents"/></aside>
                <article className={styles.section_article}>
                    <h3>Romantic elegance born from tradition</h3>
                    <p>Bred in the kitchens of Daphn&eacute; and Sim&ocirc;n, Elo&igrave;s&eacute; is a dedication to the career of Chef Jean Ralphio. Chef Ralphio has developed a menu touched by brilliance maintaining the elegant styles of his previous endeavors while encapsulating an intriguing fresh take on the French-Mediterranean cuisine featured at Elo&igrave;s&eacute;</p>
                </article>
                </div>
            </section>
            <section className={`${styles.section} ${styles.section_odd}`}>
                <div className={`${styles.section_div} ${styles.hidden}`}>
                <article className={styles.section_article}>
                    <h3>Modern aesthetics in a classical setting</h3>
                    <p>Elo&igrave;s&eacute; is situated in the heart of the Upper West Side. Designed by Danbury Designs it references the turn of the century with a touch of modern aesthetics. Take a seat in our main dining room or discover our private dining rooms for any occasion</p>
                </article>
                <aside className={styles.section_aside}><img className={styles.section_img} src="/images/restaurant.jpg" alt="Pans stacked on the top of a range stove. Chef Ralphio preparing a dish in a skillet while flames engulf the contents"/></aside>
                </div>
            </section>
        </Layout>
    );
};