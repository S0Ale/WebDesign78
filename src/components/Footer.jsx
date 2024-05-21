import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="col-12 flex row transparent">
        <span>Share:</span>
        <div className="flex row social-row">
            <a href="#" className='flex'><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#" className='flex'><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="#" className='flex'><FontAwesomeIcon icon={faXTwitter}/></a>
        </div>
    </footer>
  );
}

export default Footer;