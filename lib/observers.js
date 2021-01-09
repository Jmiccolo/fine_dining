import homeStyles from  "../styles/home.module.css";

import utilStyles from "../styles/util.module.css";

let sectionEnter = (entries)=> {
        entries.forEach((entry, index)=> {
          let elem = entry.target;
        if(entry.intersectionRatio <= 0.1){
           elem.classList.add(utilStyles.hiddenSection);
          }
        else if(entry.isIntersecting){
          elem.classList.remove(utilStyles.hiddenSection)
        }
        })
      }
export function animateSection(style, threshold){
      let options = {
        root: null,
        rootMargin: "125px",
        threshold:threshold
      }
      let sectionObserver = new IntersectionObserver(sectionEnter, options);
      let sections = document.getElementsByClassName(style.section_div);
      for(let section of sections){
        sectionObserver.observe(section);
      }
      return sectionObserver
}
export function animateHeader(){
    document.addEventListener("scroll", scrollHandler);
}

export function clearObservers(observer, style){
  let sectionObserver = observer;
  let sections = document.getElementsByClassName(style.section_div);
      for(let section of sections){
        sectionObserver.unobserve(section);
      }
}
export function clearEventListener(){
  document.removeEventListener("scroll", scrollHandler);
}

function scrollHandler(){
        const header = document.querySelector("header")
        const headerRect = document.querySelector("header").getBoundingClientRect();
        const logo = document.querySelector(`.${utilStyles.navbar_logo_home}`)
        const h1 = logo.firstChild
        const menu = document.querySelector(`.${utilStyles.navbar_menu}`)
        if(window.scrollY >= 150){
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