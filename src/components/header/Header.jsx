import './Header.scss';
import logo from 'assets/images/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo">
          <img src={logo} alt="csgold logo" className="logo__image" />
        </div>
      </div>
    </header>
  );
}

export default Header;
