import logo from '../assets/img/logo-corebiz-footer.svg';
import facebooklogo from '../assets/img/facebook-svgrepo-com.svg';
import instagramlogo from '../assets/img/instagram-svgrepo-com.svg';
import linkedinlogo from '../assets/img/linkedin-svgrepo-com.svg';
import style from './Footer.module.css';

function Footer() {
    return (
        <footer>
           <div className={style.footerContainerLeft}>
                <div className={style.footerMenuContainer}>
                        <a href="https://www.corebiz.ag/pt/" target="blank"><img src={logo} className={style.logoFooter} alt="Corebiz." /></a>
                        <p className={style.allRights}>direitos reservados. corebiz 2021</p>
                        <a href="https://pt-br.facebook.com/corebiz.ag/" target="blank"><img src={facebooklogo} className={style.socialMedia} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/corebizag/" target="blank"><img src={instagramlogo} className={style.socialMedia} alt="Facebook" /></a>
                        <a href="https://www.linkedin.com/company/corebiz-brasil/" target="blank"><img src={linkedinlogo} className={style.socialMedia} alt="Facebook" /></a>
                </div>
                <div className={style.footerLinks}>
                        <ul>
                            <li className={style.footerMenu}><a href="https://www.corebiz.ag/pt/about/" className={style.webLinkFooter} target="blank">a&nbsp;corebiz.</a></li>
                            <li className={style.footerMenu}><a href="https://www.corebiz.ag/pt/e-commerce/" className={style.webLinkFooter} target="blank">serviços</a></li>
                            <li className={style.footerMenu}><a href="https://www.corebiz.ag/pt/cases/" className={style.webLinkFooter} target="blank">cases</a></li>
                            <li className={style.footerMenu}><a href="https://www.corebiz.ag/pt/cases/#contact" className={style.webLinkFooter} target="blank">contato</a></li>
                        </ul>
                </div>
            </div>
            <div  className={style.footerContainerRight}>
                <div className={style.footerLocals}>
                        <h3>.Brasil</h3>
                        <p className={style.adress}>Avenida&nbsp;Andrômeda,&nbsp;2000.<br />
                            Bloco 6 e 8 Alphaville SP<br />
                            <br />
                            R.&nbsp;Ifigenia&nbsp;Maria&nbsp;de&nbsp;Oliveira,&nbsp;3793<br />
                            Jr. Piratininga Franca SP
                        </p>
                    </div>
                    <div className={style.footerLocals}>
                        <h3>.Argentina</h3>
                        <p className={style.adress}>Soler&nbsp;5518,&nbsp;3&nbsp;Piso<br />
                            C1425BYF<br />
                            Palermo&nbsp;Hollywood<br />
                            CABA
                        </p>
                    </div>
                    <div className={style.footerLocals}>
                        <h3>.México</h3>
                        <p className={style.adress}>Blvd.&nbsp;Miguel&nbsp;de&nbsp;Cervantes&nbsp;Saavedra&nbsp;169,<br />
                            Granada,&nbsp;Miguel&nbsp;Hidalgo,&nbsp;11520<br />
                            Ciudade&nbsp;de&nbsp;México,&nbsp;CDMX<br />
                        </p>
                    </div>
                    <div className={style.footerLocals}>
                        <h3>.Chile</h3>
                        <p className={style.adress}>Roberto&nbsp;del&nbsp;Río&nbsp;1137,<br />
                            Providencia.
                        </p>
                    </div>
            </div>
        </footer>
    )
}

export default Footer