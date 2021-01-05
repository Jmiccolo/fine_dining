import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'
import Layout from '../components/layout'
import styles from "../styles/home.module.css"
import utilStyles from "../styles/util.module.css"
import {animateSection, animateHeader, clearObservers} from "../lib/observers"

export default function Home(){
  useEffect(()=>{
    let setObserver = animateSection();
    animateHeader();
    return function cleanup(){clearObservers(setObserver)};
  })
  return (
      <>
        <Layout home>
          <section className={styles.section_top}>
            <p className={styles.section_top_text}>Sophisticated elegance with a feeling of home</p>
          </section>
          <section className={`${styles.section} ${styles.section_even}`}>
            <div className={`${styles.section_div} ${styles.hidden}`}>
              <div className={styles.section_text}>
                <p>Located in the heart of the Upper West Side, Elo&igrave;s&eacute; is a respite from the bustle of city life</p>
                <Link href="/reservations"><a className={styles.section_button}>Reserve a Table</a></Link>
              </div>
              <img className={styles.section_image} src="/images/dinner.jpg" alt="Salmon on a plate served on a table with a glowing ambience"/>
            </div>
          </section>
          <section className={`${styles.section} ${styles.section_odd}`}>
            <div className={`${styles.section_div} ${styles.hidden}`}>
              <img className={styles.section_image} src="/images/appetizers.jpg" alt="Salmon on a plate served on a   table with a glowing ambience"/>
              <div className={styles.section_text}>
                <p>Offering staples of the French-Mediterranean cuisine.</p>
                <Link href="/menu"><a className={styles.section_button}>View The Menu</a></Link>
              </div>
            </div>
          </section>
          <section className={`${styles.section} ${styles.section_even}`}>
            <div className={`${styles.section_div} ${styles.hidden}`}>
              <div className={styles.section_text}>
                <p>Elo&igrave;s&eacute; is committed to offering the finest sourced ingredients served in the classic tradition.</p>
                <Link href="/about"><a className={styles.section_button}>Our Mission</a></Link>
              </div>
              <img className={styles.section_image} src="/images/home.jpg" alt="Salmon on a plate served on a table with a glowing ambience"/>
            </div>
          </section>
        </Layout>
      </>
  )
}