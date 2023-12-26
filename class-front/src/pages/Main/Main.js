import { Button } from "react-bootstrap"
import link from "../../img/link.png"
import "./Main.css"

const Main = () => {
    return <div className="main">
        <section className="m-info">
            <h3 class="m-text">Хотите чтобы фотографии вашего класса появились на нашем сайте?<br /> Свяжитесь с нами!</h3>
            <Button className="m-btn" variant="outline-success" href="mailto:maks.krav61@gmail.com">Связаться</Button>
        </section>
        <img src={link} alt="link" height={300} width={300}/>
    </div>
}

export default Main