import './Main.scss';
import ItemsList from 'components/items-list/ItemsList';
import CasesList from 'components/cases-list/CasesList';

function Main() {
  return (
    <main className="main">
      <div className="container main__container">
        <CasesList />
        {/* <ItemsList type='knives' collection='Original' /> */}
        {/* <ItemsList type='gloves' collection='Original' /> */}
      </div>
    </main>
  );
}

export default Main;
