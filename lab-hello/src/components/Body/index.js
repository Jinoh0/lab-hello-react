import Icontitlep from "../Icontitlep";
import icon1 from "../../assets/images/icon1.png"
import icon2 from "../../assets/images/icon2.png"
import icon3 from "../../assets/images/icon3.png"
import icon4 from "../../assets/images/icon4.png"
import style from "./body.module.css"


function Body (props) {
    return (
        <div className={style.body}>
        <Icontitlep className={style.bodycntn} src ={icon1} alt = "icon1" title = "Declarative" p = "React makes it painless to cleate interactive UIs" />        
        <Icontitlep className={style.bodycntn} src ={icon2} alt = "icon2" title = "Components" p = "Build encapsulated components that manage their state." />        
        <Icontitlep className={style.bodycntn} src ={icon3} alt = "icon3" title = "Single-Way" p = "A set of immutable values are passed to the component's." />        
        <Icontitlep className={style.bodycntn} src ={icon4} alt = "icon4" title = "JSX" p = "Statically-typed, designed to run on modern browsers." />
        </div>
    )}
export default Body;