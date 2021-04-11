import './Main.scss';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemsList from 'components/items-list/ItemsList';
import CasesList from 'components/cases-list/CasesList';
import Loader from 'components/loader/Loader';

function Main({ list, setList }) {
  const { type, collection, finishes } = list;
  const [isLoading, setIsLoading] = useState(false);

  console.log(list);

  return (
    <main className="main">
      <div className="container main__container">
        {isLoading && <Loader />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <CasesList
                setList={setList}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )}
          />
          <Route
            path={`/${collection}-${type}`}
            render={() => (
              <ItemsList
                type={type}
                collection={collection}
                finishes={finishes}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            )}
          />
        </Switch>
      </div>
    </main>
  );
}

export default Main;
