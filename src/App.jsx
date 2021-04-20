import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageview } from 'react-ga';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Main from 'components/main/Main';

function App() {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    pageview(pathname);
  }, [location]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
