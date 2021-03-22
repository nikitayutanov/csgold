import './Main.scss';
import List from 'components/list/List';

function Main() {
  return (
    <main className="main">
      <div className="container main__container">
        <List items="cases" />
      </div>
    </main>
  );
}

export default Main;
