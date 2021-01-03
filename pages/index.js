import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'
import Layout from '../components/layout'
import styles from "../styles/home.module.css"
import utilStyles from "../styles/util.module.css"

export default function Home(){
  useEffect(()=>{
      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
      }
      let sectionEnter = (entries)=> {
        entries.forEach(entry=> {
          if(entry.isIntersecting){
            let elem = entry.target
            elem.classList.remove(styles.hidden);
          }
          if(!entry.isIntersecting){
            let elem = entry.target;
            elem.classList.add(styles.hidden);
          }
        })
      }
      let observer = new IntersectionObserver(sectionEnter, options);
      let sections = document.getElementsByClassName(styles.section);
      for(let section of sections){
        observer.observe(section);
      }
  })
  return (
      <>
        <Layout>
          <section className={styles.section_top}>
            <p className={styles.section_top_text}>Sophisticated elegance with a feeling of home</p>
          </section>
          <section className={`${styles.section} ${styles.section_even} ${styles.hidden}`}>
            <div className={styles.section_text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod cupiditate quas culpa dolore atque repudiandae voluptate necessitatibus odit tempora</p>
            <Link href="/reservations"><a className={styles.section_button}>Reserve a Table</a></Link>
            </div>
            <img className={styles.section_image} src="/images/dinner.jpg" alt="Salmon on a plate served on a table with a glowing ambience"/>
          </section>
          <section className={`${styles.section} ${styles.section_odd} ${styles.hidden}`}>
            <img className={styles.section_image} src="/images/appetizers.jpg" alt="Salmon on a plate served on a table with a glowing ambience"/>
            <div className={styles.section_text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod cupiditate quas culpa </p>
            <Link href="/menu"><a className={styles.section_button}>View The Menu</a></Link>
            </div>
          </section>
          <section className={`${styles.section} ${styles.section_even} ${styles.hidden}`}>
            <div className={styles.section_text}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quod cupiditate quas culpa dolore atque repudiandae voluptate necessitatibus odit tempora</p>
            <Link href="/about"><a className={styles.section_button}>Our Mission</a></Link>
            </div>
            <img className={styles.section_image} src="/images/home.jpg" alt="Salmon on a plate served on a table with a glowing ambience"/>
          </section>
        </Layout>
      </>
  )
}