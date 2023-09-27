import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    //Destructuracion
    const {colorPrimario, colorSecundario, titulo} = props.datos
    const estiloTitulo = {borderColor:colorPrimario}

    const { colaboradores } = props
    console.log(colaboradores.length > 0)

    return <>{colaboradores.length > 0 && <section className="equipo" style={{ backgroundColor:colorSecundario}}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map( (colaborador,index) => <Colaborador
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    colorSecundario={colorSecundario}
                    />)
            }
        </div>
    </section>}
    </>
}

export default Equipo;