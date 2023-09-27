import "./Colaborador.css"

const Colaborador = (props) =>{

    const {nombre,puesto,foto,equipo} = props.datos
    const {colorPrimario} = props
    return <div className="colaborador">
        <div className="encabezado" style={{background: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}r</h5>
        </div>
    </div>
}

export default Colaborador;