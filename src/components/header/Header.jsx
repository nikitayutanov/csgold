import './Header.scss';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header({ setList }) {
  const handleClick = () => {
    setList({
      type: 'cases',
    });
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/">
          <div className="logo" onClick={handleClick}>
            <img src={logo} alt="csgold logo" className="logo__image" />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
