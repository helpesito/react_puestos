import "./Footer.css"
import iconFacebok from '../../img/facebook.png'
import iconTwitter from '../../img/twitter.png'
import iconInstagram from '../../img/instagram.png'
import iconOrg from '../../img/Favicon.png'

const Footer = () => {
    return <footer className='footer'>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src={iconFacebok} alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src={iconTwitter} alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src={iconInstagram} alt='instagram' />
            </a>
        </div>
        <img src={iconOrg} alt="Org" />
        <strong>Desarrollado por Heibert Cordoba</strong>
    </footer>
}

export default Footer