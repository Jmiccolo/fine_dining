import styles from "../styles/menus.module.css";
export default function Dinner(){
    return (
        <div className={styles.menu}>
            <div className={styles.menu_page}>
                <hr className={styles.menuHeader}/>
                <h3><u>Dinner</u></h3>
                <br/>
                <hr className={styles.line}/>
                <h4><em>Hor D'oeuvres</em></h4>
                <br/>
                <ul className={styles.menuList}>
                        <li>
                            <h5>Le Fromage et Les Raisins</h5>
                            <p>Cheese and Grapes</p>
                            <p>&#9135; 8 &#9135;</p>
                        </li>
                        <br/>
                        <li>
                            <h5>Dattes Farcie</h5>
                            <p>Almond and Cheese Stuffed Dates</p>
                            <p>&#9135; 8 &#9135;</p>
                        </li>
                        <br/>
                        <li>
                            <h5>Le Fromage et Les Raisins</h5>
                            <p>Cheese and Grapes</p>
                            <p>&#9135; 8 &#9135;</p>
                        </li>
                        <br/>
                        <li>
                            <h5>Le Fromage et Les Raisins</h5>
                            <p>Cheese and Grapes</p>
                            <p>&#9135; 8 &#9135;</p>
                        </li>
                </ul>
                <hr className={styles.line}/>
                <h4><em>Appetizers</em></h4>
                <hr className={styles.line}/>
                <h4><em>Soup</em></h4>
                <hr className={styles.menuFooter}/>
            </div>
            <div className={styles.menu_page}>
                 <hr className={styles.menuHeader}/>
                <h4><em>Entrees</em></h4>
                <hr className={styles.line}/>
                <h4><em>Sides</em></h4>
                <hr className={styles.menuFooter}/>
            </div>
        </div>
    );
};