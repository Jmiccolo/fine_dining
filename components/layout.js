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
        hours: {
            "M-F":["Breakfast:7:00AM-10:00AM", "Lunch:11:00AM- 3:00PM", "Dinner: 6:00PM-12:00AM"],
            Weekends: ["Brunch: 7:00AM-3:00PM", "Dinner: 6:00PM-12:00AM"]
        },
        email: "eloiseManagement@eloise.com",
        phone: "555-555-5555"
    }
const roseRed = "#c21e56";
export default function Layout({home, children}){
    let fill = home ? "#ffffff4" : "black";
    const [buttonFill, setButtonFill] = useState(fill);
    const hours = Object.keys(site.hours).map((val,index)=>{
           return( <div style={{margin:"0 8px"}} key={index}>
                {val}:<div>{site.hours[val].map((times, index) =>(<div key={index}>{times} <br/></div>))}</div>
            </div>
           )
    })
    const navbarButton = ()=>{
        if(home){
            const navlist = document.querySelector(`.${utilStyles.navbar_list_home}`);
            navlist.classList.toggle(utilStyles.navbar_list_show);
            
        }
        else {
            const navlist = document.querySelector(`.${utilStyles.navbar_list}`);
            navlist.classList.toggle(utilStyles.navbar_list_show);
        }
        buttonFill !== fill ? setButtonFill(fill) : setButtonFill(roseRed);
    }
    return (
        <>
        <Head>
          <title>{site.title}</title>
          <meta name="description" content={site.description}/>
          <meta name="keywords" content={site.keywords}/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Montserrat&display=swap" rel="stylesheet"/>
        </Head>
        <header className={home ? utilStyles.header_home : utilStyles.header }>
            <nav className={utilStyles.navbar}>
                <Link href="/"><a className={home ? utilStyles.navbar_logo_home:utilStyles.navbar_logo}><h1>Elo&igrave;s&eacute;</h1></a></Link>
                <div className={utilStyles.navbar_menu}>Menu <NavButton handleClick = {navbarButton} fill={buttonFill}/></div>
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
                        <Link href="/contact"><a>Contact</a></Link>
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