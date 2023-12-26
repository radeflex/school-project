import "./Choosed.css"
import classes from "../../helpers/data"
import Collage from "../../components/Collage/Collage"


const Choosed = () => {
    return <>
    {classes.map((el) => <Collage title={el.title} link={el.photos}/>)}
    </>
}

export default Choosed