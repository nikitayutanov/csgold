import './Main.scss';
import { useState } from 'react';
import ItemsList from 'components/items-list/ItemsList';
import CasesList from 'components/cases-list/CasesList';
import Loader from 'components/loader/Loader';

function Main({ list, setList }) {
  const [isLoading, setIsLoading] = useState(false);

  const getList = () => {
    const { type, collection, finishes } = list;

    switch (type) {
      case 'cases':
        return (
          <CasesList
            setList={setList}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        );
      default:
        return (
          <ItemsList
            type={type}
            collection={collection}
            finishes={finishes}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        );
    }
  };

  return (
    <main className="main">
      <div className="container main__container">
        {isLoading && <Loader />}
        {getList()}
      </div>
    </main>
  );
}

export default Main;
