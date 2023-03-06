import './Header.css';

function Header() {
    return (
        <div className="Header">
            <nav id="nav-header">
                <img src="https://i.postimg.cc/JnB6vXgX/logo.png" id="logo" />
                <div id="linea"></div>
                <ul id="menu">
                    <li>
                        <a id="header-line" href="/index.html">Inicio</a></li>
                    <li>
                        <a id="header-line" href="">Matrículas</a>
                        <ul id="submenu">
                            <li><a id="header-line" href="/sources/forms/formPrescolar.html">Preescolar</a></li>
                            <li><a id="header-line" href="/sources/forms/formPrimaria.html">Primaria</a></li>
                            <li><a id="header-line" href="/sources/forms/formSecundaria.html">Secundaria</a></li>
                        </ul>
                    </li>
                
                <li><a id="header-line" href="#">Notas</a></li>
                <li><a id="header-line" href="#">Docentes</a></li>
                <li><a id="header-line" href="#">Misión y Visión</a></li>
                <li><a id="header-line" href="#">PQRS</a></li>
                <li>
                    <a id="header-line" href="">functions</a>
                    <ul id="submenu">
                        <li><a id="header-line" href="#">IMC</a></li>
                    </ul>
                </li>
                </ul>
                <div id="reloj"></div>
            </nav>
        </div >
    );
}

export default Header;
