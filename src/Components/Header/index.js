
import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logo-white.png';

//import { Link } from 'react-router-dom';
import './styles.css';

const Header = ({ whiteVersion }) => {

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        
          <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
        
      </header>
    </div>
  );
};

export default Header;
