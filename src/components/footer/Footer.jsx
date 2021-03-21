import './Footer.scss';

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <small class="footer__copyright">
          © {year} csgold. All rights reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
