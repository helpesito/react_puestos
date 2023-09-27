import "./Miorg.css"

const Miorg = (props) => {
    // Estado - hook
    //useState
    //const [nombreVariable,funcionActualiza] = userState(valor inicial)
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("mostrar/ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostra}/>
    </section>
}

export default Miorg;