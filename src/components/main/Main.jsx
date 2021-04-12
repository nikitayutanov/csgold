import './Main.scss';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemsList from 'components/items-list/ItemsList';
import CasesList from 'components/cases-list/CasesList';
import Loader from 'components/loader/Loader';

function Main() {
  const [isLoading, setIsLoading] = useState(false);

  const getCasesList = () => {
    return <CasesList isLoading={isLoading} setIsLoading={setIsLoading} />;
  };

  const getItemsList = () => {
    return <ItemsList isLoading={isLoading} setIsLoading={setIsLoading} />;
  };

  return (
    <main className="main">
      <div className="container main__container">
        {isLoading && <Loader />}
        <Switch>
          <Route exact path="/" render={getCasesList} />
          <Route path="/:id" render={getItemsList} />
        </Switch>
      </div>
    </main>
  );
}

export default Main;
