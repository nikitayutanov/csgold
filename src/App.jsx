import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Main from 'components/main/Main';
import { useState } from 'react';

function App() {
  const [list, setList] = useState({
    type: 'cases',
    collection: '',
    finishes: '',
  });

  return (
    <>
      <Header setList={setList} />
      <Main list={list} setList={setList} />
      <Footer />
    </>
  );
}

export default App;
