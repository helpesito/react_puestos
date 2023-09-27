import "./Miorg.css"
import add from '../../img/add.png'

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
        <img src={add} alt="add" onClick={props.cambiarMostra}/>
    </section>
}

export default Miorg;