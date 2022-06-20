import Button from "../Button";
import ironhacklogo from "../../assets/images/ironhack-logo-xs.png"
import sidebarlogo from "../../assets/images/menu-top-xs.png"
import style from "./navbar.module.css"

function Navbar () {

    return (
        <div className={style.navbar}>
        <div className={style.header}>
        <img src={ironhacklogo} alt="ironhack logo" className={style.ironhacklogo} />
        <img src={sidebarlogo} alt="side bar logo" className={style.sidelogo}/>        
        </div>
        <div className={style.text}>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use 
        the most popular frontend library.
        and become a Super Ninja developer.</p>               
        </div>
        <Button className={style.awesombtn} id="awesome2">Awesome!</Button>
        </div>
    );
}

export default Navbar;