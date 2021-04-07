import './Main.scss';
import ItemsList from 'components/items-list/ItemsList';
import CasesList from 'components/cases-list/CasesList';

function Main({ list, setList }) {
  const getList = () => {
    const { type, collection, finishes } = list;

    switch (type) {
      case 'cases':
        return <CasesList setList={setList} />;
      default:
        return (
          <ItemsList type={type} collection={collection} finishes={finishes} />
        );
    }
  };

  return (
    <main className="main">
      <div className="container main__container">{getList()}</div>
    </main>
  );
}

export default Main;
