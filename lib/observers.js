import styles from  "../styles/home.module.css";
import utilStyles from "../styles/util.module.css";

let options = {
        root: null,
        rootMargin: "100px",
        threshold: 0.2
      }
let sectionEnter = (entries)=> {
        entries.forEach((entry, index)=> {
          let elem = entry.target;
          entry.isIntersecting && elem.classList.remove(styles.hidden);
          !entry.isIntersecting && elem.classList.add(styles.hidden);
        })
      }
export function animateSection(){
      let sectionObserver = new IntersectionObserver(sectionEnter, options);
      let sections = document.getElementsByClassName(styles.section_div);
      for(let section of sections){
        sectionObserver.observe(section);
      }
      return sectionObserver
}
export function animateHeader(){
    document.addEventListener("scroll", scrollHandler);
}

export function clearObservers(observer){
    document.removeEventListener("scroll", scrollHandler);
  let sectionObserver = observer;
  let sections = document.getElementsByClassName(styles.section_div);
      for(let section of sections){
        sectionObserver.unobserve(section);
      }
}

function scrollHandler(){
      const topSectionHeight = document.querySelector(`.${styles.section_top}`).getBoundingClientRect().height;
        const header = document.querySelector("header")
        const logo = document.querySelector(`.${utilStyles.navbar_logo_home}`)
        const h1 = logo.firstChild
        const menu = document.querySelector(`.${utilStyles.navbar_menu}`)
        if(window.scrollY >= topSectionHeight*0.25){
            header.style.backgroundColor = "#fffff4";
            header.style.color = "black";
            header.style.textShadow = "none";
            logo.style.color = "black";
            logo.style.border = "none";
            h1.style.textShadow = "none";
            menu.style.textShadow = "none";
        }
        else{
            header.style.backgroundColor = "transparent";
            header.style.color = "#fffff4";
            header.style.textShadow = "1px 1px black";
            logo.style.color = "#fffff4";
            h1.style.textShadow = "2px 2px 2px black";
            menu.style.textShadow = "2px 1px black";
        }
}