import './Header.css'
import header from '../../img/header.png'

function Header() {
    return <header className='header'>
                <img src={header} alt='org_header' />;
            </header>
        
}

export default Header;