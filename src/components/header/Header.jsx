import './Header.scss';
import logo from 'assets/images/logo.png';

function Header({ setList }) {
  const handleClick = (params) => {
    setList({
      type: 'cases',
    });
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo" onClick={handleClick}>
          <img src={logo} alt="csgold logo" className="logo__image" />
        </div>
      </div>
    </header>
  );
}

export default Header;
