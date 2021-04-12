import './Header.scss';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="logo">
          <img src={logo} alt="csgold logo" className="logo__image" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
