import './Main.scss';
import List from 'components/list/List';

function Main() {
  return (
    <main className="main">
      <div className="container main__container">
        {/* <List type="cases" /> */}
        <List type="knives" finishes="original-finishes" />
      </div>
    </main>
  );
}

export default Main;
