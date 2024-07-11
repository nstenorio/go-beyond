import logo from '../assets/img/logo-corebiz-global.svg';
import style from './Header.module.css';
import openMenu from '../assets/js/OpenMenu.js'

function Menu() {
    return (
        <div className={style.menuContainer}>
            <div>
                <a href="https://www.corebiz.ag/pt/" target="blank"><img src={logo} className={style.logoMenu} alt="logo" /></a>
            </div>
            
            <div className={style.menuContent}>
                <ul>
                    <li className={style.menu}><a href="https://www.corebiz.ag/pt/about/" className={style.webLink} target="blank">a corebiz.</a></li>
                    <li className={style.menu}><a href="https://www.corebiz.ag/pt/e-commerce/" className={style.webLink} target="blank">serviços</a></li>
                    <li className={style.menu}><a href="https://www.corebiz.ag/pt/cases/" className={style.webLink} target="blank">cases</a></li>
                    <li className={style.menu}><a href="https://www.corebiz.ag/pt/cases/#contact" className={style.webLink} target="blank">contato</a></li>
                </ul>
            </div>

            <div className={style.mobileMenuIcon}>
                <button onClick={openMenu}>☰</button>
            </div>

            <div className={style.mobileMenu}>
            <ul>
                    <li className={style.menu}><a href="https://www.corebiz.ag/pt/about/" className={style.webLink} target="blank">a corebiz.</a></li>
                    <li className={style.menu}><a href="https://www.corebiz.ag/pt/e-commerce/" className={style.webLink} target="blank">serviços</a></li>
                    <li className={style.menu}><a href="https://www.corebiz.ag/pt/cases/" className={style.webLink} target="blank">cases</a></li>
                    <li className={style.menu}><a href="https://www.corebiz.ag/pt/cases/#contact" className={style.webLink} target="blank">contato</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu