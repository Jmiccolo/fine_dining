import {useState} from "react";
import Link from "next/link"
import Layout from "../components/layout"
import styles from "../styles/menus.module.css";
import Dinner from "../components/dinner"
import Lunch from "../components/lunch"
import Brunch from "../components/brunch"
export default function menus(){
  const [menu, setMenu] = useState("dinner");
  function handleClick(e){
    setMenu(e.target.value)
  }
    return (
        <Layout>
        <nav className={styles.menuNav}>
            <ul className={styles.menuNav_list}>
                <li>
                  <button className={menu === "dinner" ? styles.active : null} value="dinner" onClick={handleClick}>Dinner</button>
                </li>
                <li>
                  <button className={(menu === "lunch")? styles.active : null} value="lunch" onClick={handleClick}>Lunch</button>
                </li>
                <li>
                  <button className={(menu === "brunch")? styles.active : null} value="brunch" onClick={handleClick}>Brunch</button>
                </li>
            </ul>
        </nav>
        {
          {
            "dinner":<Dinner/>, 
            "lunch":<Lunch/>, 
            "brunch":<Brunch/>
          }[menu]
        }
        </Layout>
    );
};
