import "./Collage.css"

const Collage = ({title, photos}) => {
    return <>
    <h3>{title}</h3>
    <section className="c-photos">
        {photos}
    </section>
    </>
}

export default Collage