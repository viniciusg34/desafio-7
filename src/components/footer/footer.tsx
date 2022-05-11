import logoDark from '../../assets/images/logo-dark.png'
import '../../assets/styles/footer/footer.css'

const Footer = ():JSX.Element =>
{
    return(
        <>
            <div className="rodape">
                <img src={logoDark} alt="logo Rodape"  className='logoDark'/>
                <div className="linha"></div>
                <div className="pFooter">
                    <br/>
                    <p id="p1" className='textoFooter'> Company Inc, 8901 Marmora Road, Glasspow, DO4 89GR</p>
                    <br/>
                    <p id="p2" className='textoFooter'> Call us now toll free: (800)2345-6789</p>
                    <br/>
                    <p id="p3" className='textoFooter'> Costumer support suporrt@demolink.org</p>
                    <br/>
                    <p id="p4" className='textoFooter'> Skype: Sample-username</p>
                    <br/>
                </div>
            </div>
        </>
    )
}

export default Footer;