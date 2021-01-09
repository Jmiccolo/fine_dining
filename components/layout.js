import {useState} from "react"
import Head from 'next/head'
import Link from 'next/link'
import NavButton from '../components/navbutton'
import utilStyles from '../styles/util.module.css'

export const site = {
        title:"Eloise",
        description:"A fine dining experience on the Upper West Side. Featuring farm to table dishes in a sophisticated setting",
        keywords:"Fine Dining, Food, Restaurant, Upscale, Sophisticated, Bar, Drinks, Seafood, French-Mediterranean",
        logo:"/images/logo.svg",
        location: "8201 Bridgerton Ave., New York, New York 10024",
        email: "eloiseManagement@eloise.com",
        phone: "555-555-5555"
    }
export default function Layout({home, children}){
    const navbarButton = ()=>{
        if(home){
            const navlist = document.querySelector(`.${utilStyles.navbar_list_home}`);
            navlist.classList.toggle(utilStyles.navbar_list_show);
        }
        else {
            const navlist = document.querySelector(`.${utilStyles.navbar_list}`);
            navlist.classList.toggle(utilStyles.navbar_list_show);
        }
        const navRose = document.querySelector(`.${utilStyles.navbar_rose}`)
        navRose.classList.toggle(utilStyles.clicked);
    }
    return (
        <>
        <Head>
          <title>{site.title}</title>
          <meta name="description" content={site.description}/>
          <meta name="keywords" content={site.keywords}/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Montserrat&display=swap" rel="stylesheet"/>        
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css' rel='stylesheet' />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>

        </Head>
        <header className={home ? utilStyles.header_home : utilStyles.header }>
            <nav className={utilStyles.navbar}>
                <Link href="/"><a className={home ? utilStyles.navbar_logo_home:utilStyles.navbar_logo}><h1>Elo&igrave;s&eacute;</h1></a></Link>
                <div className={utilStyles.navbar_menu}>Menu <NavButton handleClick = {navbarButton}/></div>
                <ul className={home ? utilStyles.navbar_list_home : utilStyles.navbar_list}>
                    <li>
                        <Link href="/about"><a>About</a></Link>
                    </li>
                    <li>
                        <Link href="/location"><a>Location &amp; Hours</a></Link>
                    </li>
                    <li>
                        <Link href="/menus"><a>Menus</a></Link>
                    </li>
                    <li>
                        <Link href="/reservations"><a>Reservations</a></Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>{children}</main>
        <footer>
            <address>
                <p>Location: {site.location}</p>
                <p>Email: <a href={`mailto:${site.email}`}>{site.email}</a></p>
                <p>Phone: <a href='tel:+15555555555'>{site.phone}</a></p>
            </address>
        </footer>
        </>
    )
}